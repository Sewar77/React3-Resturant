import Contact from "./Pages/Contact/Contact";
import Landing from "./Pages/Landing/Landing";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test.jsx";
import { Toaster } from "react-hot-toast";
import Register from "./components/Auth/Register.jsx";
import Login from "./components/Auth/Login.jsx";
import Home from "./Pages/Home/Home.jsx";
import Admin from "./Pages/Admin/Admin.jsx";
function App() {
  return (
    <>
      {/* config toaster */}
      <Toaster position="top-center" />
      {/* define routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin/dashboard" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
//hook => useHook =>(react) useState ,(react-router-dom) useNavigate
