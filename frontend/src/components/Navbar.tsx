import { Box, Button } from "@mui/material";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
      <Button variant="contained">
        <NavLink to="/login">Login</NavLink>
      </Button>

      <Button variant="contained">
        <NavLink to="/register">Register</NavLink>
      </Button>
    </Box>
  );
};

export default Navbar;
