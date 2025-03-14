import { CardContent, CardMedia, Typography } from "@mui/material";
import { ProductCard } from "../productBackgroundCard";

const ConeItems = ({ image, coneName, color }) => {
  return (
    <>
      <ProductCard>
        <image
          src="assets/icons/Vector 10.svg"
          alt="my SVG image"
          style={{
            width: "179px",
            height: { xs: "200px" },
            marginTop: "170px",
            marginRight: "34px",
            objectFit: "fill",
            fill: color,
          }}
        />{" "}
        <Typography variant="body1">{coneName}</Typography>
        <CardContent>
          <CardMedia
            image={image}
            title={coneName}
            sx={{
              width: { xs: "140px", sm: "160px", md: "180px" },
              height: { sm: "290px", xs: "330px", md: "320px" },
              marginTop: "-350px",
            }}
          />
        </CardContent>
      </ProductCard>
    </>
  );
};
export { ConeItems };
