import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, TextField, Box } from '@mui/material';
import Grid from '@mui/material/Grid';

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
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
