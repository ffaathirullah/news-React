import React from "react";

function Radio({ setGender }) {
  return (
    <>
      <label className="mt-2">Pilih Jenis Kelamin</label>
      <div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            onClick={() => setGender("Laki-Laki")}
          />
          <label className="form-check-label" for="inlineRadio1">
            Laki-Laki
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
            onClick={() => setGender("Perempuan")}
          />
          <label className="form-check-label" for="inlineRadio2">
            Perempuan
          </label>
        </div>
      </div>
    </>
  );
}

export default Radio;
