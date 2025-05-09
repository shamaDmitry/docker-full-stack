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
import { useLocation, useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuthStore } from "../store/useAuthStore";

type Inputs = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;

    try {
      const res = await loginUser({
        email,
        password,
      });

      if (res) {
        toast.success(res.message);

        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        setUser(res.user);

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (error) {
      console.log("error", error);

      toast.error(error.message);
    }
  };

  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);

  console.log("errors", errors);

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
            Login
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl sx={{ my: 1, width: "100%" }} variant="standard">
              <InputLabel htmlFor="email">Email</InputLabel>

              <Input
                error={!!errors.email}
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />

              {errors.email && (
                <Typography variant="body2" color="error">
                  {errors.email.message}
                </Typography>
              )}
            </FormControl>

            <FormControl sx={{ my: 1, width: "100%" }} variant="standard">
              <InputLabel htmlFor="password">Password</InputLabel>

              <Input
                id="password"
                {...register("password", {
                  required: "Password is required",
                })}
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

              {errors.password && (
                <Typography variant="body2" color="error">
                  {errors.password.message}
                </Typography>
              )}
            </FormControl>

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button sx={{ mt: 2 }} variant="contained" type="submit">
                Login
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};
