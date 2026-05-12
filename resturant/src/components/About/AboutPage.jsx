import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Box
          sx={{
            bgcolor: "#feedca",
            my: 4,
            borderRadius: 4,
            p: 4,
          }}
        >
          <Typography variant="h2">Who are we? </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, consequuntur perferendis molestiae aliquid suscipit
            ratione. Itaque amet, esse aliquid quisquam nesciunt incidunt magnam
            veniam iste exercitationem distinctio, facere id! Vero. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Animi itaque incidunt
            commodi eius. Quas, vel mollitia! Distinctio sed, omnis deleniti rem
            minima ea cupiditate harum exercitationem officiis error porro
            libero?
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "#bbb3a2",
            my: 4,
          }}
        >
          <Typography variant="h2">WHY us? </Typography>
          <Card>
            <CardHeader title="Why Us?" />
            <CardMedia
              component="img"
              src="./hero.png"
              width="200px"
              height="200px"
            />
            <CardContent>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, consequuntur perferendis molestiae aliquid
                suscipit ratione. Itaque amet, esse aliquid quisquam nesciunt
                incidunt magnam veniam iste exercitationem distinctio, facere
                id! Vero. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Animi itaque incidunt commodi eius. Quas, vel mollitia!
                Distinctio sed, omnis deleniti rem minima ea cupiditate harum
                exercitationem officiis error porro libero?
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            bgcolor: "#bbb3a2",
            my: 4,
          }}
        >
          <Typography variant="h2">How to deal with us? </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              p: 2,
              m: 2,
              width: "100%",
            }}
          >
            <Card sx={{ width: "40%" }}>
              <CardHeader title="Why Us?" />
              <CardMedia
                component="img"
                src="./hero.png"
                width="100px"
                height="100px"
              />
              <CardContent>
                <Typography>
                  Distinctio sed, omnis deleniti rem minima ea cupiditate harum
                  exercitationem officiis error porro libero?
                </Typography>
              </CardContent>
            </Card>
            <Box sx={{ width: "40%" }}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, consequuntur perferendis molestiae aliquid
                suscipit ratione. Itaque amet, esse aliquid quisquam nesciunt
                incidunt magnam veniam iste exercitationem distinctio, facere
                id! Vero. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Animi itaque incidunt commodi eius. Quas, vel mollitia!
                Distinctio sed, omnis deleniti rem minima ea cupiditate harum
                exercitationem officiis error porro libero?
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
