import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { userContext } from "../../../Context/userContext";

export default function AdminInfo() {
  const { currentUser } = useContext(userContext);
  return (
    <>
      <Container>
        <Card
          sx={{
            borderRadius: 3,
            m: 3,
            bgcolor: "beige",
          }}
        >
          <CardHeader title="My Info" />
          <CardContent>
            <Typography>{currentUser.name}</Typography>
            <Typography>{currentUser.email}</Typography>
            <Button variant="contained">Edit</Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
