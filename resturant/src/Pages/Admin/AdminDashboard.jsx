import { Box, Container, Typography } from "@mui/material";
import Sidebar from "../../components/AdminLayout/Sidebar/Sidebar";
import { useState } from "react";

export default function AdminDashboard() {
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
          <Typography>this is admin dashboard</Typography>
        </Box>
      </Container>
    </>
  );
}
