import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { decrementProduct, incrementProduct } from "../../app/createSlice";

export default function AddToCart() {
  const products = useSelector((state) => state.cart.products);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Stack style={{ marginTop: "100px" }}>
    {products.length > 0 && (
      <Typography variant="h4" gutterBottom>
        Your Cart ({totalItems} items)
      </Typography>
    )}

      <Box>
        {products.length === 0 ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="300px"
            textAlign="center"
            sx={{ opacity: 0.8 }}
          >
            <ShoppingCartOutlinedIcon sx={{ fontSize: 80, color: "grey.500" }} />
            <Typography variant="h6" mt={2}>
              Your cart is empty
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Looks like you haven’t added anything to your cart yet.
            </Typography>
          </Box>
        ) : (
          <>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              sx={{
                width: "100%",
                marginTop: "20px",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: theme.palette.primary.light,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100%",
                  boxShadow: 2,
                }}
              >
                <img
                  src="/assets/images/Group 1261153042 1.png"
                  alt="ice-cream"
                  style={{ width: "160px" }}
                />
              </Box>

              <TableContainer component={Paper} sx={{ maxWidth: "100%", overflowX: "auto" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Items</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell align="right">${item.price}</TableCell>
                        <TableCell align="right">
                          <Button
                            onClick={() => dispatch(decrementProduct(item.id))}
                            size="small"
                          >
                            <RemoveIcon />
                          </Button>
                          {item.quantity}
                          <Button
                            onClick={() => dispatch(incrementProduct(item.id))}
                            size="small"
                          >
                            <AddIcon />
                          </Button>
                        </TableCell>
                        <TableCell align="right">
                          ${item.price * item.quantity}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>

            {/* Total Price */}
            <Box mt={4} display="flex" justifyContent="flex-end" px={2}>
              <Typography variant="h5">Total Price: ${totalPrice}</Typography>
            </Box>
          </>
        )}
      </Box>
    </Stack>
  );
}

