import React from "react";
import LeftRegisterLogin from "../../molecules/Login/LeftRegisterLogin";
import RightRegisterLogin from "../../molecules/Login/RightRegisterLogin";
import LeftRegister from "../../molecules/Register/LeftRegister";

export default function FormLogin() {
  return (
    <div
      min-vw-100
      className="row justify-content-center align-self-center align-content-center  mx-5 my-5 rounded-3"
    >
      <div
        className="row justify-content-center align-self-center align-content-center text-white"
        style={{ borderRadius: "25px" }}
      >
        <div className="col-md-5 bg-light py-5 px-5">
          <RightRegisterLogin />
        </div>
        <div className="col-md-5 bg-dark py-5 px-5">
          <LeftRegisterLogin />
        </div>
      </div>
    </div>
  );
}
