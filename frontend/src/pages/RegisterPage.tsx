import {
  Button,
  FormControl,
  Grid,
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
import { NavLink } from "react-router";
import { registerUser } from "../services/api/auth";

export const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
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

  const notify = () => toast("Here is your toast.");

  const handleSubmit = async () => {
    try {
      const res = await registerUser({
        email,
        password,
      });

      console.log("res", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid className="">
      <NavLink to="/">login</NavLink>

      <Paper elevation={5} sx={{ p: 2, mb: 2 }}>
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
                    showPassword ? "hide the password" : "display the password"
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

        <Button variant="contained" onClick={() => handleSubmit()}>
          Login
        </Button>

        <Button onClick={notify}>Make me a toast</Button>
      </Paper>
    </Grid>
  );
};
