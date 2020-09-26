import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SalatInfo from "./components/SalatInfo/SalatInfo";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const endpoint = "http://www.islamicfinder.us/index.php/api/prayer_times";
    const country = "DZ";
    const zipCode = "16000";
    try {
      const response = await axios.get(
        `${endpoint}?country=${country}&zipcode=${zipCode}&time_format=0`
      );
      setData(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <SalatInfo data={data} />
    </div>
  );
}

export default App;
