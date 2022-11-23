import React, { useState } from "react";
import Login from "./Login";
import { MDBModal, MDBModalDialog } from "mdb-react-ui-kit";

const Menu = () => {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => {
    setBasicModal(!basicModal);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid all-show px-5">
          <a className="navbar-brand" href="#">
            <i className="fa fa-codepen"></i> ERP House
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#intro">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#about"
                >
                  Tentang Kami
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Layanan
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Hubungi Kami
                </a>
              </li>
            </ul>
            <div className="d-flex flex-column sim">
              <button className="myBtn" onClick={toggleShow}>
                <i className="fa fa-lg fa-sign-in" aria-hidden="true"></i>
                &nbsp; Masuk
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <Login />
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default Menu;
