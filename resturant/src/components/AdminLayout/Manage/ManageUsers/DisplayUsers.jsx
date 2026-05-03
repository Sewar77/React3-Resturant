import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { userContext } from "../../../../Context/userContext";
import { useAuth } from "../../../../Hooks/useAuth";
import ModalConfirmDelete from "./ModalConfirmDelete";
import toast from "react-hot-toast";
import Search from "../../../Search/Search";
export default function DisplayUsers() {
  const { users } = useContext(userContext);
  const { deleteUser, updateUserRole } = useAuth();
  const [openConfirm, setOpenConfirm] = useState(false);
  const [deletedUserId, setDeletedUserId] = useState(null); //for delete
  const [updatedUserId, setUpdatedUserId] = useState(null); //for update
  const [newRole, setNewRole] = useState("");
  const [search, setSearch] = useState("");
  const filteredSearch = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.includes(search.toLowerCase())
  );
  console.log(filteredSearch);

  const handleDeleteUser = (userId) => {
    setOpenConfirm(true);
    setDeletedUserId(userId);
  };
  const handleConfirm = () => {
    deleteUser(deletedUserId);
    setDeletedUserId(null);
    setOpenConfirm(false);
  };
  const handleCancel = () => {
    setDeletedUserId(null);
    setOpenConfirm(false);
  };
  const handleUpdateRole = (userId) => {
    setUpdatedUserId(userId);
  };
  const handleUpdateUserRole = (userId) => {
    updateUserRole(userId, newRole);
    setUpdatedUserId(null);
  };
  const handleCancelUpdate = () => {
    setUpdatedUserId(null);
    toast.success("Canceled Update Role");
  };
  return (
    <>
      <Container
        sx={{
          p: 2,
          m: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h3">Manage Users</Typography>
        <Search setSearch={setSearch} placeHolder="Search in Users" />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSearch.map((user, idx) => (
                <TableRow key={user.id}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {updatedUserId && updatedUserId === user.id ? (
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Role
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          value={newRole}
                          onChange={(e) => setNewRole(e.target.value)}
                        >
                          <MenuItem value="user">User</MenuItem>
                          <MenuItem value="admin">Admin</MenuItem>
                        </Select>
                      </FormControl>
                    ) : (
                      user.role
                    )}
                  </TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 5,
                      flexWrap: "wrap",
                      textAlign: "center",
                    }}
                  >
                    {updatedUserId && updatedUserId === user.id ? (
                      <>
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => handleUpdateUserRole(user.id)}
                        >
                          Save
                        </Button>
                        <Button
                          variant="contained"
                          color="warning"
                          onClick={handleCancelUpdate}
                        >
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={() => handleUpdateRole(user.id)}
                      >
                        Edit
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <ModalConfirmDelete
        open={openConfirm}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      {/* component */}
    </>
  );
}
