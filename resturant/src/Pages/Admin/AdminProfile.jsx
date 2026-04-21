import { Box, Container, Typography } from "@mui/material";
import Sidebar from "../../components/AdminLayout/Sidebar/Sidebar";
import { useState } from "react";
import AdminInfo from "../../components/AdminLayout/AdminProfile/AdminInfo";
import AdminPassword from "../../components/AdminLayout/AdminProfile/AdminPassword";

export default function AdminProfile() {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          //   justifyContent: "flex-start",
          minWidth: "100%",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Sidebar isOpen={open} toggleSidebar={toggleSidebar} />
          {/* props */}
        </Box>

        <Box
          sx={{
            flexGrow: 8,
            textAlign: "center",
            mt: 3,
          }}
        >
          <Typography>this is admin Profile</Typography>
          <AdminInfo />
          <AdminPassword />
        </Box>
      </Container>
    </>
  );
}
