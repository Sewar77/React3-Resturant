import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useAuth } from "../../Hooks/useAuth";
import { useState } from "react";
function Register() {
  const { register } = useAuth();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log("userData", userData);

  const handleRegister = () => {
    register(userData);
    setUserData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <>
      <Container
        sx={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            justifyContent: "center",
            alignItems: "center",
            p: 4,
            m: 4,
            width: "100%",
          }}
        >
          <Typography variant="h2">Register</Typography>
          <TextField
            label="Name"
            fullWidth
            required
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          {/* uncontrolled components! */}
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
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            required
            value={userData.confirmPassword}
            onChange={(e) =>
              setUserData({ ...userData, confirmPassword: e.target.value })
            }
          />
          <Button variant="contained" type="submit" onClick={handleRegister}>
            Register
          </Button>
        </Paper>
      </Container>
    </>
  );
}

export default Register;
