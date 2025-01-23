import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";
import component from "../pages/stylesheet/component.module.css";

const Theme = () => {
  const [isLightMode, setIsLightMode] = useState(
    !!localStorage.getItem("lightMode")
  );

  const toggleTheme = () => {
    if (isLightMode) {
      localStorage.removeItem("lightMode");
      alert("Dark mode activated");
    } else {
      localStorage.setItem("lightMode", "true");
      alert("Light mode activated");
    }
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    const theme = isLightMode ? "light" : "dark";
    document.body.setAttribute("data-theme", theme);
  }, [isLightMode]);

  return (
    <>
      {isLightMode ? (
        <MdOutlineDarkMode className={component.Icon} onClick={toggleTheme} />
      ) : (
        <MdDarkMode className={component.Icon} onClick={toggleTheme} />
      )}
    </>
  );
};

export default Theme;
