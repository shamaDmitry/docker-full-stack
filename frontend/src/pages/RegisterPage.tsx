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
import { useState } from "react";
import toast from "react-hot-toast";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { registerUser } from "../services/api/auth";

export const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
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
      const res = await registerUser({
        email,
        password,
        userName,
      });

      if (res) {
        toast.success(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <Paper
          elevation={5}
          sx={{
            p: 2,
            mb: 2,
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "text.primary",
              fontSize: 35,
              textAlign: "center",
              fontWeight: "bold",
            }}
            variant="h1"
          >
            Register
          </Typography>

          <FormControl sx={{ my: 1, width: "100%" }} variant="standard">
            <InputLabel htmlFor="username">Username</InputLabel>

            <Input
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </FormControl>

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
