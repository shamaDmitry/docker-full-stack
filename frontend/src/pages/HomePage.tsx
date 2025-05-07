import { Box, Container } from "@mui/material";
import { NavLink } from "react-router";

const HomePage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <h1>Home Page</h1>

        <Box
          component="nav"
          sx={{ display: "flex", alignItems: "center", gap: 2, m: 2 }}
        >
          <NavLink to={"login"}>Login</NavLink>
          <NavLink to={"register"}>Register</NavLink>
        </Box>
      </Box>

      <Box
        component="section"
        sx={{
          mx: "auto",
          gap: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-end",
        }}
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et
          inventore dolorum assumenda ad rem earum necessitatibus sint iure,
          nulla minima. Corporis, fuga vitae? Facere officiis quisquam autem
          laudantium asperiores.
        </div>
      </Box>
    </Container>
  );
};

export default HomePage;
