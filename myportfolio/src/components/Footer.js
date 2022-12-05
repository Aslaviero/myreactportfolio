import React from "react";
import { FaTwitterSquare, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer({ currentPage, handlePageChange }) {
  return (
    <div className="container-fluid">
      <footer className="d-flex flex-wrap justify-content-center pt-2  bg-secondary fixed-bottom">
        <div className="col-md-4 p-4 d-flex align-items-center justify-content-between">
          <a
            rel="noopener noreferrer"
            href="https://github.com/aslaviero/"
            className=" me-2 lh-1 fa-2x text-light text-decoration-none text-uppercase"
          >
            {" "}
            <FaGithub />
          </a>

          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/anthony-slaviero-16ab05153/"
            className="me-2 lh-1 fa-2x text-light text-decoration-none text-uppercase"
          >
            <FaLinkedin />
          </a>

          <a
            rel="noopener noreferrer"
            href="https://twitter.com/itameanthony"
            className="me-5   text-light text-decoration-none text-uppercase"
          >
            <FaTwitterSquare />
          </a>

          <span className="mt-5 text-center"></span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
