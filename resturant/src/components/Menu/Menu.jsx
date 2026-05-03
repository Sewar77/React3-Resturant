import {
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useMenu } from "../../Hooks/useMenu.js";
import { useContext, useState } from "react";
import AddMenuItem from "../AdminLayout/Manage/ManageMenu/AddMenuItem.jsx";
import { userContext } from "../../Context/userContext.jsx";
import Search from "../Search/Search.jsx";
function Menu() {
  const { menu, deleteMenuItem, updateMenuItem } = useMenu();
  const { currentUser } = useContext(userContext);
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
  const [editId, setEditId] = useState(null);
  const [updatedData, setUpdatedData] = useState({}); //to store the new data => should not be empty

  const handleEditMenuItem = (menuId) => {
    const oldItem = menu.find((item) => item.id === menuId);
    setUpdatedData(oldItem); //store the old data
    setEditId(menuId);
  };
  const handleSave = () => {
    updateMenuItem(editId, updatedData);
    setEditId(null);
  };
  const [search, setSearch] = useState("");
  const filteredSearch = menu.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredSearch);
  return (
    <>
      <Container>
        {currentUser?.role === "admin" && (
          <>
            <Typography variant="h4" sx={{ my: 5 }}>
              Manage Manu
            </Typography>
            <Button variant="contained" color="info" onClick={handleShowForm}>
              {show ? "Cancel" : "Add New Item"}
            </Button>
            {show && <AddMenuItem />}
          </>
        )}
        <Search setSearch={setSearch} placeHolder="Search in Menu" />
        <Grid container spacing={4}>
          {filteredSearch.map((item) => {
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
                  {editId && editId === item.id ? (
                    <>
                      <CardContent>
                        <TextField
                          label="Name"
                          value={updatedData.name || ""}
                          onChange={(e) =>
                            setUpdatedData({
                              ...updatedData,
                              name: e.target.value,
                            })
                          }
                        />
                        <TextField
                          label="Description"
                          value={updatedData.description || ""} //update them
                          onChange={(e) =>
                            setUpdatedData({
                              ...updatedData,
                              description: e.target.value,
                            })
                          }
                        />
                        <TextField
                          label="Price"
                          type="number"
                          value={updatedData.price || ""}
                          onChange={(e) =>
                            setUpdatedData({
                              ...updatedData,
                              price: e.target.value,
                            })
                          }
                        />
                        <TextField
                          label="Quantity"
                          type="number"
                          value={updatedData.quantity || ""}
                          onChange={(e) =>
                            setUpdatedData({
                              ...updatedData,
                              quantity: e.target.value,
                            })
                          }
                        />
                      </CardContent>
                    </>
                  ) : (
                    <>
                      <CardContent>
                        <Typography variant="h5">{item.name}</Typography>
                        <Typography variant="body1">
                          {item.description}
                        </Typography>
                        <Typography variant="body1">
                          {item.price}$ || {item.quantity}
                        </Typography>
                      </CardContent>
                    </>
                  )}

                  <CardActions sx={{ mx: "auto" }}>
                    {currentUser?.role === "admin" ? (
                      <>
                        {editId && editId === item.id ? (
                          <>
                            <Button
                              variant="contained"
                              color="warning"
                              onClick={() => setEditId(null)}
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="contained"
                              color="success"
                              onClick={handleSave}
                            >
                              Save
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              variant="contained"
                              color="warning"
                              onClick={() => handleEditMenuItem(item.id)}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => handleDelete(item.id)}
                            >
                              Delete
                            </Button>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <Button variant="contained" color="info">
                          Add to Cart
                        </Button>
                      </>
                    )}
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
