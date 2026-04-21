import {
  Button,
  Container,
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
export default function DisplayUsers() {
  const { users } = useContext(userContext);
  const { deleteUser } = useAuth();
  const [openConfirm, setOpenConfirm] = useState(false);
  const [seletedId, setSelectedId] = useState(null);
  const handleDeleteUser = (userId) => {
    setOpenConfirm(true);
    setSelectedId(userId);
  };
  const handleConfirm = () => {
    deleteUser(seletedId);
    setSelectedId(null);
    setOpenConfirm(false);
  };
  const handleCancel = () => {
    setSelectedId(null);
    setOpenConfirm(false);
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
              {users.map((user, idx) => (
                <TableRow key={user.id}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 5,
                      flexWrap: "wrap",
                      textAlign: "center",
                    }}
                  >
                    <Button variant="contained" color="warning">
                      Edit
                    </Button>
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
