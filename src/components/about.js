import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";

const About = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ display: "flex", marginBottom: "80px" }}>
        <Grid container margin="auto">
          <Grid
            size={{ md: 10, lg: 6, xs: 12 }}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h3" padding={1} sx={{ color: "#502C84" }}>
              About Us
            </Typography>

            <Typography
              color={theme.palette.grey[800]}
              variant="h2"
              padding={1}
              sx={{ fontWeight: "600" }}
            >
              Get The Cool Down With Our
              <span style={{ color: theme.palette.primary.main }}>
                {" "}
                Dreamy Creations
              </span>
            </Typography>

            <Typography
              variant="h6"
              padding={2}
              color={theme.palette.grey[700]}
            >
              We believe that ice cream is more than just a dessert—it`s an
              experience. Our passion for creating delectable and unique flavors
              has driven us to become a beloved name in the world of ice cream.
              Our journey began with a simple dream: to craft the most delicious
              and memorable ice cream using only the finest ingredients.
            </Typography>

            <Typography
              variant="h6"
              padding={2}
              color={theme.palette.grey[700]}
            >
              While we honor traditional favorites like classic vanilla and rich
              chocolate, we`re also known for our innovative and adventurous
              flavors.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 9, md: 10, lg: 6 }} margin="auto">
            <Box
              component="img"
              src="assets/images/image 99.png"
              alt="ice"
              sx={{ width: { sm: "600px", md: "600px" } }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box></Box>
    </>
  );
};
export { About };
