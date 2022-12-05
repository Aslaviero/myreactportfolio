import "./styles/App.css";
import "./styles/index.css";
import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
// import Navigation from "./components/Navigation";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
    if (currentPage === "Header") {
      return <Header />;
    }
    if (currentPage === "Footer") {
      return <Footer />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
