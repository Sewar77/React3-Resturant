import { createContext, useContext, useEffect, useState } from "react";
import { userContext } from "./userContext";

export const cartContext = createContext();
const getKeyCart = (userId) => `cart_${userId}`; //cart_11

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { currentUser } = useContext(userContext);
  //get the user cart
  useEffect(() => {
    if (currentUser) {
      const savedCart = localStorage.getItem(getKeyCart(currentUser.id)); //get the user cart from locaslstorag,
      setCart(savedCart ? JSON.parse(savedCart) : []);
      //id the user has cart => store it into cart state, if not : []
    } else {
      setCart([]);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(getKeyCart(currentUser.id), JSON.stringify(cart));
    }
  }, [currentUser, cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === item.id); //find the item
      //if item exist, increase the quatityt
      if (exist) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantityCart: i.quantityCart + 1 } : i
        );
        //if not exist, add this item to cart with quantity 1
      } else {
        return [...prev, { ...item, quantityCart: 1 }];
      }
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantityCart: i.quantityCart + 1 } : i
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      (prev) =>
        prev
          .map((i) =>
            i.id === id ? { ...i, quantityCart: i.quantityCart - 1 } : i
          )
          .filter((i) => i.quantityCart > 0) //to delete item when q < 0
    );
  };
  return (
    <cartContext.Provider value={{ addToCart, cart, decreaseQty, increaseQty }}>
      {children}
    </cartContext.Provider>
  );
}
