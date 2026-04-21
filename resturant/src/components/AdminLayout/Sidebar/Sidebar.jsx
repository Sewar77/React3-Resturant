import { Box, List, ListItemButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { userContext } from "../../../Context/userContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
export default function Sidebar({ toggleSidebar, open }) {
  const { currentUser } = useContext(userContext);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    toast.success("Logout seccessfully");
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: "#f3dfd7",
          borderRadius: 4,
          p: 3,
          width: open ? "250px" : "30px",
        }}
      >
        <Typography>{open ? currentUser.name : currentUser.name}</Typography>
        <Box
          sx={{
            minHeight: "100vh",
          }}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <ListItemButton
              sx={{
                textAlign: "center",
                p: 2,
              }}
              onClick={toggleSidebar}
            >
              <MenuIcon />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/admin/dashboard")}>
              {open ? "Dashboard" : "D"}
            </ListItemButton>
            <ListItemButton>{open ? "Manage Users" : "U"}</ListItemButton>
            <ListItemButton>{open ? "Manage Menu" : "M"}</ListItemButton>
            <ListItemButton>{open ? "Messages" : "MS"}</ListItemButton>
            <ListItemButton onClick={handleLogout}>
              {open ? "Logout" : "L"}
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </>
  );
}
//props
