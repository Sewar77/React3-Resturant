import { Box, List, ListItemButton, MenuList, Typography } from "@mui/material";
import { useContext } from "react";
import { userContext } from "../../../Context/userContext";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2Icon from "@mui/icons-material/Person2";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MessageIcon from "@mui/icons-material/Message";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
export default function Sidebar({ isOpen, toggleSidebar }) {
  //props
  const { currentUser } = useContext(userContext);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <Box
        sx={{
          width: isOpen ? "250px" : "60px",
          minHeight: "100vh",
          borderRadius: 3,
          bgcolor: "bisque",
          p: isOpen ? 3 : 1,
          m: 1,
        }}
      >
        <Typography variant={isOpen ? "h5" : "h6"}>
          {isOpen ? `Welcome: ${currentUser.name}` : currentUser.name}
        </Typography>
        <List>
          <ListItemButton onClick={toggleSidebar}>
            <MenuIcon />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/admin/dashboard")}>
            <MenuList>{isOpen ? "Dashboard" : <DashboardIcon />}</MenuList>
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/admin/profile")}>
            <MenuList>{isOpen ? "Profile" : <Person2Icon />}</MenuList>
          </ListItemButton>
          <ListItemButton>
            <MenuList>
              {isOpen ? "Manage Users" : <ManageAccountsIcon />}
            </MenuList>
          </ListItemButton>
          <ListItemButton>
            <MenuList>
              {isOpen ? "Manage Menu" : <RestaurantMenuIcon />}
            </MenuList>
          </ListItemButton>
          <ListItemButton>
            <MenuList>{isOpen ? "Messages" : <MessageIcon />}</MenuList>
          </ListItemButton>
          <ListItemButton onClick={handleLogout}>
            <MenuList>{isOpen ? "Logout" : <LogoutIcon />}</MenuList>
          </ListItemButton>
        </List>
      </Box>
    </>
  );
}
