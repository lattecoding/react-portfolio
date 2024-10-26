import { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/AboutPage";
import Portfolio from "./pages/PortfolioPage";
import Contact from "./pages/ContactPage";
import Resume from "./pages/ResumePage";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "AboutPage") {
      return <About />;
    }
    if (currentPage === "PortfolioPage") {
      return <Portfolio />;
    }
    if (currentPage === "ContactPage") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
