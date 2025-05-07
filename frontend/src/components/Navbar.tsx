import { Box, Button } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
      <Button variant="contained" href="/login">
        Login
      </Button>

      <Button variant="contained" href="/register">
        Register
      </Button>
    </Box>
  );
};

export default Navbar;
