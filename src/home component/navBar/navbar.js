import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './navBar.css'

const Navbar = () => {


  return (
    <div className="myNav  fixed-top">
      <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold ps-4" href="#">
            Home
          </a>

          <div className="navbar-collapse coollapse position-absolute end-0 me-5">
          
              <input
                style={{
                  borderRadius: "100px 100px 100px 100px",
                  width: "33vw",
                  backgroundColor: "lightGray",
                }}
                className="form-control "
                type="search"
                placeholder="Search Twitter"
                aria-label="Search"
              />
          </div>
        </div>
      </nav>
      </div>
     
    </div>
  );
};

export default Navbar;
