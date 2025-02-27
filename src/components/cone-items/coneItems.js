import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { ProductCard } from "../productBackgroundCard";

const ConeItems = ({ img, coneName, color }) => {
  return (
    <>
      <ProductCard>
        <img
          src="assets/icons/Vector 10.svg"
          alt="my SVG image"
          style={{
            width: "179px",
            height: { xs: "200px" },
            marginTop: "55px",
            marginRight: "34px",
            objectFit: "fill",
            fill: color,
          }}
        />{" "}
        <Typography variant="body1">{coneName}</Typography>
        <CardContent>
          <CardMedia
            image={img}
            title={coneName}
            sx={{
              width: { xs: "140px", sm: "160px", md: "180px" },
              height: { sm: "290px", xs: "330px", md: "320px" },
              marginTop: "-350px",
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
          <img
            src="assets/images/Mask group (4).png"
            alt="click"
            style={{ width: "70px" }}
          />
        </Box>
      </ProductCard>
    </>
  );
};
export { ConeItems };