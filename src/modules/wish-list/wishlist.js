import { useState } from "react";
import {
  Container,
  Grid2,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const initialWishlist = [
  {
    id: 1,
    name: "Oreo Chunks Flavour",
    price: "$99",
    image: "assets/images/image 258.png",
  },
  {
    id: 2,
    name: "Nutella Flavour",
    price: "$199",
    image: "assets/images/image 257.png",
  },
  {
    id: 3,
    name: "Redberry Flavour",
    price: "$29",
    image: "assets/images/Group 1261153053 1 (1).png",
  },
  {
    id: 4,
    name: "Strawberry Flavour",
    price: "$99",
    image: "assets/images/Group 1261153059 1.png",
  },
  {
    id: 5,
    name: "Chocolate Flavour",
    price: "$99",
    image: "assets/images/Group 1261153055 1.png",
  },
  {
    id: 6,
    name: "Choco Creame Flavour",
    price: "$99",
    image: "assets/images/Group 1261153024 1.png",
  },
  {
    id: 7,
    name: "White Chocolate Flavour",
    price: "$99",
    image: "assets/images/Group 1261153043 1.png",
  },
];

function Wishlist() {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const moveToCart = (id) => {
    alert("Moved to cart!");
    removeItem(id);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {wishlist.length > 0 && (
      <Typography variant="h4" gutterBottom>
        My Wishlist
      </Typography>
    )}

      {wishlist.length === 0 ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="300px"
          textAlign="center"
        >
          <FavoriteBorderIcon sx={{ fontSize: 80, color: "grey.400" }} />
          <Typography variant="h6" mt={2}>
            Your wishlist is empty
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Browse items and add them to your wishlist.
          </Typography>
        </Box>
      ) : (
        <Grid2 container spacing={3}>
          {wishlist.map((item) => (
            <Grid2 item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: "170px", sm: "160px", md: "120px" },
                    height: { xs: "280px", sm: "290px", md: "220px" },
                  }}
                  image={item.image}
                  alt={item.name}
                />
                </Box>
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="space-between" width="100%">
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => moveToCart(item.id)}
                      startIcon={<ShoppingCartCheckoutIcon />}
                    >
                      Move to Cart
                    </Button>
                    <Button
                      size="small"
                      color="error"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      )}
    </Container>
  );
}

export default Wishlist;
