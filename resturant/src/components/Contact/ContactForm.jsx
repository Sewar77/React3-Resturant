import { Box, Container, Paper, TextField } from "@mui/material";
import ContactBtn from "./ContactBtn";
import ContactHeader from "./ContactHeader";
import { useContext, useState } from "react";
import { messageContext } from "../../Context/messageContext";

function ContactForm() {
  const [newMessage, setNewMessage] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { createMessage } = useContext(messageContext);
  const handleSubmit = () => {
    createMessage(newMessage);
    setNewMessage({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <Container>
        <Paper elevation={4} sx={{ p: 2, m: 2 }}>
          <ContactHeader />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
              justifyContent: "center",
              p: 4,
            }}
          >
            <TextField
              label="Name"
              required
              value={newMessage.name}
              onChange={(e) =>
                setNewMessage({ ...newMessage, name: e.target.value })
              }
            />
            <TextField
              label="Email"
              type="email"
              value={newMessage.email}
              onChange={(e) =>
                setNewMessage({ ...newMessage, email: e.target.value })
              }
            />
            <TextField
              label="Message"
              required
              multiline
              rows={4}
              value={newMessage.message}
              onChange={(e) =>
                setNewMessage({ ...newMessage, message: e.target.value })
              }
            />
            <ContactBtn handleSubmit={handleSubmit} />
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default ContactForm;
