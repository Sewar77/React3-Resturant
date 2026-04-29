import { Button } from "@mui/material";

function ContactBtn({ handleSubmit }) {
  return (
    <>
      <Button variant="contained" color="success" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
}
export default ContactBtn;
