import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const messageContext = createContext();

export default function MessageProvider({ children }) {
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || []
  );

  const createMessage = (messageData) => {
    try {
      if (!messageData.name || !messageData.message) {
        toast.error("name and message requierd");
        return;
      }
      const newMessage = {
        id: Date.now(),
        ...messageData,
      };
      const allMessages = [...messages, newMessage];
      localStorage.setItem("messages", JSON.stringify(allMessages));
      toast.success("messages sent");
      setMessages(allMessages);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <messageContext.Provider value={{ createMessage, messages }}>
      {children}
    </messageContext.Provider>
  );
}
