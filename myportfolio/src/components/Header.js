import React from "react";
import Navigation from "./Navigation";

function Header({ currentPage, handlePageChange }) {
  return (
    <container fluid>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </container>
  );
}
export default Header;
