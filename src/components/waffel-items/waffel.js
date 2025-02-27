const { WaffelItems } = require("./waffelItems");
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
const Waffel = () => {
  const theme = useTheme();
  const Waffel = [
    {
      id: 1,
      waffelName: "Chocolate Nut Flavour",
      img: "assets/images/Group 1261153021 (1) 1.png",
      bg: theme.palette.grey[4000],
    },
    {
      id: 2,
      waffelName: "3 Combo Flavour",
      img: "assets/images/Group 1261153050 1.png",
      bg: theme.palette.secondary.lighter,
    },
    {
      id: 3,
      waffelName: "3 Combo Flavour",
      img: "assets/images/Group 1261153051 1.png",
      bg: theme.palette.grey[5000],
    },
    {
      id: 4,
      waffelName: "White Chocolate Flavour",
      img: "assets/images/Group 1261153052 1.png",
      bg: theme.palette.secondary.extraDarker,
    },
    {
      id: 5,
      waffelName: "2 Combo Flavour",
      img: "assets/images/Group 1261153053 1 (1).png",
      bg: theme.palette.primary.contrastText,
    },
    {
      id: 6,
      waffelName: "Mix Combo Nuts Flavour",
      img: "assets/images/Group 1261153054 1.png",
      bg: theme.palette.tertiary.main,
    },
  ];
  return (
    <Grid container>
      {Waffel.map((items, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <WaffelItems
            waffelName={items.waffelName}
            img={items.img}
            color={items.bg}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export { Waffel };