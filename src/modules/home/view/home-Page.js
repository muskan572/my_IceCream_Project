import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import { ProductItems } from "../../../components";
import { About, FlavoursCard, Footer } from "../../../components";

const HomePage = () => {
  const buttons = ["Cone", "Stick", "Cup", "Cake", "Waffels"];
  const images = [
    {
      imageName: "assets/images/Group 1261153014.png",
      title: "little_icecream",
    },
    {
      imageName: "assets/images/Group 1261153066.png",
      title: "little_icecream",
    },
    {
      imageName: "assets/images/Group 1261153067.png",
      title: "little_icecream",
    },
    {
      imageName: "assets/images/Group 1261153017.png",
      title: "little_icecream",
    },
  ];

  const Products = [
    {
      img: "assets/images/image 15.png",
      title: "Vanilla Flavour",
      color: "linear-gradient(to right, #FFFFFF, #D1EAEE)",
    },
    {
      img: "assets/images/image 16.png",
      title: "Strawberry Flavour",
      color: "linear-gradient(to right, #FFFFFF, #F36E80)",
    },
    {
      img: "assets/images/image 229 (1).png",
      title: "Chocolate Flavour",
      color: "linear-gradient(to right, #FFFFFF, #ECC9B1)",
    },
    {
      img: "assets/images/image 232.png",
      title: "Mango Flavour",
      color: "linear-gradient(to right, #FFFFFF, #F7D590)",
    },
    {
      img: "assets/images/image 233.png",
      title: "Blueberry Flavour",
      color: "linear-gradient(to right, #FFFFFF, #E69ABB)",
    },
    {
      img: "assets/images/image 234.png",
      title: "Oreo Flavour",
      color: "linear-gradient(to right, #FFFFFF, #B79794)",
    },
  ];

  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(#FFFFFF,#fae6ec )",
        }}
      >
        <Grid
          container
          sx={{
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Grid
            size={{ xs: 12, sm: 8, md: 6 }}
            spacing={2}
            sx={{
              textAlign: { xs: "center", sm: "center", md: "left" },
              marginTop: { xs: "30px", sm: "20px", md: "50px" },
            }}
          >
            <Typography
              color={theme.palette.grey[800]}
              variant="h1"
              sx={{
                fontSize: { xs: "40px", sm: "50px", md: "60px", lg: "70px" },
                fontWeight: "600",
                margin: "20px",
                marginBottom: "40px",
              }}
            >
              Cool Down With{" "}
              <span style={{ color: theme.palette.primary.main }}>
                Our Creamy{" "}
              </span>
              Creations
            </Typography>
            <Typography
              variant="h6"
              margin={3}
              fontWeight="normal"
              color={theme.palette.grey[600]}
            >
              The perfect Blend of Creamy and dreamy.
              <br />
              Taste the Magic in every scoop
            </Typography>

            <Button
              variant="contained"
              disableRipple
              sx={{
                bgcolor: theme.palette.primary.main,
                color: theme.palette.grey[0],
                borderRadius: "25px",
                marginLeft: "20px",
                fontWeight: "500",
              }}
            >
              Shop Now
            </Button>
            <Button
              variant="text"
              sx={{
                color: theme.palette.primary.main,
                borderRadius: "25px",
                margin: "10px",
                fontWeight: "500",
              }}
            >
              Working process
            </Button>
            <Stack
              direction="row"
              spacing={2}
              margin={2}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "left" },
              }}
            >
              <Grid size={{ xs: 4 }}>
                <Typography variant="subtitle1" color={theme.palette.grey[600]}>
                  2000+
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                >
                  Types of Ice Cream
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid size={{ xs: 4 }}>
                <Typography variant="subtitle1" color={theme.palette.grey[600]}>
                  20+
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                >
                  Offline Shipped
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid size={{ xs: 4 }}>
                <Typography variant="subtitle1" color={theme.palette.grey[600]}>
                  100k+
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                >
                  Happy Costumers
                </Typography>
              </Grid>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 10, md: 6 }}>
            <img
              src="assets/images/Group 1261153013.png"
              alt="ice-cream"
              style={{ width: { xs: "400px", md: "800px", lg: "700px" } }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Grid size={{ md: 5 }} sx={{ display: { xs: "none", md: "block" } }}>
            <img
              src="assets/images/image 13.png"
              alt="ice-cream"
              style={{ width: "600px" }}
            />
          </Grid>
          <Grid size={{ md: 3, xs: 10 }} sx={{ textAlign: "center" }}>
            <Typography
              sx={{ fontSize: "25px" }}
              color={theme.palette.grey[800]}
            >
              Satisfy Your
              <span style={{ color: theme.palette.primary.main }}>
                {" "}
                Sweet Tooth
              </span>
              ,Naturally
            </Typography>
            <Typography
              variant="body1"
              color={theme.palette.grey[800]}
              sx={{ fontSize: "14px", marginTop: "5px" }}
            >
              Cool,refreshing and indulgent treats that are perfect
            </Typography>
          </Grid>

          <Grid size={{ lg: 3, xs: 12, md: 4 }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              margin={4}
            >
              {images.map((LittleIcon, index) => (
                <Stack key={index}>
                  <Items LittleIcon={LittleIcon} />
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Typography
        variant="h2"
        sx={{ textAlign: "center", marginBottom: "30px" }}
      >
        Explore Different Flavours
      </Typography>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", margin: "auto" }}
      >
        {Products.map((product, index) => (
          <Grid key={index}>
            <FlavoursCard product={product} />
          </Grid>
        ))}
      </Grid>
      <About />
      <ProductItems buttons={buttons} />
      <Footer />
    </>
  );
};
export { HomePage };

const Items = ({ LittleIcon }) => (
  <>
    <img
      src={LittleIcon.imageName}
      alt={LittleIcon.title}
      style={{ width: "50px", height: "50px" }}
    />
  </>
);
