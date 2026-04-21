import { Box, Button, Modal, Typography } from "@mui/material";

export default function ModalConfirmDelete({ open, onConfirm, onCancel }) {
  return (
    <>
      <Modal open={open}>
        <Box
          sx={{
            p: 4,
            bgcolor: "#ebe3de",
            color: "black",
            borderRadius: 2,
            width: "300px",
            margin: "300px auto",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              my: 3,
            }}
          >
            Are you sure you want to delete this user?
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={onConfirm}
            sx={{ mx: 2 }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={onCancel}
            sx={{ mx: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </>
  );
}
