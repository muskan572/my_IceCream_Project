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
import { decrementProduct, incrementProduct } from "../../app/createSlice";

export default function AddToCart() {
  const products = useSelector((state) => state.cart.products);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Stack style={{ marginTop: "100px" }}>
      <Typography variant="h4" gutterBottom>
        Your Cart ({totalItems} items)
      </Typography>
      <Box>
        {products.length === 0 ? (
          <Typography>Cart is Empty</Typography>
        ) : (
          <>
            <Stack
              direction="row"
              style={{
                width: "full",
                margin: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                sx={{
                  width: "400px",
                  height: "400px",
                  backgroundColor: theme.palette.primary.light,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100px",
                  boxShadow: "1px 1px 1px 1px #00000040",
                }}
              >
                <img
                  src="/assets/images/Group 1261153042 1.png"
                  alt="ice-cream"
                  style={{ width: "200px" }}
                />
              </Box>

              <TableContainer component={Paper}>
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
                          >
                            <RemoveIcon />
                          </Button>
                          {item.quantity}
                          <Button
                            onClick={() => dispatch(incrementProduct(item.id))}
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

              {/* Display total price */}
            </Stack>
            <Box mt={4} display="flex" justifyContent="flex-end">
              <Typography variant="h5">Total Price: ${totalPrice}</Typography>
            </Box>
          </>
        )}
      </Box>
    </Stack>
  );
}
