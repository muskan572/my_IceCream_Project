import { Divider, ListItemText, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { PATH_DASH } from "../../routes/path";
const products = [
  {
    name: "Cone",
    img: "assets/images/Group 1261153004 1.png",
    path: PATH_DASH.cone,
  },
  { name: "Stick", img: "assets/images/stick.png", path: PATH_DASH.stick },
  { name: "Cup", img: "assets/images/cup.png", path: PATH_DASH.cup },
  { name: "Cake", img: "assets/images/cake.png", path: PATH_DASH.cake },
  { name: "Waffles", img: "assets/images/waffel.png", path: PATH_DASH.waff },
];

export default function NavbarMenu() {
  return (
    <>
      {products.map((product) => (
        <MenuItem
          key={product.name}
          component={Link}
          to={product.path}
          sx={{
            justifyContent: "space-between",
            marginTop: "-10px",
            marginBottom: "-10px",
          }}
        >
          <ListItemText>{product.name}</ListItemText>
          <img src={product.img} alt={product.name} style={{ width: "40px" }} />
          <Divider orientation="vertical" />
        </MenuItem>
      ))}
    </>
  );
}
