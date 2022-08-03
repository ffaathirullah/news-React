import React from "react";
import { RegisterImage, RegisterImage2 } from "../../../images/image";

function RightRegister() {
  return (
    <div
      d-flex
      flex-column
      className=" align-self-center justify-content-center "
    >
      <RegisterImage width="100%" height="80%" />
      <RegisterImage2 width="100%" height="80%" className="mt-5" />
    </div>
  );
}

export default RightRegister;
