import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { messageContext } from "../../../../Context/messageContext.jsx";
export default function ManageMessagesAdmin() {
  const { messages } = useContext(messageContext);
  console.log(messages);

  return (
    <>
      <Container
        sx={{
          m: "auto",
        }}
      >
        <Grid container spacing={4} sx={{ p: 3, m: 3 }}>
          {messages.map((message) => {
            return (
              <Grid key={message.id} size={{ sm: 12, md: 6, lg: 4 }}>
                <Card sx={{ p: 3 }}>
                  <CardContent>
                    <Grid size={4}></Grid>
                    <Typography variant="h5">{message.name}</Typography>
                    <Divider />
                    <Typography variant="h6">
                      {message.email || "No Email Provides"}
                    </Typography>
                    <Typography variant="h3">{message.message}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="error" variant="contained">
                      Reject
                    </Button>
                    <Button color="success" variant="contained">
                      Approve
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
