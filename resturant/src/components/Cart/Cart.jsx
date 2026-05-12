import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";
import { userContext } from "../../Context/userContext";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Button,
  Typography,
} from "@mui/material";
export default function Cart() {
  const { cart, increaseQty, decreaseQty } = useContext(cartContext);
  const { currentUser } = useContext(userContext);
  console.log(cart);

  return (
    <>
      <Container>
        <Typography variant="h2"> My Cart</Typography>
        {cart.length === 0 ? (
          <Typography>Cart is Empty</Typography>
        ) : (
          <>
            <Grid container spacing={3}>
              {cart.map((item) => {
                return (
                  <Grid key={item.id}>
                    <Card>
                      <CardContent>
                        <Typography> {item.name}</Typography>
                        <Typography> {item.price}</Typography>
                        <Typography> {item.quantityCart}</Typography>
                        <Typography>
                          Total: {item.price * item.quantityCart}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          variant="contained"
                          color="info"
                          sx={{ mx: 2, mt: 3 }}
                          onClick={() => increaseQty(item.id)}
                        >
                          +
                        </Button>

                        <Button
                          variant="contained"
                          color="warning"
                          sx={{ mx: 2, mt: 3 }}
                          onClick={() => decreaseQty(item.id)}
                        >
                          -
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </>
        )}
      </Container>
    </>
  );
}
