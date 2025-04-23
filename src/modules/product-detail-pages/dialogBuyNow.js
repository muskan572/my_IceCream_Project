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
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

export default function DialogBuyNow({ open, Close }) {
  const theme = useTheme();
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
            <Typography
              sx={{
                color: theme.palette.primary.main,
                textDecoration: "underline",
              }}
            >
              Forget Password?
            </Typography>
          </Stack>
          <DialogActions>
            <Button
              fullWidth
              sx={{
                backgroundColor: theme.palette.primary.main,
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
            <Button style={{ width: "30px", height: "30px" }}>
              <FacebookIcon />
            </Button>
            <Button>
              <XIcon />
            </Button>
            <Button style={{ width: "30px", height: "30px" }}>
              <GoogleIcon />
            </Button>
          </Stack>
          <Stack direction="row" justifyContent="center" margin={2}>
            <Typography>
              Don`t have an account?
              <span
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: "underline",
                }}
              >
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
