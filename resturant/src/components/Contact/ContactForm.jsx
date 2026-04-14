import { Box, Container, Typography } from "@mui/material";
import ContactBtn from "./ContactBtn";
import ContactHeader from "./ContactHeader";

function ContactForm() {
  return (
    <>
      <ContactHeader />
      <Container>
        <Box>
          <Typography>this is the foirm</Typography>
          <ContactBtn />
        </Box>
      </Container>
    </>
  );
}

export default ContactForm;
