import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { ProductCard } from "../productBackgroundCard";

const CupItems = ({ image, cupName, color }) => {
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
        <Typography variant="body1">{cupName}</Typography>
        <CardContent>
          <CardMedia
            image={image}
            title={cupName}
            sx={{
              width: { xs: "140px", sm: "150px", md: "180px" },
              height: { xs: "230px", sm: "220px", md: "320px" },
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
            marginLeft: "10px",
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
export { CupItems };