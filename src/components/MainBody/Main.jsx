import react, { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Cards from "./Cards/Cards";
import "./Cards/Cards.css";

const Main = () => {
  const [rideData, setRideData] = useState([]);

  useEffect(() => {
    axios
      .get("https://assessment.api.vweb.app/rides")
      .then((res) => {
        console.log(res.data);
        setRideData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="mt-4" style={{ color: "#D0CBCB" }}>
        <div className="row">
          <div className="col-md-2 active Nride">
            <u>Nearest rides</u>{" "}
          </div>
          <div className="col-md-2 Uride">Upcomming rides (4)</div>
          <div className="col-md-2 Pride">Past Rides (2)</div>
          <div className="col-md-6" style={{textAlign:"center"}}> ≡ Filter</div>
        </div>
      </div>

      <div className="container mt-5">
        {rideData.map((ride) => (
          <div key={ride.id + ride.city}>
            <Cards
              city={ride.city}
              date={ride.date}
              origin_station={ride.origin_station_code}
              id={ride.id}
              map_url={ride.map_url}
              state={ride.state}
              station_path={ride.station_path}
              destination_station={ride.destination_station_code}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
