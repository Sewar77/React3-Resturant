import { Container, Typography } from "@mui/material";
import { useContext } from "react";
import { userContext } from "../../../Context/userContext";

export default function Profile() {
  const { currentUser } = useContext(userContext);
  return (
    <>
      <Container
        sx={{
          py: 3,
        }}
      >
        <Typography variant="h3">Welcom, {currentUser.name}</Typography>
      </Container>
    </>
  );
}
