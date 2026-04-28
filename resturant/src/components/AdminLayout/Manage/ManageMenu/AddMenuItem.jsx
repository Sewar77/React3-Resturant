import { Box, Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { useMenu } from "../../../../Hooks/useMenu";

export default function AddMenuItem() {
  const [menuItem, setMenuItem] = useState({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    image: "",
  });
  const { addNewItem } = useMenu();
  const handleAddNewMenuItem = () => {
    addNewItem(menuItem);
    setMenuItem({
      name: "",
      description: "",
      price: 0,
      quantity: 0,
      image: "",
    });
  };
  return (
    <>
      <Paper
        elevation={4}
        sx={{
          mx: "auto",
          my: 6,
          p: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <TextField
            label="Name"
            required
            value={menuItem.name}
            onChange={(e) => setMenuItem({ ...menuItem, name: e.target.value })}
          />
          <TextField
            label="Description"
            required
            value={menuItem.description}
            onChange={(e) =>
              setMenuItem({ ...menuItem, description: e.target.value })
            }
          />
          <TextField
            label="Price"
            type="number"
            required
            value={menuItem.price}
            onChange={(e) =>
              setMenuItem({ ...menuItem, price: e.target.value })
            }
          />
          <TextField
            label="Quantity"
            type="number"
            value={menuItem.quantity}
            onChange={(e) =>
              setMenuItem({ ...menuItem, quantity: e.target.value })
            }
          />
          <TextField
            label="Image"
            value={menuItem.image}
            onChange={(e) =>
              setMenuItem({ ...menuItem, image: e.target.value })
            }
          />
          <Button variant="contained" onClick={handleAddNewMenuItem}>
            Add
          </Button>
        </Box>
      </Paper>
    </>
  );
}
