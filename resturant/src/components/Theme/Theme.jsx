import { Button } from "@mui/material";
import { useEffect, useState } from "react";
function Theme() {
  //default
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? "#4f4554" : "white";
    document.getElementById("navbar").style.backgroundColor =
      theme === "dark" ? "#333399" : "#0d75f8";
    document.body.style.color = theme === "light" ? "black" : "white";
    console.log("theme");

    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  //change
  const handleChangeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <>
      <Button variant="contained" color="warning" onClick={handleChangeTheme}>
        {theme === "dark" ? "light" : "dark"}
      </Button>
    </>
  );
}

export default Theme;
