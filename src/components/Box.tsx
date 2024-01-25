import { useContext } from "react";
import { ThemeContext } from "../App";

const Box = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          backgroundColor: theme === "dark" ? "rgb(40,40,40)" : "white",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        <h1>Box 1</h1>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </>
  );
};

export default Box;
