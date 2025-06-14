import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, TextField, Box, Rating
, CardActions, Button,IconButton, useTheme
 } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { addProduct } from "../../app/createSlice";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
const categoryData = [
  { name: "Oreo Chunks Flavour", image: "assets/images/image 258.png" },
  { name: "Strawberry Flavour", image: "assets/images/Group 1261153059 1.png" },
  { name: "Chocolate Flavour", image: "assets/images/Group 1261153055 1.png" },
  { name: "Nutella Flavour", image: "assets/images/image 257.png" },
  { name: "Coconut Flavour", image: "assets/images/Group 1261153065 (1) 1.png" },
  { name: "Choco Creame Flavour", image: "assets/images/Group 1261153024 1.png" },
  { name: "Choco Carmel Flavour", image: "assets/images/Group 1261153034 1.png" },
  { name: "White Chocolate Flavour", image: "assets/images/Group 1261153043 1.png" },
  { name: "Strawberry Flavour", image: "assets/images/Group 1261153050 1.png" },
  { name: "Redberry Flavour", image: "assets/images/Group 1261153053 1 (1).png" },
];

const Categories = () => {
  const [search, setSearch] = useState("");

    const [liked, setLiked] = useState(false);

  const theme = useTheme();

  const handleClick = () => {
    setLiked((prev) => !prev);
  };

  const dispatch = useDispatch();
  const handleAddToCart = () => {
      const productWithId = {
        ...categoryData, // spread the category data
        id: `${categoryData.title}`, // ensure unique ID
        price: parseFloat(categoryData.price),
      };
      dispatch(addProduct(productWithId));
    };

  const filteredCategories = categoryData.filter(cat =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Ice Cream Categories
      </Typography>

      <TextField
        fullWidth
        label="Search Categories"
        variant="outlined"
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Grid container spacing={3}>
        {filteredCategories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                transition: '0.3s',
                ':hover': { transform: 'scale(1.05)' },
                textAlign: 'center',
                p: 2,
                background:'linear-gradient(116.34deg, #FFFFFF -3.69%, #FFDAE5 106.83%)'
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  {category.name}
                </Typography>
              </CardContent>

              {/* Centered image container */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  image={category.image}
                  alt={category.name}
                  sx={{
                    width: { xs: "170px", sm: "160px", md: "120px" },
                    height: { xs: "280px", sm: "290px", md: "220px" },
                  }}
                />
               
          
              </Box>
               <Rating />
               <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
              <CardActions>
            <Button
              variant="outlined"
              onClick={handleAddToCart}
              sx={{
                color: "#CE3D8A",
                borderColor: "#CE3D8A",
                borderRadius: 5,
              }}
            >
              Add To Cart
            </Button>
            <Button
              variant="outlined"
              
              sx={{
                color: "#CE3D8A",
                borderColor: "#CE3D8A",
                borderRadius: 5,
              }}
            >
              Buy Now
            </Button>
          </CardActions>
          <IconButton onClick={handleClick} aria-label="favorite">
      {liked ? (
        <FavoriteIcon
          sx={{
            color:  theme.palette.error.main,
            height: '25px',
            display: { xs: 'none', lg: 'block' },
          }}
        />
      ) : (
        <FavoriteBorderIcon
          sx={{
            color: theme.palette.grey[900],
            height: '25px',
            display: { xs: 'none', lg: 'block' },
          }}
        />
      )}
    </IconButton>
          </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
