import ResponsiveAppBar from "../src/components/Navbar";
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Template from "./pages/Template";
import CssBaseline from "@mui/material/CssBaseline";

import About from "./pages/About";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const storedTheme = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = React.useState(storedTheme === "dark");

  // Define your light and dark themes
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light"); // Save selected theme mode to localStorage
  };

  return (
    <Router>
      <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
        <CssBaseline />
        <ResponsiveAppBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/template/:encodedName" element={<Template />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
