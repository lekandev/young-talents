import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Join from "./pages/Join/Join";
import Events from "./pages/Events/Events";
import Gallery from "./pages/Gallery/Gallery";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
