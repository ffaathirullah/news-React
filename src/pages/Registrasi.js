import React from "react";
import Footer from "../components/organisms/Footer";
import FormRegister from "../components/organisms/Register/FormRegister";
import Header from "../components/organisms/Header";

function Registrasi() {
  return (
    <>
      <Header registrasi />
      <FormRegister />
      <Footer />
    </>
  );
}

export default Registrasi;
