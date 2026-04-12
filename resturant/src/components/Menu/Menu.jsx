import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
function Menu() {
  return (
    <>
      <Container>
        <Typography variant="h1">Menu</Typography>
        <Grid
          container
          spacing={4}
          sx={{
            padding: 5,
            margin: 5,
          }}
        >
          <Grid size={4}>
            <Card
              sx={{
                padding: 5,
                textAlign: "center",
              }}
            >
              <CardMedia
                image="../../../src/assets/card.jpg"
                title="Image"
                sx={{
                  height: 100,
                }}
              />
              <CardContent>
                <Typography variant="h3">Menu1</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  earum natus modi consequatur cupiditate amet a sequi quam
                  ducimus deleniti repudiandae eveniet nemo quis totam ipsa sint
                  minima, veniam delectus.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={4}>
            <Card
              sx={{
                padding: 5,
                textAlign: "center",
              }}
            >
              <CardMedia
                image="../../../src/assets/card.jpg"
                title="Image"
                sx={{
                  height: 100,
                }}
              />
              <CardContent>
                <Typography variant="h3">Menu1</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  earum natus modi consequatur cupiditate amet a sequi quam
                  ducimus deleniti repudiandae eveniet nemo quis totam ipsa sint
                  minima, veniam delectus.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={4}>
            <Card
              sx={{
                padding: 5,
                textAlign: "center",
              }}
            >
              <CardMedia
                image="../../../src/assets/card.jpg"
                title="Image"
                sx={{
                  height: 100,
                }}
              />
              <CardContent>
                <Typography variant="h3">Menu1</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  earum natus modi consequatur cupiditate amet a sequi quam
                  ducimus deleniti repudiandae eveniet nemo quis totam ipsa sint
                  minima, veniam delectus.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={4}>
            <Card
              sx={{
                padding: 5,
                textAlign: "center",
              }}
            >
              <CardMedia
                image="../../../src/assets/card.jpg"
                title="Image"
                sx={{
                  height: 100,
                }}
              />
              <CardContent>
                <Typography variant="h3">Menu1</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  earum natus modi consequatur cupiditate amet a sequi quam
                  ducimus deleniti repudiandae eveniet nemo quis totam ipsa sint
                  minima, veniam delectus.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default Menu;
