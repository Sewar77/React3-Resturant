import Menu from "../../components/Menu/Menu.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Profile from "../../components/User/Profile/Profile.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Profile />
      <Menu />
    </>
  );
}
