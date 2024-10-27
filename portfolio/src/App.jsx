import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./components/pages/AboutPage";
import PortfolioPage from "./components/pages/PortfolioPage";
import ContactPage from "./components/pages/ContactPage";
import ResumePage from "./components/pages/ResumePage";

const App = () => (
  <Router>
    <Header />
    <main className="mx-3">
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/" element={<AboutPage />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
