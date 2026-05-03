import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { useContext } from "react";
import { messageContext } from "../../Context/messageContext.jsx";
function Feedbacks() {
  const { messages } = useContext(messageContext);
  const filtreredMessage = messages.filter((msg) => msg.status === "approved");

  return (
    <>
      <Container>
        <Typography variant="h4">Feedbacks</Typography>
        <Grid container spacing={4}>
          <Grid container spacing={4} sx={{ p: 3, m: 3 }}>
            {filtreredMessage.map((message) => {
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
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Feedbacks;
