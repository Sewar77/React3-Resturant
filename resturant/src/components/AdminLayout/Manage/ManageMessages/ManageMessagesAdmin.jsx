import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { messageContext } from "../../../../Context/messageContext.jsx";
import Search from "../../../Search/Search.jsx";
export default function ManageMessagesAdmin() {
  const { messages, deleteMessage, approveMessage } =
    useContext(messageContext);
  console.log(messages);
  // define
  const handleDelete = (msgId) => {
    deleteMessage(msgId);
  };
  const handleApprove = (msgId) => {
    approveMessage(msgId);
  };
  const [search, setSearch] = useState("");
  const filteredSearch = messages.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredSearch);
  return (
    <>
      <Container
        sx={{
          m: "auto",
        }}
      >
        <Search setSearch={setSearch} placeHolder="Search in Messages" />
        <Grid container spacing={4} sx={{ p: 3, m: 3 }}>
          {filteredSearch.map((message) => {
            return (
              <Grid key={message.id} size={{ sm: 12, md: 6, lg: 4 }}>
                <Card sx={{ p: 3 }}>
                  <CardHeader
                    title={message.status}
                    sx={{ bgcolor: "#eddd59" }}
                  />
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
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => handleDelete(message.id)}
                      // call the function
                    >
                      Reject
                    </Button>
                    <Button
                      color="success"
                      variant="contained"
                      onClick={() => handleApprove(message.id)}
                    >
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
