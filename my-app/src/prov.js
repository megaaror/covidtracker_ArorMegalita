import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from 'react-bootstrap'

const Prov = () => {
  const [corona, setCorona] = useState([]);

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then((res) => {
        setCorona(res.data.data);
      });
  }, []);

  return (
    <div className="text-center">
      <h3>Jumlah Kasus Per provinsi</h3>
      <Table striped bordered hover variant="primary" className="mt-3">
        <thead>
          <tr>
            <th>Provinsi</th>
            <th>Positif</th>
            <th>Sembuh</th>
            <th>Meninggal</th>
          </tr>
        </thead>
        <tbody>
          {corona.map((items)=>{return(
            <tr>
            <td>{items.provinsi}</td>
          <td>{items.kasusPosi}</td>
          <td>{items.kasusSemb}</td>
          <td>{items.kasusMeni}</td>
          </tr>
          )
          }) }
          
        </tbody>
      </Table>
    </div>
  );
}

export default Prov;