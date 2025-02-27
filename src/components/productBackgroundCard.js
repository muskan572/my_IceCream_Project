import { Stack, useTheme } from "@mui/material";

const ProductCard = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        sx={{
          backgroundColor: theme.palette.primary.darker,
          width: "220px",
          borderTopRightRadius: "50%",
          borderTopLeftRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          height: "250px",
          marginTop: "120px",
          marginBottom: "70px",
          textAlign: "center",
        }}
      >
        {children}
      </Stack>
    </>
  );
};
export { ProductCard };