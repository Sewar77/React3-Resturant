import {
  AppBar,
  Toolbar,
  Box,
  MenuList,
  MenuItem,
  Typography,
  IconButton,
  Badge,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../Context/userContext";
import { useAuth } from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Theme from "../Theme/Theme";
import { cartContext } from "../../Context/cartContext";
function Navbar() {
  const { currentUser } = useContext(userContext);
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    toast.success("Logout seccessfully");
  };
  const navigate = useNavigate();

  const { cart } = useContext(cartContext);
  const total = cart.reduce((acc, item) => acc + item.quantityCart, 0);
  return (
    <>
      <AppBar position="stikcy">
        <Toolbar
          className="navbar"
          id="navbar"
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
                textAlign: "center",
              }}
            >
              <MenuItem onClick={() => navigate("/home")}>Home</MenuItem>
              {/* use the router  */}
              <MenuItem onClick={() => navigate("/contact")}>Contact</MenuItem>
              <MenuItem onClick={() => navigate("/about")}>About Us</MenuItem>
              <MenuItem onClick={() => navigate("/menu")}>Menu</MenuItem>
              <Theme />
              {/* customize component */}
              {Object.keys(currentUser).length === 0 ? (
                <>
                  <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
                  <MenuItem onClick={() => navigate("/register")}>
                    Register
                  </MenuItem>
                </>
              ) : (
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              )}
              <MenuItem>
                <IconButton onClick={() => navigate("/cart")}>
                  <Badge badgeContent={total} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </MenuItem>
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
