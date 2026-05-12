import {
  Box,
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useMenu } from "../../Hooks/useMenu.js";
import { createContext, useContext, useState } from "react";
import AddMenuItem from "../AdminLayout/Manage/ManageMenu/AddMenuItem.jsx";
import { userContext } from "../../Context/userContext.jsx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { cartContext } from "../../Context/cartContext.jsx";
function Menu() {
  const { menu, deleteMenuItem, updateMenuItem } = useMenu();
  const { currentUser } = useContext(userContext);
  const navigate = useNavigate();
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
  const { cart, addToCart, decreaseQty, increaseQty } = useContext(cartContext);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleAddToCart = (item) => {
    if (currentUser.length === 0) {
      toast.success("please login first!");
      navigate("/login");
      return;
    }
    setSelectedItem(item);
    addToCart(item);
    toast.success("added to cart");
  };

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
                        <Button
                          variant="contained"
                          color="info"
                          onClick={() => (
                            setOpenCartModal(!openCartModal),
                            handleAddToCart(item)
                          )}
                        >
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
      <Modal open={openCartModal} onClose={() => setOpenCartModal(false)}>
        <Box
          sx={{
            background: "#fff",
            p: 4,
            width: 300,
            mx: "auto",
            borderRadius: 3,
            mt: "20%",
            textAlign: "center",
          }}
        >
          {selectedItem && (
            <>
              <Typography variant="h4">{selectedItem.name}</Typography>
              <Typography variant="h6">Price: {selectedItem.price}$</Typography>
              {(() => {
                const cartItem = cart.find((i) => i.id === selectedItem.id);

                return (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      my: 3,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="info"
                      sx={{ mx: 2, mt: 3 }}
                      onClick={() => increaseQty(selectedItem.id)}
                    >
                      +
                    </Button>
                    <Typography>
                      You Ordred: {cartItem?.quantityCart || 0}
                    </Typography>
                    <Button
                      variant="contained"
                      color="warning"
                      sx={{ mx: 2, mt: 3 }}
                      onClick={() => decreaseQty(selectedItem.id)}
                    >
                      -
                    </Button>
                  </Box>
                );
              })()}
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}
export default Menu;
//components based acrhetecure
