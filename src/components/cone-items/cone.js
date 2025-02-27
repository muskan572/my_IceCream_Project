import Grid from "@mui/material/Grid2";
import { ConeItems } from "./coneItems";
import { useTheme } from "@mui/material";
const Cone = () => {
  const theme = useTheme();
  const cone = [
    {
      id: 1,
      coneName: "Strawberry Flavour",
      img: "assets/images/Group 1261153059 1.png",
      bg: theme.palette.tertiary.lighter,
    },
    {
      id: 2,
      coneName: "Chocolate Flavour",
      img: "assets/images/Group 1261153055 1.png",
      bg: theme.palette.grey[700],
    },
    {
      id: 3,
      coneName: "Nutella Flavour",
      img: "assets/images/Group 1261153025 1.png",
      bg: theme.palette.secondary.light,
    },
    {
      id: 4,
      coneName: "Choco bliss Flavour",
      img: "assets/images/Group 1261153056 1.png",
      bg: theme.palette.grey[100],
    },
    {
      id: 5,
      coneName: "Multi Flavour",
      img: "assets/images/Group 1261153057 1.png",
      bg: theme.palette.primary.light,
    },
    {
      id: 6,
      coneName: "Choco Nuts Flavour",
      img: "assets/images/Group 1261153058 1.png",
      bg: theme.palette.grey[300],
    },
  ];
  return (
    <Grid container>
      {cone.map((items, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <ConeItems
            coneName={items.coneName}
            img={items.img}
            color={items.bg}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export { Cone };