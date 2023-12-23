import ResponsiveAppBar from "../src/components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Template from "./pages/Template";
function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/template/:encodedName" element={<Template />}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
