import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { ProductCard } from "../productBackgroundCard";

const CakeItems = ({ image, cakeName, color }) => {
  return (
    <>
      <ProductCard>
        <image
          src="assets/icons/Vector 10.svg"
          alt="my SVG image"
          style={{
            width: "179px",
            height: { xs: "200px" },
            marginTop: "50px",
            marginRight: "34px",
            objectFit: "fill",
            fill: color,
          }}
        />
        <Typography variant="body1">{cakeName}</Typography>
        <CardContent>
          <CardMedia
            image={image}
            title={cakeName}
            sx={{
              width: { xs: "170px", sm: "160px", md: "180px" },
              height: { sm: "290px", xs: "280px", md: "320px" },
              marginTop: "-370px",
            }}
          />
        </CardContent>
        <Box
          sx={{
            backgroundColor: color,
            height: "60px",
            width: "60px",
            borderRadius: "120px",
            marginRight: "10px",
            marginTop: "-10px",
          }}
        >
          <image
            src="assets/images/Mask group (4).png"
            alt="click"
            style={{ width: "70px" }}
          />
        </Box>
      </ProductCard>
    </>
  );
};
export { CakeItems };