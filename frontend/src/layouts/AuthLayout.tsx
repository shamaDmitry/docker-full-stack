import { Box, Button } from "@mui/material";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button variant="contained" href="/login">
          Login
        </Button>
        <Button variant="contained" href="/register">
          Register
        </Button>
      </Box>

      <Outlet />
    </div>
  );
};

export default AuthLayout;
