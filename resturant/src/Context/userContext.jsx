import { createContext, useEffect, useState } from "react";

export const userContext = createContext(); //store data

//provide these data
export default function UserProvider({ children }) {
  //new state to store the users
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  // store in local storage (set item ======> string) == convert the data into string
  // localStorage.setItem("users", JSON.stringify(users));
  // get from local storage (GET ITEM====> parse ) convert from string to the original type

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const current = JSON.parse(localStorage.getItem("currentUser")) || [];
    console.log("from use effect allUsers");

    if (current) {
      setCurrentUser(current);
    }
    if (allUsers) {
      setUsers(allUsers);
    }
  }, []);
  //empty [] => empty depandancies=> when refresh

  return (
    <userContext.Provider
      value={{ users, setUsers, currentUser, setCurrentUser }}
    >
      {/* value => what to provide */}
      {children}
      {/* children => for whome to provide */}
    </userContext.Provider>
  );
}
