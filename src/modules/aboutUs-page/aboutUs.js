import { Footer } from "../../components";
import { ExpandMore } from "@mui/icons-material";
import { PATH_DASH } from "../../routes/path";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  keyframes,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AboutUs = () => {
  const theme = useTheme();
  const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;
  const brands = [
    {
      img: "assets/images/image 205.png",
      title: "br",
    },
    {
      img: "assets/images/image 209.png",
      title: "Cornetto",
    },
    {
      img: "assets/images/image 206.png",
      title: "Nestle",
    },
    {
      img: "assets/images/image 210.png",
      title: "Amul",
    },
    {
      img: "assets/images/image 207.png",
      title: "rocky rd",
    },
    {
      img: "assets/images/image 208.png",
      title: "rocky rd",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of animation in ms
      once: true, // animate only once while scrolling down
    });
  }, []);
  return (
    <>
      <Stack
        sx={{
          backgroundImage: `url('assets/images/Header.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "330px",
          marginBottom: "80px",
          marginTop: "30px",
        }}
        margin={2}
      >
        <Box width="500px" padding={1}>
          <Typography sx={{ color: "white", fontSize: "40px" }}>
            What is Ice cream and
          </Typography>
          <Typography sx={{ color: "white", fontSize: "40px" }}>
            how valid is it?
          </Typography>
          <Typography sx={{ color: "#C2C2C2" }}>
            Ice cream is a beloved frozen dessert made from cream, sugar, and
            various flavorings. It comes in a wide variety of flavors and
            styles, from classic vanilla and chocolate to unique concoctions
            like matcha and lavender. Enjoyed in cones, cups, or as part of
            other desserts, ice cream is a universal treat that brings joy to
            people of all ages. Its creamy texture and sweet taste make it a
            perfect indulgence for hot summer days or any time you crave a
            delightful snack.
          </Typography>
        </Box>
      </Stack>

      <Stack display="flex" direction="row" justifyContent="space-between">
        <Box>
          <img
            data-aos="fade-up"
            src="assets/images/Group 1261153076.png"
            alt="van"
            style={{ width: "550px", margin: "10px" }}
          />
        </Box>
        <Box width="600px" padding={3}>
          <Stack direction="row" spacing={1}>
            <img
              src="assets/images/Icon Label (2).png"
              alt="icon"
              style={{ width: "20px", height: "20px" }}
            />
            <Typography color={theme.palette.grey[900]}>About Us</Typography>
          </Stack>

          <Typography fontSize="30px" color={theme.palette.grey[900]}>
            Our Company Overview
          </Typography>

          <Typography color="#666C89" marginTop={2} marginBottom={2}>
            Sweet Delights Ice Cream is positioned as a premium ice cream brand,
            focusing on high-quality ingredients, innovative flavors, and
            sustainable practices. The company targets middle to upper-income
            consumers who prioritize quality and are willing to pay a premium
            for a superior product.
          </Typography>

          <Divider />

          <Typography color="#666C89" marginTop={2} marginBottom={2}>
            The company offers a diverse range of flavors, including classic
            favorites, gourmet options, health-conscious varieties, and seasonal
            specials. With a strong focus on using the finest ingredients and
            eco-friendly practices, Sweet Delights Ice Cream targets middle to
            upper-income consumers who value exceptional taste and social
            responsibility. The brand distributes its products through retail
            stores, online platforms, flagship stores, and food service
            partnerships.
          </Typography>

          <Button
            component={Link}
            to={PATH_DASH.contact}
            sx={{
              color: "white",
              backgroundColor: theme.palette.primary.main,
              borderRadius: "20px",
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Stack>

      <Stack
        sx={{
          backgroundImage: `url('assets/images/Section 2 - Product Features.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          borderRadius: "10px",
        }}
        margin={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box sx={{ width: "430px" }} padding={2}>
          <Stack direction="row" alignItems={"center"}>
            <img
              src="assets/images/Icon Label (1).png"
              alt="icon"
              style={{ width: "30px", height: "30px" }}
            />
            <Typography>Lets Scoop Product Features</Typography>
          </Stack>

          <Typography
            sx={{ color: "white", fontSize: "32px", marginTop: "20px" }}
          >
            The Feature of Ice Cream
            <br /> That You Will Benefit From
          </Typography>

          <Button
            variant="outlined"
            component={Link}
            to="/"
            sx={{
              color: "white",
              borderRadius: "5px",
              borderColor: "white",
              marginTop: "20px",
            }}
          >
            Visit Home Page
          </Button>
        </Box>
        <Stack flexDirection="row">
          <Card
            sx={{
              borderRadius: "10px",
              backgroundColor: "transparent",
              width: "200px",
              border: "1px solid white",
              margin: "10px",
            }}
          >
            <CardMedia
              image="assets/images/star.png"
              title="star"
              sx={{ height: "150px" }}
            />
            <CardContent
              sx={{
                color: "white",
                fontSize: "30px",
                justifyContent: "center",
              }}
            >
              High Quality Product
            </CardContent>
          </Card>

          <Card
            sx={{
              borderRadius: "10px",
              backgroundColor: "transparent",
              width: "200px",
              border: "1px solid white",
              borderColor: "white",
              margin: "10px",
            }}
          >
            <CardMedia
              image="assets/images/brush.png"
              title="brush"
              sx={{ height: "150px" }}
            />
            <CardContent
              sx={{
                color: "white",
                fontSize: "30px",
                justifyContent: "center",
              }}
            >
              Prioritizes Hygine
            </CardContent>
          </Card>

          <Card
            sx={{
              borderRadius: "10px",
              backgroundColor: "transparent",
              width: "200px",
              border: "1px solid white",
              borderColor: "white",
              margin: "10px",
            }}
          >
            <CardMedia
              image="assets/images/artificial.png"
              title="artificial"
              sx={{ height: "150px" }}
            />
            <CardContent
              sx={{
                color: "white",
                fontSize: "30px",
                justifyContent: "center",
              }}
            >
              No Artificial Ingredients
            </CardContent>
          </Card>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        sx={{ justifyContent: "space-between" }}
        margin={5}
      >
        <Box>
          <img
            src="assets/images/Object - Photo.png"
            alt="ice-cream"
            style={{ width: "1200px" }}
          />
        </Box>
        <Box>
          <Stack direction="row" spacing={1}>
            <img
              src="assets/images/Icon Label.png"
              alt="icon"
              style={{ width: "20px", height: "20px" }}
            />
            <Typography color={theme.palette.grey[900]}>
              FAQ Question
            </Typography>
          </Stack>
          <Typography
            variant="h4"
            color={theme.palette.grey[800]}
            sx={{ marginBottom: "40px" }}
          >
            Frequently asked questions
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Do you have any seasonal or limited-edition flavors?
            </AccordionSummary>
            <AccordionDetails>
              Yes, we are excited to offer a variety of seasonal and
              limited-edition flavors throughout the year! Our seasonal flavors
              are inspired by the freshest ingredients available during
              different times of the year.
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Are your ingredients organic or non-GMO?
            </AccordionSummary>
            <AccordionDetails>
              we prioritize using high-quality ingredients that meet our
              sustainability standards. While we strive to source organic and
              non-GMO ingredients whenever possible, we ensure that all our
              ingredients are responsibly sourced and meet rigorous safety and
              quality guidelines. For specific product information, feel free to
              check individual labels or contact us directly.
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Can you provide nutritional information for your ice creams?
            </AccordionSummary>
            <AccordionDetails>
              You can find the detailed nutritional facts for each flavor on the
              product packaging or by visiting our website, where we have a full
              breakdown of calories, fats, carbohydrates, and other key
              information. If you have any specific dietary concerns, feel free
              to reach out to our customer service team for further assistance!
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              How do you ensure the quality and safety of your ice cream?
            </AccordionSummary>
            <AccordionDetails>
              We ensure the quality and safety of our ice cream by using premium
              ingredients, maintaining strict hygiene standards, conducting
              regular quality checks, and adhering to food safety regulations.
              Our cold chain management also guarantees freshness and safety
              from production to delivery.
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>

      <Divider sx={{ color: "#757575", fontSize: "30px" }}>
        Brand Ice Creams
      </Divider>

      <Stack direction="row" spacing={7} marginBottom="100px">
        {brands.map((items, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              animation: `${marquee} 15s linear infinite`, // Marquee animation
            }}
          >
            <img
              src={items.img}
              alt={items.title}
              style={{ width: "200px", height: "200px" }}
            />
          </Box>
        ))}
      </Stack>
      <Footer />
    </>
  );
};
export { AboutUs };
