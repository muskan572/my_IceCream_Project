import { CardContent, CardMedia, Typography, useTheme } from "@mui/material";
import { ProductCard } from "../productBackgroundCard";

const StickItems = ({ image, StickName, color }) => {
  const theme = useTheme();
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
        <Typography variant="body1" color={theme.palette.grey[800]}>
          {StickName}
        </Typography>
        <CardContent>
          <CardMedia
            image={image}
            title={StickName}
            sx={{
              width: { xs: "150px", sm: "160px", md: "180px" },
              height: { sm: "290px", xs: "330px", md: "320px" },
              marginTop: "-360px",
            }}
          />
        </CardContent>
      </ProductCard>
    </>
  );
};
export { StickItems };
