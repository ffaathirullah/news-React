import React from "react";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SagaraLogo } from "../../images/icons";

const Footer = () => (
  <div className="container-fluid" style={{ padding: "0em" }}>
    <div className="mt_50" />
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#1c2331" }}
    >
      <section
        className="d-flex justify-content-between p-4  bg-dark"
        // style={{ backgroundColor: '#000' }}
      >
        <div className="me-5">
          <span>Get connected with us :</span>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className=" align-self-center justify-content-center align-co col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <SagaraLogo />
            </div>
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Sagara Technology</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "15em",
                  backgroundColor: "#cd168b",
                  height: "0.2em",
                }}
              />
              <p style={{ fontSize: "1em" }}>
                Sagara Technology is an industry-leading software development
                proficient in delivering web and mobile IT solutions, outsourced
                product engineering services, and a digital marketing agency to
                provide enterprises reinvent their objectives for the digital
                age.
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "15em",
                  backgroundColor: "#cd168b",
                  height: "0.2em",
                }}
              />
              <p>
                <FontAwesomeIcon icon={faHome} width="2em" height="2em" />
                <span style={{ fontSize: "1em" }}>
                  &nbsp; Summarecon Bandung, Magna Commercial No MA03 Summarecon
                  Bandung, Rancabolang, Kec. Gedebage, Kota Bandung, Jawa Barat
                  40286
                </span>
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} width="2em" height="2em" />
                <span style={{ fontSize: "1em" }}>
                  &nbsp; ffaathirullah1@gmail.com
                </span>
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} width="2em" height="2em" />
                <span style={{ fontSize: "1em" }}>&nbsp;0857-2054-1544</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <span style={{ fontSize: "1em" }}>© 2022 Copyright:</span>
        <a className="text-white" href="#/" style={{ fontSize: "1em" }}>
          &nbsp; PT Sagara Technology
        </a>
      </div>
    </footer>
  </div>
);

export default Footer;
