import { CardContent, CardMedia, Typography } from "@mui/material";
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
            marginTop: "200px",
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
      </ProductCard>
    </>
  );
};
export { CakeItems };
