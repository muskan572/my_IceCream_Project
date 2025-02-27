import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
const { StickItems } = require("./stickItems");

const Stick = () => {
  const theme = useTheme();
  const Stick = [
    {
      id: 1,
      StickName: "Chocolate Nut Flavour",
      img: "assets/images/Group 1261153040 1.png",
      bg: theme.palette.grey[1000],
    },
    {
      id: 2,
      StickName: "Brownie Flavour",
      img: "assets/images/Group 1261153041 1.png",
      bg: theme.palette.grey[2000],
    },
    {
      id: 3,
      StickName: "Nutella Flavour",
      img: "assets/images/Group 1261153042 1.png",
      bg: theme.palette.secondary.light,
    },
    {
      id: 4,
      StickName: "White Chocolate Flavour",
      img: "assets/images/Group 1261153043 1.png",
      bg: theme.palette.warning.light,
    },
    {
      id: 5,
      StickName: "HD Chocolate Flavour",
      img: "assets/images/Group 1261153044 1.png",
      bg: theme.palette.grey[3000],
    },
    {
      id: 6,
      StickName: "Choco Carmel Flavour",
      img: "assets/images/Group 1261153034 1.png",
      bg: theme.palette.grey[300],
    },
  ];
  return (
    <Grid container>
      {Stick.map((items, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <StickItems
            StickName={items.StickName}
            img={items.img}
            color={items.bg}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export { Stick };