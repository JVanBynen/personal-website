import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StarBattlePage from "./pages/StarBattlePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/star-battle" element={<StarBattlePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;