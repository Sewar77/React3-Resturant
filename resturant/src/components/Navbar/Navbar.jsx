import {
  AppBar,
  Toolbar,
  Box,
  MenuList,
  MenuItem,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="stikcy">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            justifyContent: "space-between",
            flexWrap: "wrap",
            p: 4,
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Resturant</Typography>
          <Box>
            <MenuList
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <MenuItem>Home</MenuItem>
              {/* use the router  */}
              <MenuItem onClick={() => navigate("/contact")}>Contact</MenuItem>
              <MenuItem>About Us</MenuItem>
              <MenuItem>Menu</MenuItem>
              <MenuItem>Login</MenuItem>
              <MenuItem>Register</MenuItem>
            </MenuList>
          </Box>
          <Box>
            <img
              src="../../../src/assets/hero.png"
              alt={"logo"}
              loading="lazy"
              width={80}
              height={80}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
