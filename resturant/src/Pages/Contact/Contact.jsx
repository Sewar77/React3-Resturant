import { Box, Container, Typography } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar.jsx";
import ContactForm from "../../components/Contact/ContactForm.jsx";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Container sx={{ m: "auto" }}>
        <ContactForm />
      </Container>
    </>
  );
}
//components based acrh
