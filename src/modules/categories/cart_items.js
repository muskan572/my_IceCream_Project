import  { useState } from 'react';
import {  Card, CardMedia, CardContent, Typography, TextField, Box, Grid2 } from '@mui/material';

const categoryData = [
  { name: "Classic", image: "/images/classic.jpg" },
  { name: "Gelato", image: "/images/gelato.jpg" },
  { name: "Sorbet", image: "/images/sorbet.jpg" },
  { name: "Frozen Yogurt", image: "/images/frozen-yogurt.jpg" },
  { name: "Vegan", image: "/images/vegan.jpg" },
  { name: "Soft Serve", image: "/images/soft-serve.jpg" },
  { name: "Rolled Ice Cream", image: "/images/rolled.jpg" },
  { name: "Kulfi", image: "/images/kulfi.jpg" },
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

      <Grid2 container spacing={3}>
        {filteredCategories.map((category, index) => (
          <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ transition: '0.3s', ':hover': { transform: 'scale(1.05)' } }}>
              <CardMedia
                component="img"
                height="160"
                image={category.image}
                alt={category.name}
              />
              <CardContent>
                <Typography variant="h6" component="div" align="center">
                  {category.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Categories;
