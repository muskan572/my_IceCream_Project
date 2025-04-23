import {
  Box,
  Button,
  Card,
  CardContent,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DialogProduct from "./dialogGetProduct";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { decrementProduct, incrementProduct } from "../../app/createSlice";

export default function DialogGetQuote({ handleClose }) {
  const cartItems = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <DialogTitle id="alert-dialog-title">{"Get Quote"}</DialogTitle>
        <Button sx={{ color: "black" }} onClick={handleClose}>
          <CloseIcon />
        </Button>
      </Stack>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Welcome to Syncglob quote. Please fill in the form below before
          requesting the quote.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="First Name"
          label="First Name"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="Last Name"
          label="Last Name"
          type="text"
          fullWidth
          variant="standard"
        />

        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="Phone Number"
          label="Phone Number"
          type="text"
          fullWidth
          variant="standard"
        />
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: 1,
          }}
        >
          <Typography variant="h6">Product Lists</Typography>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            sx={{
              bgcolor: theme.palette.primary.main,
              color: "white",
              width: "150px",
              borderRadius: "20px",
            }}
          >
            Add Product
          </Button>

          <DialogProduct open={open} onClose={handleClickClose} />
        </Stack>

        {cartItems.map((item) => (
          <Card
            key={item.id}
            sx={{ margin: 1, boxShadow: " 0px 12px 24px #919EAB1F" }}
          >
            <CardContent>
              <Stack>
                <Typography variant="h5">{item.name}</Typography>
              </Stack>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography margin={2}>Quantity:</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  backgroundColor="white"
                  border={1}
                  borderColor={theme.palette.primary.main}
                  borderRadius={10}
                  height="40px"
                  width="120px"
                  display="flex"
                  justifyContent="center"
                >
                  <Button
                    onClick={() => dispatch(decrementProduct(item.id))}
                    disableRipple
                  >
                    <Box
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        borderRadius: "50px",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <RemoveIcon sx={{ color: "white", width: "20px" }} />
                    </Box>
                  </Button>
                  <Typography>{item.quantity}</Typography>
                  <Button
                    onClick={() => dispatch(incrementProduct(item.id))}
                    disableRipple
                  >
                    <Box
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        borderRadius: "50px",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AddIcon sx={{ color: "white" }} />
                    </Box>
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </DialogContent>
      <DialogActions>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          fullWidth
        >
          <Button
            sx={{
              bgcolor: theme.palette.primary.main,
              color: "white",
              width: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Send Quote Request
          </Button>
        </Stack>
      </DialogActions>
    </>
  );
}
