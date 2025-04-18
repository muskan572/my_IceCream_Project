import { Button, Divider, ListItemText, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { PATH_DASH } from "../../routes/path";

const products = [
  { name: "Cone", img: "assets/images/Group 1261153004 1.png" },
  { name: "Stick", img: "assets/images/stick.png" },
  { name: "Cup", img: "assets/images/cup.png" },
  { name: "Cake", img: "assets/images/cake.png" },
  { name: "Waffles", img: "assets/images/waffel.png" },
];

export default function NavbarMenu() {
  return (
    <>
      {products.map((product) => (
        <MenuItem
          key={product.name}
          sx={{
            justifyContent: "space-between",
            marginTop: "-10px",
            marginBottom: "-10px",
          }}
        >
          <ListItemText>
            <Button component={Link} to={PATH_DASH.products}>
              {product.name}
            </Button>
          </ListItemText>
          <img src={product.img} alt={product.name} style={{ width: "40px" }} />
          <Divider orientation="vertical" />
        </MenuItem>
      ))}
    </>
  );
}
