import React, { useState } from "react";
import Form from "../../atoms/Form";
import Radio from "../../atoms/Radio";
import Dropdowns from "./Dropdowns";
import { useNavigate } from "react-router-dom";

function LeftRegister() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [province, setProvince] = useState("");
  const [kota2, setKota2] = useState("");

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const Navigation = () => {
    if (name === "") {
      alert("Belum Ada Nama");
    } else if (lastName === "") {
      alert("Belum Ada lastName");
    } else if (email === "") {
      alert("Belum Ada email");
    } else if (!validateEmail(email) == true) {
      alert("Email Tidak Valid");
    } else if (password === "") {
      alert("Belum Ada password");
    } else if (gender === "") {
      alert("Belum Ada gender");
    } else if (province === "") {
      alert("Belum Ada province");
    } else if (kota2 === "") {
      alert("Belum Ada kota");
    } else {
      localStorage.setItem("user", "holaaa");
      navigate("/news");
    }
  };

  return (
    <div className="col-md-12 mt-3 align-self-center justify-content-center">
      <h3>Registrasi Sekarang</h3>
      <div className="mt-4">
        <Form
          text="First Name"
          placeholder="Enter your First Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Form
          text="Last Name"
          placeholder="Enter your Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Form
          email
          text="Email"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form
          password
          text="Password"
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Radio setGender={setGender} />
        <Dropdowns
          textTitle="Pilih Provinsi"
          setProvince={setProvince}
          setKota2={setKota2}
        />
        <div className="d-flex justify-content-start">
          <button
            onClick={() => Navigation()}
            type="button"
            class="btn btn-secondary mt-5"
            style={{ width: "60%" }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftRegister;
