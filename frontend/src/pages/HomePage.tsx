import { Box, Button, Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container maxWidth="sm">
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
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button variant="contained" href="/login">
            Login
          </Button>
          <Button variant="contained" href="/register">
            Register
          </Button>
        </Box>

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
