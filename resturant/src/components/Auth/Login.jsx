import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "../../Hooks/useAuth";
import { useState } from "react";
function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const handleLogin = () => {
    login(userData);
  };
  return (
    <>
      <Container
        sx={{
          margin: "auto",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 5,
            m: 4,
            width: "100%",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 5,
            }}
          >
            Login
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
              justifyContent: "center",
            }}
          >
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <Button variant="contained" color="info" onClick={handleLogin}>
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
export default Login;
