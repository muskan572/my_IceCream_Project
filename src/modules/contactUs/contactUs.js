import { Footer } from "@app/components";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

export default function ContactUs() {
  const theme = useTheme();
  return (
    <>
      <Stack sx={{ alignItems: "center" }}>
        <Stack margin={10} sx={{ alignItems: "center" }}>
          <Typography variant="h1" sx={{ color: theme.palette.primary.main }}>
            Contact Us
          </Typography>
          <Typography color="#717171" fontSize="20px">
            Any question or remarks? Just write us a message!
          </Typography>
        </Stack>
        <Card
          sx={{
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
          }}
        >
          <CardContent>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Box
                sx={{
                  backgroundImage: `url('assets/images/Group 1261153078 1.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                  width: "380px",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  color="white"
                  fontSize="30px"
                  sx={{ margin: "10px" }}
                >
                  Contact Information
                </Typography>
                <Typography
                  color="#C9C9C9"
                  fontSize="14px"
                  sx={{ margin: "10px" }}
                >
                  Say Something To Start a Live Chat
                </Typography>
                <Box width="390px" padding={3}>
                  <Stack direction="row" spacing={3} padding={1}>
                    <img
                      src="assets/images/bxs_phone-call (1).png"
                      alt="phone"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <Typography color="white" fontSize="17px">
                      +1012 3456 789
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={3} padding={1}>
                    <img
                      src="assets/images/ic_sharp-email.png"
                      alt="mail"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <Typography color="white" fontSize="17px">
                      demo@gmail.com
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={3} padding={1}>
                    <img
                      src="assets/images/carbon_location-filled.png"
                      alt="location"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <Typography color="white" fontSize="17px">
                      132 Dartmouth Street Boston, Massachusetts 02156 United
                      States
                    </Typography>
                  </Stack>
                </Box>

                <Stack
                  direction="row"
                  spacing={4}
                  margin={3}
                  sx={{ alignItems: "flex-end" }}
                >
                  <Box
                    sx={{
                      bgcolor: "#840E4F",
                      width: "35px",
                      height: "35px",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="assets/images/Vector (3).png"
                      alt="tweet"
                      style={{
                        width: "20px",
                        height: "20px",
                        justifyContent: "center",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      bgcolor: "#840E4F",
                      width: "35px",
                      height: "35px",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="assets/images/Vector (4).png"
                      alt="insta"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#840E4F",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      bgcolor: "#840E4F",
                      width: "35px",
                      height: "35px",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="assets/images/Vector (5).png"
                      alt="vector"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#840E4F",
                      }}
                    />
                  </Box>
                </Stack>
              </Box>

              <Stack>
                <Box padding={3}>
                  <TextField
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                    sx={{ marginRight: "100px" }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                  />
                </Box>
                <Box padding={3}>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    sx={{ marginRight: "100px" }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Phone Number"
                    variant="standard"
                  />
                </Box>
                <Box padding={3}>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Select Subject?
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="general Enquiry"
                        control={<Radio />}
                        label="general Enquiry"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Product Inquiry"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Order Support"
                      />
                      <FormControlLabel
                        value="othe"
                        control={<Radio />}
                        label="Feedback & Suggestions"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Stack padding={3} fullWidth>
                  <TextField
                    id="standard-basic"
                    label="Message"
                    variant="standard"
                  />
                </Stack>
                <CardActions>
                  <Button
                    sx={{
                      color: theme.palette.grey[0],
                      backgroundColor: theme.palette.primary.main,
                      width: "200px",
                      height: "50px",
                      borderRadius: "40px",
                      fontWeight: "300",
                    }}
                  >
                    Send Message
                  </Button>
                </CardActions>
                <Stack>
                  <img
                    src="assets/images/letter_send 1.png"
                    alt="send"
                    style={{ width: "260px" }}
                  />
                </Stack>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
      <Box marginTop={10}>
        <Footer />
      </Box>
    </>
  );
}