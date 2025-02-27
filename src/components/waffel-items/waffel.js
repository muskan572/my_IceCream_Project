import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid"; 
const { WaffelItems } = require("./waffelItems");

const Waffel = () => {
  const theme = useTheme();
  const Waffel = [
    {
      id: 1,
      waffelName: "Chocolate Nut Flavour",
      img: "assets/images/Group 1261153021 (1) 1.png",
      alt: "Chocolate nut waffle",
      bg: theme.palette.grey[400],
    },
    {
      id: 2,
      waffelName: "3 Combo Flavour",
      img: "assets/images/Group 1261153050 1.png",
      alt: "Three combo waffle",
      bg: theme.palette.secondary.lighter,
    },
    {
      id: 3,
      waffelName: "3 Combo Flavour",
      img: "assets/images/Group 1261153051 1.png",
      alt: "Three combo waffle with toppings",
      bg: theme.palette.grey[500],
    },
    {
      id: 4,
      waffelName: "White Chocolate Flavour",
      img: "assets/images/Group 1261153052 1.png",
      alt: "White chocolate waffle",
      bg: theme.palette.secondary.extraDarker,
    },
    {
      id: 5,
      waffelName: "2 Combo Flavour",
      img: "assets/images/Group 1261153053 1 (1).png",
      alt: "Two combo waffle",
      bg: theme.palette.primary.contrastText,
    },
    {
      id: 6,
      waffelName: "Mix Combo Nuts Flavour",
      img: "assets/images/Group 1261153054 1.png",
      alt: "Mixed nuts waffle",
      bg: theme.palette.tertiary?.main || "#ffffff", // Added fallback in case tertiary is undefined
    },
  ];
  
  return (
    <Grid container spacing={2}> {/* Added spacing for better UI */}
      {Waffel.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}> {/* Corrected 'size' to 'item' */}
          <WaffelItems
            waffelName={item.waffelName}
            img={item.img}
            alt={item.alt}
            color={item.bg}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export { Waffel };
