import About from "../../components/About/About";
import Feedbacks from "../../components/Feedbacks/Feednacks";
import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/Navbar/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />
      <About />

      <Menu />
      <Feedbacks />
    </>
  );
}
