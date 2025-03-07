
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
const { CakeItems } = require("./cakeItems");

const Cake = () => {
  const theme = useTheme();
  const Cake = [
    {
      id: 1,
      cakeName: "Chocolate Nut Flavour",
      image: "assets/images/image 258.png",
      bg: theme.palette.grey[1000],
    },
    {
      id: 2,
      cakeName: "3 Combo Flavour",
      image: "assets/images/image 257.png",
      bg: theme.palette.grey[2000],
    },
    {
      id: 3,
      cakeName: "3 Combo Flavour",
      image: "assets/images/image 256.png",
      bg: theme.palette.grey[950],
    },
    {
      id: 4,
      cakeName: "White Chocolate Flavour",
      image: "assets/images/image 255.png",
      bg: theme.palette.secondary.extraDarker,
    },
    {
      id: 5,
      cakeName: "2 Combo Flavour",
      image: "assets/images/image 258.png",
      bg: theme.palette.primary.contrastText,
    },
    {
      id: 6,
      cakeName: "Mix Combo Nuts Flavour",
      image: "assets/images/image 261.png",
      bg: theme.palette.warning.lighter,
    },
  ];
  return (
    <Grid container>
      {Cake.map((items, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <CakeItems
            cakeName={items.cakeName}
            image={items.image}
            color={items.bg}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export { Cake };