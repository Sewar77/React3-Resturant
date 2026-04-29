import { Box, Container, Typography } from "@mui/material";
import Sidebar from "../../components/AdminLayout/Sidebar/Sidebar";
import { useState } from "react";
import ManageMessagesAdmin from "../../components/AdminLayout/Manage/ManageMessages/ManageMessagesAdmin.jsx";

export default function ManageMesssages() {
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
          <Typography>Manage Messages</Typography>
          <ManageMessagesAdmin />
        </Box>
      </Container>
    </>
  );
}
