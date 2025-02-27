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
  } from "@mui/material";
  import { useSelector, useDispatch } from "react-redux";
 
  import AddIcon from "@mui/icons-material/Add";
  import RemoveIcon from "@mui/icons-material/Remove";
import { decrement, increment } from "@app/app/createSlice";
  
  export default function AddToCart() {
    const products = useSelector((state) => state.cart.items);
    const totalItems = useSelector((state) => state.cart.totalUniqueItems);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();
  
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
                    backgroundColor: "#eeeeee",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={products.img}
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
                            <Button onClick={() => dispatch(decrement(item.id))}>
                              <RemoveIcon />
                            </Button>
                            {item.quantity}
                            <Button onClick={() => dispatch(increment(item.id))}>
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