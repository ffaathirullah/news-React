import React from "react";
import { SagaraLogo } from "../../images/icons";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark row-sm-center">
      <div className="container-fluid col-md-10">
        <div className="SagaraBrand navbar-brand">
          <Link to={props.news ? "/news" : "/"}>
            <SagaraLogo />
          </Link>
        </div>
      </div>

      <div className="loginLogout col-md-2">
        {props.registrasi && (
          <Link to="/login">
            <button
              type="button col-md-3"
              style={{ width: "8em", marginLeft: "2.5em" }}
              className="btn btn-light"
            >
              {props.news ? "Logout" : "Login"}
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
