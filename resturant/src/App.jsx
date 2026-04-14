import Contact from "./Pages/Contact/Contact";
import Landing from "./Pages/Landing/Landing";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test.jsx";
function App() {
  return (
    <>
      {/* define routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sewar/jihad/react2/course" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
//hook => useHook =>(react) useState ,(react-router-dom) useNavigate
