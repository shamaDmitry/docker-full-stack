import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{ display: "flex", justifyContent: "flex-end", gap: 2, px: 2, mb: 2 }}
    >
      <Button variant="contained" onClick={() => navigate("/register")}>
        Register
      </Button>

      <Button variant="contained" onClick={() => navigate("/login")}>
        Login
      </Button>
    </Box>
  );
};

export default Navbar;
