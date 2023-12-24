import ResponsiveAppBar from "../src/components/Navbar";
import Home from "./pages/Home";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Template from "./pages/Template";
import CssBaseline from '@mui/material/CssBaseline'; // Import CssBaseline

import About from "./pages/About";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import ResponsiveAppBar from "../src/components/Navbar";



function App() {

  const [darkMode, setDarkMode] = React.useState(false);

  // Define your light and dark themes
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      // Define your light mode palette colors here
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      // Define your dark mode palette colors here
    },
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {/* Pass toggleDarkMode as a prop to your main component */}
      <ResponsiveAppBar toggleDarkMode={toggleDarkMode} />
      <div className="App">
        {/* <ResponsiveAppBar></ResponsiveAppBar> */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/template/:encodedName" element={<Template />}/>
          <Route path="/about" element={<About/>} />
        </Routes>

      </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
