import {
  AppBar,
  Toolbar,
  Box,
  MenuList,
  MenuItem,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../Context/userContext";
import { useAuth } from "../../Hooks/useAuth";
import toast from "react-hot-toast";
function Navbar() {
  const { currentUser } = useContext(userContext);
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    toast.success("Logout seccessfully");
  };
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
              {/* customize component */}
              {currentUser.length === 0 ? (
                <>
                  <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
                  <MenuItem onClick={() => navigate("/register")}>
                    Register
                  </MenuItem>
                </>
              ) : (
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              )}
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
