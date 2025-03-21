import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Rating,
    Select,
    Stack,
    Typography,
  } from "@mui/material";
  import Grid from "@mui/material/Grid2";
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  
  const CupProduct = () => {
    const products = [
      {
        title: "Chocolate Nut Flavour",
        price: "50.00",
        originalPrice: "70.00",
        image: "assets/images/image 258.png",
      },
      {
        title: "3 Combo Flavour",
        price: "50.00",
        originalPrice: "70.00",
        image: "assets/images/image 257.png",
      },
      {
        title: "3 Combo Flavour",
        price: "50.00",
        originalPrice: " 70.00",
        image: "assets/images/image 256.png",
      },
      {
        title: "White Chocolate Flavour",
        price: "50.00",
        originalPrice: "70.00",
        image: "assets/images/image 255.png",
      },
      {
        title: "2 Combo Flavour",
        price: "50.00",
        originalPrice: "70.00",
        image: "assets/images/image 258.png",
      },
      {
        title: "Mix Combo Flavour",
        price: "50.00",
        originalPrice: "70.00",
        image: "assets/images/image 261.png",
      },
    ];
    return (
      <>
        <Stack
          sx={{
            backgroundImage: `url('assets/images/image 192.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "350px",
          }}
          margin={2}
          direction="row"
          justifyContent="space-evenly"
        >
          <Box>
            <img
              src="assets/images/Group 1261153079.png"
              alt="cakes"
              style={{ width: "650px" }}
            />
          </Box>
          <Box>
            <Typography
              color="#840E4F"
              fontSize="40px"
              width="300px"
              fontWeight="bold"
            >
              Get free 1GB data when you buy 2
              <img
                src="assets/images/image 194.png"
                alt="magnum"
                style={{ width: "150px" }}
              />{" "}
            </Typography>
  
            <Typography
              color="#840E4F"
              fontSize="40px"
              fontWeight="bold"
              width="300px"
            >
              bars and enjoy your internet{" "}
            </Typography>
          </Box>
        </Stack>
        <Box sx={{ display: "flex", p: 2 }}>
          <Grid>
            <Box sx={{ width: 250, marginRight: 4 }}>
              <Typography variant="h6" gutterBottom>
                Filters
              </Typography>
              <Divider sx={{ mb: 2 }} />
  
              {/* Filter by Price */}
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Price</InputLabel>
                <Select defaultValue="">
                  <MenuItem value={10}>$10 - $20</MenuItem>
                  <MenuItem value={30}>$30 - $50</MenuItem>
                  <MenuItem value={50}>$50 - $70</MenuItem>
                </Select>
              </FormControl>
  
              {/* Filter by Product Type */}
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Product Type</InputLabel>
                <Select defaultValue="">
                  <MenuItem value="icecream">Ice Cream</MenuItem>
                  <MenuItem value="popsicle">Popsicle</MenuItem>
                  <MenuItem value="gelato">Gelato</MenuItem>
                </Select>
              </FormControl>
  
              {/* Filter by Category */}
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Category</InputLabel>
                <Select defaultValue="">
                  <MenuItem value="chocolate">Chocolate</MenuItem>
                  <MenuItem value="fruit">Fruit</MenuItem>
                  <MenuItem value="nuts">Nuts</MenuItem>
                </Select>
              </FormControl>
  
              {/* Filter by Brand */}
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Brand</InputLabel>
                <Select defaultValue="">
                  <MenuItem value="brandA">Magnum</MenuItem>
                  <MenuItem value="brandB">Havmore B</MenuItem>
                  <MenuItem value="brandC">Vadilal C</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
  
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              {products.map((product, index) => (
                <Grid size={{ md: 5 }} key={index}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </>
    );
  };
  
  const ProductCard = ({ product, index  }) => (
    <>
      <Card sx={{ width: "260px" }} key={index}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            background: "linear-gradient( #FCF9FA, #FDEEF3)",
          }}
        >
          <CardMedia
            image={product.image}
            title={product.title}
            sx={{
              width: "100px",
              height: "230px",
            }}
          />
        </Box>
        <CardContent>
          <Box>
            <Stack direction="row" justifyContent="space-between">
              <Typography sx={{ fontWeight: "300" }}>{product.title}</Typography>
              <FavoriteBorderIcon />
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography>{product.Price}</Typography>
              <Typography sx={{ textDecoration: "line-through" }}>
                {product.originalPrice}
              </Typography>
            </Stack>
            <Rating />
            <CardActions>
              <Button
                variant="outlined"
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
    </>
  );
  export { CupProduct };