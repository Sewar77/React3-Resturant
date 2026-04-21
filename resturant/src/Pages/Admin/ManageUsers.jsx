import { Box, Container, Typography } from "@mui/material";
import Sidebar from "../../components/AdminLayout/Sidebar/Sidebar";
import { useState } from "react";
import DisplayUsers from "../../components/AdminLayout/Manage/ManageUsers/DisplayUsers";

export default function ManageUsers() {
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
          justifyContent: "flex-start",
          minWidth: "100%",
          m: "auto",
        }}
      >
        <Box
          sx={{
            flexGrow: "1",
          }}
        >
          <Sidebar isOpen={open} toggleSidebar={toggleSidebar} />
          {/* props */}
        </Box>

        <Box
          sx={{
            flexGrow: 3,
          }}
        >
          <DisplayUsers />
        </Box>
      </Container>
    </>
  );
}
