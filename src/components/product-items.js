import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Cone } from "@app/components/cone-items/cone";
import { Stick } from "@app/components/stick-items.js/stick";
import { Cup } from "@app/components/cup-items/cup";
import { Cake } from "@app/components/cake-items/cake";
import { Waffel } from "@app/components/waffel-items/waffel";

const ProductItems = ({ buttons }) => {
  const theme = useTheme();
  const [isSelected, setIsSelected] = useState(0);
  const RenderComponent = ({ index }) => {
    switch (index) {
      case 0:
        return <Cone />;
      case 1:
        return <Stick />;
      case 2:
        return <Cup />;
      case 3:
        return <Cake />;
      case 4:
        return <Waffel />;
      default:
        return;
    }
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        background:
          " linear-gradient(116.34deg, #FFFFFF -3.69%, #FFDAE5 106.83%)",
      }}
    >
      <Box>
        <Typography variant="h3" sx={{ color: theme.palette.secondary.main }}>
          Our Products
        </Typography>
        <Typography variant="h3">Experience The Coolest Cream</Typography>
      </Box>
      <Stack
        direction="row"
        gap={2}
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
              width: { xs: "80px", md: "120px" },
              backgroundColor:
                isSelected === index
                  ? theme.palette.primary.main
                  : theme.palette.grey[0],
              color:
                isSelected === index
                  ? theme.palette.grey[0]
                  : theme.palette.grey[900],
              marginLeft: "20px",
              borderRadius: "20px",
              boxShadow: " 0px 1px 0px 0px #00000040",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.grey[0],
              },
            }}
          >
            {" "}
            {button}{" "}
          </Button>
        ))}
      </Stack>
      <RenderComponent index={isSelected} />
    </Box>
  );
};
export { ProductItems };