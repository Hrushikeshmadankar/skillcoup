import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <div
        className="text-center p-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022&nbsp;
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Skillcoup&nbsp;
        </a>
        All Rights Reserved.
      </div>
    </MDBFooter>
  );
};

export default Footer;
