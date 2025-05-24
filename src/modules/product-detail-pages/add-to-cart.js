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
  Divider,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { decrementProduct, incrementProduct } from "../../app/createSlice";

import { Link } from "react-router-dom";
import { PATH_DASH } from "../../routes/path";

export default function AddToCart() {
  const products = useSelector((state) => state.cart.products);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const theme = useTheme();

  const isEmpty = products.length === 0;

  return (
    <Box sx={{ mt: 10, px: { xs: 2, sm: 4, md: 8 }, pb: 6 }}>
      {!isEmpty && (
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          color={theme.palette.primary.main}
        >
          Shopping Cart ({totalItems} item{totalItems > 1 ? "s" : ""})
        </Typography>
      )}

      {isEmpty ? (
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            height: 400,
            borderRadius: 3,
            backgroundColor: theme.palette.background.paper,
            textAlign: "center",
            boxShadow: 3,
          }}
        >
          <ShoppingCartOutlinedIcon
            sx={{ fontSize: 90, color: theme.palette.grey[400] }}
          />
          <Typography variant="h6" color="text.primary">
            Your cart is empty
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Looks like you haven’t added anything to your cart yet.
          </Typography>
          <Button 
            component={Link}
            to={PATH_DASH.cone}
            variant="contained"
            color="primary"
            sx={{ mt: 1, textTransform: "none", px: 4 }}
          >
            Start Shopping
          </Button>
        </Stack>
      ) : (
        <Paper
          elevation={3}
          sx={{
            borderRadius: 4,
            p: { xs: 2, md: 4 },
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: theme.palette.grey[100] }}>
                  <TableCell sx={{ fontWeight: 600 }}>Product</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600 }}>
                    Price
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Quantity
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600 }}>
                    Subtotal
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell align="right">${item.price}</TableCell>
                    <TableCell align="center">
                      <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                        <Button
                          onClick={() => dispatch(decrementProduct(item.id))}
                          size="small"
                          color="error"
                          variant="outlined"
                          sx={{ minWidth: 32 }}
                        >
                          <RemoveIcon fontSize="small" />
                        </Button>
                        <Typography fontWeight={500}>{item.quantity}</Typography>
                        <Button
                          onClick={() => dispatch(incrementProduct(item.id))}
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{ minWidth: 32 }}
                        >
                          <AddIcon fontSize="small" />
                        </Button>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Divider and Total */}
          <Divider sx={{ my: 3 }} />

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Box sx={{ mb: { xs: 2, sm: 0 } }}>
              <Typography variant="body2" color="text.secondary">
                You can update quantities or continue shopping
              </Typography>
            </Box>
            <Typography variant="h5" fontWeight={700}>
              Total: ${totalPrice.toFixed(2)}
            </Typography>
          </Box>
        </Paper>
      )}
    </Box>
  );
}
