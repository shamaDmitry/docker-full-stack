import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  return (
    <Box
      sx={{ display: "flex", justifyContent: "flex-end", gap: 2, px: 2, mb: 2 }}
    >
      {!user && (
        <>
          <Button variant="contained" onClick={() => navigate("/register")}>
            Register
          </Button>

          <Button variant="contained" onClick={() => navigate("/login")}>
            Login
          </Button>
        </>
      )}

      {user && (
        <Button variant="contained" onClick={() => navigate("/dashboard")}>
          Dashboard
        </Button>
      )}
    </Box>
  );
};

export default Navbar;
