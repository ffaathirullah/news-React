import React from "react";
import LeftRegister from "../../molecules/Register/LeftRegister";
import RightRegister from "../../molecules/Register/RightRegister";

function FormRegister() {
  return (
    <div
      min-vw-100
      className="row justify-content-center align-self-center align-content-center  mx-5 my-5 rounded-3"
    >
      <div
        className="row justify-content-center align-self-center align-content-center text-white"
        style={{ borderRadius: "25px" }}
      >
        <div className="col-md-5 bg-dark py-5 px-5">
          <LeftRegister />
        </div>
        <div className="col-md-5 bg-light py-5 px-5">
          <RightRegister />
        </div>
      </div>
    </div>
  );
}

export default FormRegister;
