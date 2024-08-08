import React, { useState } from "react";
import Button from "../shared/Button";
import Login from "../login";
import ListMenu from "./listMenu";
import { MDBModal, MDBModalDialog } from "mdb-react-ui-kit";

const Menu = () => {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => {
    setBasicModal(basicModal => !basicModal);
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
            <ListMenu />
            
            <div className="d-flex flex-column sim">
              <Button
                title="Masuk"
                icon="fa fa-lg fa-sign-in"
                clickBtn={toggleShow}
              />
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
