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
        status: "pending",
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
  const deleteMessage = (msgId) => {
    try {
      const newMessages = messages.filter((msg) => msg.id !== msgId);
      setMessages(newMessages);
      localStorage.setItem("messages", JSON.stringify(newMessages));
      toast.success("deleted");
    } catch (error) {
      console.log(error);
    }
  };
  const approveMessage = (msgId) => {
    try {
      const newMessage = messages.map((mesg) =>
        mesg.id === msgId ? { ...mesg, status: "approved" } : mesg
      );
      setMessages(newMessage);
      localStorage.setItem("messages", JSON.stringify(newMessage));
      toast.success("approved");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <messageContext.Provider
      value={{ createMessage, messages, deleteMessage, approveMessage }}
    >
      {children}
    </messageContext.Provider>
  );
}
