import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  List,
  ListItem,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from "react-redux";

import { useState } from "react";

import { add } from "../../app/createSlice";
import DialogBuyNow from "./dialogBuyNow";
import DialogGetQuote from "./dialogGetQuote";

const ProductDetails = () => {
  const [open, setOpen] = useState(false);
  const [openBuyNow, setOpenBuyNow] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpenBuyNow(true);
  };
  const Close = () => {
    setOpenBuyNow(false);
  };

  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  const sample = [
    {
      img: "image 108.png",
      title: "ice-cream",
    },
    {
      img: "image 109.png",
      title: "ice-cream",
    },
    {
      img: "image 110.png",
      title: "ice-cream",
    },
    {
      img: "image 111.png",
      title: "ice-cream",
    },
  ];
  const similar = [
    {
      id: 1,
      img: "image 229.png",
      title: "ice-craem",
      name: "Nutty Chocolate Light",
      discountPrice: "$50.00",
      actualPrice: "$70.00 ",
    },
    {
      id: 2,
      img: "image 229.png",
      title: "ice-cream",
      name: "Nutty Chocolate Light",
      discountPrice: "$50.00",
      actualPrice: "$70.00 ",
    },
    {
      id: 3,
      img: "image 229.png",
      title: "ice-cream",
      name: "Nutty Chocolate Light",
      discountPrice: "$50.00",
      actualPrice: "$70.00 ",
    },
    {
      id: 4,
      img: "image 229.png",
      title: "ice-cream",
      name: "Nutty Chocolate Light",
      discountPrice: "$50.00",
      actualPrice: "$70.00 ",
    },
  ];
  return (
    <>
      <Stack direction="row" spacing={4} marginTop={12}>
        <Stack spacing={3}>
          {sample.map((items, index) => (
            <Box
              key={index}
              sx={{
                width: "140px",
                height: "111px",
                border: 2,
                borderColor: "#F0F0F0",
                borderRadius: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={items.img}
                alt={items.title}
                style={{ width: "50px", height: "90px" }}
              />
            </Box>
          ))}
        </Stack>
        <Box
          sx={{
            width: "400px",
            height: "530px",
            bgcolor: "#F1F1F1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
          }}
        >
          <img
            src="Group 1261153040 1.png"
            alt="selected ice-cream"
            style={{ width: "260px", height: "650px" }}
          />
        </Box>
        <Stack sx={{ width: "570px" }}>
          <Typography variant="h4">
            Nutty Chocolate Delight Icecream with liquid chocolate in it{" "}
          </Typography>
          <Rating sx={{ color: "#CE3D8A" }} />
          <Typography variant="subtitle2">
            <strong>Brand:</strong> Amul{" "}
          </Typography>
          <Typography variant="subtitle2">
            <strong>Model:</strong> Chocolate
          </Typography>
          <Typography variant="subtitle2">
            <strong>Availability:</strong>
            Only 2 in Stock
          </Typography>
          <List>
            <ListItem>
              The deep, robust taste of chocolate creates a luxurious base
            </ListItem>
            <ListItem>
              A smooth and creamy consistency that melts in your mouth.
            </ListItem>
            <ListItem>
              The combination of chocolate and nuts produces a tantalizing
              aroma.
            </ListItem>
            <ListItem>
              Can be enjoyed on its own, in a sundae, or as part of other
              dessert recipes.
            </ListItem>
            <ListItem>
              The sweetness of the chocolate is balanced by the natural flavors
              of the nuts.
            </ListItem>
          </List>
          <Box
            sx={{
              width: "400px",
              border: 2,
              height: "100px",
              borderRadius: 2,
              borderColor: "#E1E1E1",
            }}
          >
            <Stack direction="row" justifyContent="space-between" padding={1}>
              <Box>
                <Typography>USD(incl. of all taxes)</Typography>
                <Stack direction="row" spacing={1}>
                  <Typography>$80.72</Typography>
                  <Typography
                    sx={{ textDecoration: "line-through", color: "#A5A5A5" }}
                  >
                    $100.00
                  </Typography>
                </Stack>
              </Box>
              <Button
                onClick={handleOpen}
                variant="contained"
                sx={{
                  borderRadius: 7,
                  backgroundColor: "#CE3D8A",
                  width: "150px",
                  height: "42px",
                }}
              >
                Buy Now
              </Button>

              <DialogBuyNow open={openBuyNow} Close={Close} />
            </Stack>
            <Stack direction="row" justifyContent="space-between" padding={1}>
              <Typography variant="h6">Quantity:</Typography>
            </Stack>
          </Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            width="400px"
            margin={2}
          >
            <Button
              variant="contained"
              onClick={handleClickOpen}
              sx={{
                backgroundColor: "#CE3D8A",
                borderRadius: 7,
                width: "150px",
                height: "42px",
              }}
            >
              Get Quote
            </Button>
            <Dialog
              open={open}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogGetQuote handleClose={handleClose} />
            </Dialog>
            <Button
              variant="outlined"
              sx={{
                color: "#CE3D8A",
                borderColor: "#CE3D8A",
                borderRadius: 7,
                width: "150px",
                height: "42px",
              }}
            >
              Add To Cart
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Box
        sx={{
          background:
            "linear-gradient(175deg, #FFFFFF -40.36%, #FFE6EE 271.03%)",
          height: "500px",
          margin: 4,
          borderRadius: 4,
          padding: 4,
        }}
      >
        <Stack spacing={5}>
          <Stack gap={1} color="#545454">
            <Typography variant="h6">
              <strong>Benefits of chocolate icecream are:-</strong>
            </Typography>
            <Typography>Supports strong bones and teeth.</Typography>
            <Typography>Provides quick energy from sugars and fats</Typography>
            <Typography>Enhances social experiences and bonds..</Typography>
            <Typography>
              Can be topped with healthy additions like fruits and nuts.
            </Typography>
            <Typography>Brings nostalgia and comfort.</Typography>
            <Typography>Contains water, aiding in hydration.</Typography>
            <Typography>Offers protein, vitamins, and minerals.</Typography>
            <Typography>Increases serotonin, boosting happiness.</Typography>
          </Stack>

          <Stack gap={1} color="#545454">
            <Typography>
              <strong>Three tips are optional at extra cost are:-</strong>
            </Typography>
            <Typography>
              Make sure it`s fresh and within the expiry date.
            </Typography>
            <Typography>
              Opt for reputable brands known for high-quality products.
            </Typography>
            <Typography>Short Tip For Flat Surface Debridement</Typography>
          </Stack>
        </Stack>
      </Box>

      <Typography variant="h4">Products you may like</Typography>
      <Stack direction="row" padding={2} spacing={3}>
        {similar.map((items, index) => (
          <Card sx={{ width: "260px" }} key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                background: "linear-gradient( #FCF9FA, #FDEEF3)",
              }}
            >
              <CardMedia
                image={items.img}
                title={items.title}
                sx={{
                  width: "100px",
                  height: "230px",
                }}
              />
            </Box>
            <CardContent>
              <Box>
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ fontWeight: "300" }}>
                    {items.name}
                  </Typography>
                  <FavoriteBorderIcon />
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography>{items.discountPrice}</Typography>
                  <Typography sx={{ textDecoration: "line-through" }}>
                    {items.actualPrice}
                  </Typography>
                </Stack>
                <Rating />
                <CardActions>
                  <Button
                    variant="outlined"
                    onClick={() => handleAdd(items)}
                    sx={{
                      color: "#CE3D8A",
                      borderColor: "#CE3D8A",
                      borderRadius: 5,
                    }}
                  >
                    Add To Cart
                  </Button>
                </CardActions>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </>
  );
};
export { ProductDetails };
