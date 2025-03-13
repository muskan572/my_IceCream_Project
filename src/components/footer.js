import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialMedia = [
    {
      socialMediaLink: "https://www.facebook.com/profile.php?id=61552203032346",
      name: "Facebook",
      img: "assets/images/facebook.png",
    },
    {
      socialMediaLink: "https://www.instagram.com/muskan_jhedu/",
      name: "Instagram",
      img: "assets/images/instagram.png",
    },

    {
      socialMediaLink: "https://www.linkedin.com/in/muskan-jhedu-b49a49276/",
      name: "LinkedIn",
      img: "assets/images/twitter.png",
    },
  ];

  return (
    <>
      <Grid
        container
        sx={{ textAlign: { xs: "center", lg: "left" }, padding: "10px" }}
        justifyContent="space-evenly"
      >
        <Grid size={{ xs: 12, sm: 12, md: 3 }} padding={2}>
          <Stack
            direction="row"
            sx={{ justifyContent: { xs: "center", lg: "left" } }}
          >
            <img
              src="assets/images/Logo.png"
              alt="logo"
              style={{
                width: "200px",
                marginBottom: "13px",
              }}
            />
          </Stack>

          <Typography sx={{ marginBottom: { lg: "5px" } }}>
            Your ultimate destination for frozen delights in the heart of
            Creamy, India
          </Typography>
          <Stack
            direction="row"
            sx={{ justifyContent: { xs: "center", lg: "left" } }}
            gap={2}
          >
            {socialMedia.map((icons, index) => (
              <Stack key={index}>
                <Link to={icons.socialMediaLink}>
                  <img src={icons.img} alt={icons.name} />
                </Link>
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 3 }} padding={2}>
          <Typography variant="h5" sx={{ marginBottom: "30px" }}>
            Opening Hours
          </Typography>
          <Typography>Mon - Sat : 09:00 am - 10:00 pm</Typography>
          <Typography>Sun : 09:00 am - 05:00 pm </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 3 }} padding={2}>
          <Typography variant="h5" sx={{ marginBottom: "30px" }}>
            QuickLinks
          </Typography>
          <Typography>About Us</Typography>
          <Typography>Contact Us</Typography>
          <Typography>Order Delivery</Typography>
          <Typography>Payment & Tax</Typography>
          <Typography>Terms Of Services</Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 3 }} padding={2}>
          <Typography variant="h5" sx={{ marginBottom: "30px" }}>
            Contact Us
          </Typography>
          <Typography>166/124, Vihara Mawatha, Mulgampola</Typography>
          <Typography variant="h5">Delivery Partners</Typography>
          <Stack
            direction="row"
            sx={{ justifyContent: { xs: "center", lg: "left" }, gap: "5px" }}
          >
            <img src="assets/images/1200x630wa_prev_ui 1.png" alt="delivery" />
            <img src="assets/images/image 2.png" alt="uber" />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
export { Footer };
