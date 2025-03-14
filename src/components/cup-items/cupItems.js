import { CardContent, CardMedia, Typography } from "@mui/material";
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
            marginTop: "190px",
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
      </ProductCard>
    </>
  );
};
export { CupItems };
