import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { userContext } from "../../../Context/userContext";

export default function AdminPassword() {
  const [show, setShow] = useState(false);
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
          <CardHeader title="My Password" />
          <CardContent>
            <Typography>{show ? currentUser.password : "********"}</Typography>
            <Button
              sx={{
                m: 3,
              }}
              variant="contained"
              onClick={() => setShow(!show)}
            >
              Show
            </Button>
            <Button variant="contained">Change</Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
