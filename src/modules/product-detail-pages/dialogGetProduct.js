import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../app/createSlice";

export default function DialogProduct({ open, onClose }) {
  const cards = [
    {
      id: 1,
      costs: "$50.00",
      image: "assets/images/image 258.png",
      title: "ice-cream",
      name: "Strawberry Flavour With Nuts",
    },
    {
      id: 2,
      costs: "$50.00",
      image: "assets/images/image 258.png",
      title: "ice-cream",
      name: "Strawberry Flavour With Nuts",
    },
    {
      id: 3,
      costs: "$50.00",
      image: "assets/images/image 258.png",
      title: "ice-cream",
      name: "Strawberry Flavour With Nuts",
    },
  ];
  const buttons = ["Cone", "Stick", "Cup", "Cake", "Waffels"];
  const [isSelected, setIsSelected] = useState(0);
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(addProduct(product));
  };
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <DialogTitle id="alert-dialog-title">
            {" Select Products"}
          </DialogTitle>
          <Button sx={{ color: "black" }} onClick={onClose}>
            <CloseIcon />
          </Button>
        </Stack>
        <Divider />
        <DialogContent>
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            sx={{
              backgroundColor: "#FFF2F9",
              borderRadius: "20px",
              color: "#B6B6B6",
            }}
            disableElevation
            disableRipple
          >
            <input
              type="text"
              placeholder="Search for your product..."
              style={{
                background: "transparent",
                border: "1px #EAEAEA",
                outline: "none",
                width: "500px",
              }}
            />
          </Button>
          <Stack
            direction="row"
            margin={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              flex: 1,
            }}
          >
            {buttons.map((button, index) => (
              <Button
                variant="contained"
                key={index}
                onClick={() => setIsSelected(index)}
                sx={{
                  outlineColor: theme.palette.primary.main,
                  backgroundColor:
                    isSelected === index ? theme.palette.primary.main : "white",
                  color: isSelected === index ? "white" : "black",
                  marginLeft: "20px",
                  borderRadius: "20px",
                  boxShadow: " 0px 1px 0px 0px #00000040",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                  },
                }}
              >
                {" "}
                {button}{" "}
              </Button>
            ))}
          </Stack>
          {cards.map((item, index) => (
            <Card
              key={index}
              sx={{ margin: 1, boxShadow: " 0px 12px 24px #919EAB1F" }}
            >
              <CardContent>
                <Stack direction="row" sx={{ justifyContent: "space-evenly" }}>
                  <Box
                    style={{
                      backgroundColor: "#FFEFF8",
                      width: "80px",
                      height: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "30px", height: "50px" }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h5">{item.name}</Typography>
                    <Typography>{item.costs}</Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#FFEFF8",
                      borderRadius: "50px",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button onClick={() => handleAdd(item)} disableRipple>
                      <AddIcon />
                    </Button>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
}
