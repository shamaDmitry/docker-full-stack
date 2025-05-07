import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { loginUser } from "../services/api/auth";
import toast from "react-hot-toast";
import { Link } from "react-router";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    try {
      const res = await loginUser({
        email,
        password,
      });

      if (res) {
        toast.success(res.message);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/`)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      });

    return () => {};
  }, []);

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
        <Button variant="contained">
          <Link to="/register">Register</Link>
        </Button>

        <Paper
          elevation={5}
          sx={{
            p: 2,
            mb: 2,
            width: "100%",
          }}
        >
          <pre>{message}</pre>

          <Typography
            sx={{
              color: "text.primary",
              fontSize: 35,
              textAlign: "center",
              fontWeight: "bold",
            }}
            variant="h1"
          >
            Login
          </Typography>

          <FormControl sx={{ my: 1, width: "100%" }} variant="standard">
            <InputLabel htmlFor="email">Email</InputLabel>

            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl sx={{ my: 1, width: "100%" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>

            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              onClick={() => handleSubmit()}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};
