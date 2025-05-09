import { Box, Container, Typography } from "@mui/material";
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
          mb: 3,
        }}
      >
        <Typography variant="h4">Home Page</Typography>

        <Box
          component="nav"
          sx={{ display: "flex", alignItems: "center", gap: 2, m: 2 }}
        >
          <NavLink to={"login"}>
            <Typography variant="body1">Login</Typography>
          </NavLink>

          <NavLink to={"register"}>
            <Typography variant="body1">Register</Typography>
          </NavLink>
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
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et
          inventore dolorum assumenda ad rem earum necessitatibus sint iure,
          nulla minima. Corporis, fuga vitae? Facere officiis quisquam autem
          laudantium asperiores.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
