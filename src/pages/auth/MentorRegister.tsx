import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, InputLabel, MenuItem, Select } from "@mui/material";
import { useAuth } from "../../contexts/authContext";
import { mentor } from "../../hooks/interface";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const MentorRegister: React.FC = () => {
  const { error, user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  function handleUser() {
    if (
      !user.first_name.trim() ||
      !user.last_name.trim() ||
      !user.email.trim() ||
      !user.password.trim() ||
      !user.password2.trim() ||
      !user.experience.trim()
    ) {
      alert("Fill in the fields.");
    } else if (user.password !== user.password2) {
      alert("Password does not match!");
    } else {
      navigate("/questions-1");
    }
  }
  console.log(user);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ marginTop: "100px" }}>
        {error ? <Alert severity="error">{error}</Alert> : null}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography fontWeight="700" sx={{ marginBottom: "12px" }}>
            Become a Udemy instructor
          </Typography>
          <Typography>
            Discover a supportive community of online instructors. Get instant
            access to all course creation resources.
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid
              sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              spacing={2}
            >
              <Grid sx={{ display: "flex", gap: "8px" }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    value={user.first_name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setUser({
                        ...user,
                        first_name: event.target.value,
                      })
                    }
                    label="Name"
                    autoFocus
                    className="mentor-reg__input"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="lastname"
                    required
                    fullWidth
                    value={user.last_name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setUser({
                        ...user,
                        last_name: event.target.value,
                      })
                    }
                    id="lastname"
                    label="Lastname"
                    autoFocus
                    className="mentor-reg__input"
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={user.email}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setUser({
                      ...user,
                      email: event.target.value,
                    })
                  }
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  className="mentor-reg__input"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={user.password}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setUser({
                      ...user,
                      password: event.target.value,
                    })
                  }
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  className="mentor-reg__input"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={user.password2}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setUser({
                      ...user,
                      password2: event.target.value,
                    })
                  }
                  name="password"
                  label="Password confirmation"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  className="mentor-reg__input"
                />
              </Grid>
              <Grid
                sx={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <InputLabel id="select-label">Опыт</InputLabel>
                <Select
                  className="input-label"
                  id="labelId"
                  value={user.experience}
                  onChange={(e) =>
                    setUser({ ...user, experience: e.target.value })
                  }
                >
                  <MenuItem value={"beginning"}>Junior</MenuItem>
                  <MenuItem value={"medium"}>Middle</MenuItem>
                  <MenuItem value={"prof"}>Senior</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  className="mentor__reg__checkbox"
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to get the most out of my experience, by receiving emails with insider tips, motivation, special updates and promotions reserved for instructors."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              onClick={() => handleUser()}
              variant="contained"
              className="mentor-reg__btn"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#8E7CC3",
                borderRadius: "0px",
                border: "1px solid #000",
                color: "#fff",
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  onClick={() => navigate("/mentor-login")}
                  href="#"
                  variant="body2"
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    borderBottom: "1px solid black",
                  }}
                >
                  Have an account? Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
export default MentorRegister;
