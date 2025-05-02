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
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const HomePage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

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

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/`)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      });

    return () => {};
  }, []);

  return (
    <Grid className="">
      <Paper elevation={5} sx={{ p: 2, mb: 2 }}>
        <div>{message}</div>

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
          <InputLabel htmlFor="login">Login</InputLabel>

          <Input id="login" />
        </FormControl>

        <FormControl sx={{ my: 1, width: "100%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>

          <Input
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

        <Button variant="contained">Login</Button>
        <Button onClick={notify}>Make me a toast</Button>
      </Paper>
    </Grid>
  );
};
