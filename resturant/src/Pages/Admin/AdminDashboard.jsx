import { Box, Container, Typography } from "@mui/material";
import Sidebar from "../../components/AdminLayout/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { api } from "../../../api";

export default function AdminDashboard() {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  const [comments, setComments] = useState([]);
  const displayComments = async () => {
    try {
      const res = await api.get("/posts");
      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(comments);

  useEffect(() => {
    displayComments();
  }, []);
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
            mt: 3,
          }}
        >
          <Typography variant="h2">this is admin dashboard</Typography>
          <Typography>here where you can manage all your resturant</Typography>
          <Typography>
            you may choose from the sidebar whatever you want.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
