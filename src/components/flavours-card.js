import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const FlavoursCard = ({ product }) => {
  return (
    <Box marginTop="20px">
      <Card
        sx={{
          width: { md: "340px", xs: "300px", sm: "300px" },
          height: { xs: "200px", sm: "200px", md: "250px" },
          margin: "22px",
          borderRadius: "20px",
          background: product.color,
        }}
      >
        <Typography variant="h5" sx={{ margin: "5px", fontWeight: "normal" }}>
          {product.title}
        </Typography>
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            sx={{
              height: { xs: "180px", sm: "180px", md: "230px" },
              width: { md: "220px", sm: "200px", xs: "160px" },
              marginTop: { xs: "-20px" },
            }}
            image={product.img}
            title={product.title}
          />
        </CardContent>
      </Card>
    </Box>
  );
};
export { FlavoursCard };
