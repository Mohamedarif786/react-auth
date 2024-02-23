import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "./login.css";
import LoginBanner from "../assets/login-banner.jpg";
import loginLogo from "../assets/login-logo.png";
import { Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("login", "true");
    const login = localStorage.getItem("login");
    if (login) {
      navigate("/dashboard");
    }
  };
  return (
    <>
      <Container
        fixed
        className="login-container"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box className="login-Box">
          <Card sx={{ Width: "100%", height: "100%" }}>
            <CardContent sx={{ Width: "100%", height: "100%", p: 0 }}>
              <Grid
                container
                sx={{
                  Width: "100%",
                  height: "100%",
                }}
              >
                <Grid item xs={12} md={5} >
                  <Card >
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "20px",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={loginLogo}
                          alt="gravity_logo"
                          style={{
                            width: "25% !important",
                            marginRight: "8px",
                          }}
                        />
                        <h1 style={{ margin: 0 }}>Log In</h1>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          marginTop: "20px",
                          flexDirection: "column",
                          marginX: "20px",
                        }}
                      >
                        <FormControl variant="standard">
                          <InputLabel htmlFor="input-with-icon-adornment">
                            User Id
                          </InputLabel>
                          <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            }
                          />
                        </FormControl>

                        <FormControl
                          variant="standard"
                          sx={{ marginTop: "10px" }}
                        >
                          <InputLabel htmlFor="input-with-icon-adornment">
                            Password
                          </InputLabel>
                          <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                <LockIcon />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        sx={{
                          background: "#5c26f8",
                          display: "block",
                          margin: "12px auto",
                          width: "140px",
                          textTransform: "capitalize",
                        }}
                      >
                        Log In
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={7}>
                  <img
                    src={LoginBanner}
                    style={{
                      maxWidth: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  ></img>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Login;
