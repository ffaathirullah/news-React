import React, { useState } from "react";
import Form from "../../atoms/Form";
import { useNavigate } from "react-router-dom";

function LeftRegisterLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  const navigate = useNavigate();

  const Navigation = () => {
    if (email === "") {
      alert("Belum Ada email");
    } else if (!validateEmail(email) == true) {
      alert("Email Tidak Valid");
    } else if (password === "") {
      alert("Belum Ada password");
    } else {
      localStorage.setItem("user", "holaaa");
      navigate("/news");
    }
  };

  return (
    <div className="col-md-12 mt-3 align-self-center justify-content-center">
      <h3>Isi Form Untuk Login</h3>
      <div className="mt-4 mb-2">
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

        <button
          onClick={() => Navigation()}
          type="button"
          class="btn btn-secondary mt-5"
          style={{ width: "60%" }}
        >
          Login Now
        </button>
      </div>
      <a
        className="mt-5"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Belum punya akun? Daftar Sekarang
      </a>
    </div>
  );
}

export default LeftRegisterLogin;
