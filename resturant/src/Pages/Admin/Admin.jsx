import { Box, Container, Typography } from "@mui/material";
import Sidebar from "../../components/AdminLayout/Sidebar/Sidebar";
import { useState } from "react";

export default function Admin() {
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
          gap: 5,
          minWidth: "100%",
          p: 3,
        }}
      >
        <Box>
          <Sidebar toggleSidebar={toggleSidebar} open={open} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Typography>admin</Typography>
        </Box>
      </Container>
    </>
  );
}
