import React, { useState } from "react";
import {
  Container,
  Grid,
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
    name: "Wireless Headphones",
    price: "$99",
    image: "https://via.placeholder.com/300x200?text=Headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$199",
    image: "https://via.placeholder.com/300x200?text=Smart+Watch",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: "$29",
    image: "https://via.placeholder.com/300x200?text=Laptop+Stand",
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
        <Grid container spacing={3}>
          {wishlist.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={item.image}
                  alt={item.name}
                />
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
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Wishlist;
