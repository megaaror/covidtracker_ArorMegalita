import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

const Indo =()=> {
  const [indonesia, setIndonesia] = useState({ positif: NaN, meninggal: NaN, sembuh: NaN })

  useEffect(() => {
    axios.get("https://indonesia-covid-19.mathdro.id/api")
      .then((res) => {
        setIndonesia(
          {
            positif: res.data.jumlahKasus,
            meninggal: res.data.meninggal,
            sembuh: res.data.sembuh
          })
      })
      .catch((err) => console.log(err))
  })
  return (
    <div>
      Jumlah Kasus Indonesia
      <h2>confirm {indonesia.positif}</h2>
      <h2>sembuh {indonesia.sembuh}</h2>
      <h2>meninggal {indonesia.meninggal}</h2>
    </div>
  );
}

export default Indo;