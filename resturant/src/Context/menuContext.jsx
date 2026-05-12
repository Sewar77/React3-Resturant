import { createContext, useEffect, useState } from "react";

export const menuContext = createContext();

export default function MenuProvider({ children }) {
  const [menu, setMenu] = useState([]);
  const pizzaMenu = [
    {
      id: 1, //unique value
      name: "Margherita",
      description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
      image: "./src/assets/pizza1.jpg",
      price: 10.99,
      quantity: 10, //quantity for the resturant itself.
      quantityCart: 0,
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Spicy pepperoni slices on a tomato sauce base.",
      image: "./src/assets/pizza2.jpg",
      price: 10.99,
      quantity: 10,
      quantityCart: 0,
    },
    {
      id: 3,
      name: "Hawaiian",
      description: "Ham and pineapple topping for a sweet and savory flavor.",
      image: "./src/assets/pizza3.jpg",
      price: 10.99,
      quantity: 10,
      quantityCart: 0,
    },
    {
      id: 4,
      name: "Vegetarian",
      description:
        "Assorted vegetables including mushrooms, onions, peppers, and olives.",
      image: "./src/assets/pizza1.jpg",
      price: 10.99,
      quantity: 10,
      quantityCart: 0,
    },
    {
      id: 5,
      name: "Meat Lovers",
      description:
        "Pepperoni, sausage, ham, and bacon for a hearty meaty experience.",
      image: "./src/assets/pizza2.jpg",
      price: 10.99,
      quantity: 10,
      quantityCart: 0,
    },
  ];
  let storedMenu = JSON.parse(localStorage.getItem("menu"));
  if (!storedMenu || storedMenu.length === 0) {
    localStorage.setItem("menu", JSON.stringify(pizzaMenu));
    storedMenu = pizzaMenu;
  }

  useEffect(() => {
    const allMenu = JSON.parse(localStorage.getItem("menu"));
    if (allMenu) {
      setMenu(allMenu);
    }
  }, []);

  return (
    <menuContext.Provider value={{ menu, setMenu }}>
      {children}
    </menuContext.Provider>
  );
}
