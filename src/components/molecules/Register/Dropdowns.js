import React, { useState, useEffect } from "react";

function Dropdowns({ setProvince, setKota2 }) {
  const [prov, setProv] = useState([]);
  const [kota, setKota] = useState([]);

  let provinsi = [
    { nama_provinsi: "Kalimantan Timur", id_provinsi: 1 },
    { nama_provinsi: "Kalimantan Selatan", id_provinsi: 2 },
  ];

  let kotas = [
    { nama_kota: "Balikpapan", id_provinsi: 1, id_kota: 1 },
    { nama_kota: "Samarinda", id_provinsi: 1, id_kota: 1 },
    { nama_kota: "Banjarmasin", id_provinsi: 2, id_kota: 1 },
    { nama_kota: "Alabio", id_provinsi: 2, id_kota: 1 },
  ];

  useEffect(() => {
    setProv(provinsi);
  }, []);
  const provinsiChangeHandler = (e) => {
    let kotaProvinsi = kotas.filter(
      (item) => item.id_provinsi == e.target.value
    );

    let provinsiName = provinsi.filter(
      (item) => item.id_provinsi == e.target.value
    );

    setProvince(provinsiName[0].nama_provinsi);
    setKota(kotaProvinsi);
  };

  return (
    <>
      <div className="mt-2">
        <label>Pilih Provinsi</label> <br />
        <select
          className="btn btn-light "
          onChange={provinsiChangeHandler}
          style={{ width: "50%" }}
        >
          <option>Pilih Provinsi</option>
          {prov.map((item) => {
            return (
              <option key={item.id_provinsi} value={item.id_provinsi}>
                {item.nama_provinsi}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mt-2">
        <label>Pilih Kota</label> <br />
        <select
          className="btn btn-light"
          style={{ width: "50%" }}
          onClick={(e) => setKota2(e.target.value)}
        >
          <option>Pilih Kota</option>
          {kota.map((item) => (
            <option key={item.id_kota}>{item.nama_kota}</option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Dropdowns;
