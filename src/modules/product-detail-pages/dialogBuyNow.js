import {
    Button,
    DialogActions,
    DialogContentText,
    DialogTitle,
    Divider,
    Typography,
    TextField,
    Stack,
    Dialog,
    DialogContent,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
  import { Link } from "react-router-dom";
  
  export default function DialogBuyNow({ open, Close }) {
    return (
      <>
        <Dialog open={open} fullWidth>
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <DialogTitle id="alert-dialog-title">{"Hello There!"}</DialogTitle>
            <Button sx={{ color: "black" }} onClick={Close}>
              <CloseIcon />
            </Button>
          </Stack>
          <DialogContentText id="alert-dialog-description" sx={{ marginLeft: 3 }}>
            Sign In To Your Ice Cream Account
          </DialogContentText>
          <DialogContent sx={{ padding: 3 }}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="email"
              name="Email"
              label="Email"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="password"
              name="password"
              label="password"
              type="password"
              fullWidth
              variant="standard"
            />
            <Stack sx={{ textAlign: "end" }}>
              <Typography sx={{ color: "#CE3D8A", textDecoration: "underline" }}>
                <Link to="/ForgetPassword">Forget Password?</Link>
              </Typography>
            </Stack>
            <DialogActions>
              <Button
                fullWidth
                sx={{
                  backgroundColor: "#CE3D8A",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "20px",
                }}
              >
                Sign In
              </Button>
            </DialogActions>
            <Divider sx={{ margin: 2 }}> Continue with </Divider>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 2,
              }}
            >
              <img
                src="logos_facebook.png"
                alt="facebook"
                style={{ width: "30px", height: "30px" }}
              />
              <img
                src="Vector.jpg"
                alt="x"
                style={{ width: "20px", height: "20px" }}
              />
              <img
                src="flat-color-icons_google.png"
                alt="google"
                style={{ width: "30px", height: "30px" }}
              />
            </Stack>
            <Stack direction="row" justifyContent="center" margin={2}>
              <Typography>
                Don`t have an account?
                <span style={{ color: "#CE3D8A", textDecoration: "underline" }}>
                  {" "}
                  Sign Up
                </span>
              </Typography>
            </Stack>
          </DialogContent>
        </Dialog>
      </>
    );
  }
  