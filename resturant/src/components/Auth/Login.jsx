import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useAuth } from "../../Hooks/useAuth";
import { useState } from "react";
export default function Login() {
  const { login } = useAuth();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = () => {
    login(userData);
    setUserData({ email: "", password: "" });
  };
  return (
    <>
      <Container
        sx={{
          margin: "auto",
          p: 3,
          width: "70%",
        }}
      >
        <Paper
          elevation={4}
          sx={{ display: "flex", flexDirection: "column", gap: 6, p: 3, m: 3 }}
        >
          <Typography variant="h3">Login</Typography>
          <TextField
            label="Email"
            type="email"
            required
            fullWidth
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <TextField
            label="Password"
            type="password"
            required
            fullWidth
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <Button variant="contained" color="info" onClick={handleLogin}>
            Login
          </Button>
        </Paper>
      </Container>
    </>
  );
}
