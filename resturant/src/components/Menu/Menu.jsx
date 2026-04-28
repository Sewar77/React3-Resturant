import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useMenu } from "../../Hooks/useMenu.js";
import { useState } from "react";
import AddMenuItem from "../AdminLayout/Manage/ManageMenu/AddMenuItem.jsx";
function Menu() {
  const { menu, deleteMenuItem } = useMenu();
  //CRUD => c:create , r:read, u:update. d:delete
  //read: done
  //delete: done
  //create: done
  const handleDelete = (menuId) => {
    deleteMenuItem(menuId);
  };
  const [show, setShow] = useState(false);
  const handleShowForm = () => {
    setShow(!show);
  };
  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ my: 5 }}>
          Manage Manu
        </Typography>
        <Button variant="contained" color="info" onClick={handleShowForm}>
          {show ? "Cancel" : "Add New Item"}
        </Button>

        {show && <AddMenuItem />}

        <Grid container spacing={4}>
          {menu.map((item) => {
            return (
              <Grid key={item.id} size={{ sm: 12, md: 6, lg: 4 }}>
                <Card
                  sx={{
                    minHeight: "400px",
                    mx: "auto",
                  }}
                >
                  <CardMedia
                    component="img"
                    src={item.image}
                    sx={{ p: 3, m: "auto", width: "5rem", height: "5rem" }}
                  />
                  <CardContent>
                    <Typography variant="h5">{item.name}</Typography>
                    <Typography variant="body1">{item.description}</Typography>
                    <Typography variant="body1">
                      {item.price}$ || {item.quantity}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ mx: "auto" }}>
                    <Button variant="contained" color="warning">
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
export default Menu;
//components based acrhetecure
