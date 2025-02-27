import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { ProductCard } from "../productBackgroundCard";

const WaffelItems = ({ img, waffelName, color }) => {
  return (
    <>
      <ProductCard>
        <img
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
        />{" "}
        <Typography variant="body1">{waffelName}</Typography>
        <CardContent>
          <CardMedia
            image={img}
            title={waffelName}
            sx={{
              width: { xs: "150px", sm: "160px", md: "180px" },
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
            marginLeft: { xs: "70px", md: "75px" },
            marginRight: "70px",
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
export { WaffelItems };