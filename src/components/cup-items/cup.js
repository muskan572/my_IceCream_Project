import Grid from "@mui/material/Grid2";
import { CupItems } from "./cupItems";
import { useTheme } from "@mui/material";
const Cup = () => {
  const theme = useTheme();
  const Cup = [
    {
      id: 1,
      cupName: "Chocolate Flavour",
      img: "assets/images/Group 1261153024 1.png",
      bg: theme.palette.warning.lighter,
    },
    {
      id: 2,
      cupName: "Vanilla Flavour",
      img: "assets/images/Group 1261153065 (1) 1.png",
      bg: theme.palette.grey[2000],
    },
    {
      id: 3,
      cupName: "Multi Sprinkle",
      img: "assets/images/Group 1261153063 1.png",
      bg: theme.palette.error.light,
    },
    {
      id: 4,
      cupName: "Cherry on Top Flavour",
      img: "assets/images/Group 1261153061 1.png",
      bg: theme.palette.warning.contrastText,
    },
    {
      id: 5,
      cupName: "Pista Nut Flavour",
      img: "assets/images/Group 1261153072 (1) 1.png",
      bg: theme.palette.warning.main,
    },
    {
      id: 6,
      cupName: "Strawberry Sprinkle",
      img: "assets/images/Group 1261153074 1.png",
      bg: theme.palette.grey[1000],
    },
  ];
  return (
    <Grid container>
      {Cup.map((items, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <CupItems cupName={items.cupName} img={items.img} color={items.bg} />
        </Grid>
      ))}
    </Grid>
  );
};
export { Cup };