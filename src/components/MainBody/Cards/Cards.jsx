import React from "react";
import "./Cards.css";

const Cards = ({
  city,
  date,
  id,
  map_url,
  origin_station,
  state,
  station_path,
  destination_station,
}) => {
  return (
    <div className="cardBody">
      <div className="card mb-3" style={{ maxWidth: "100%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="img-fluid cardsImage rounded-start"
              src={map_url}
              alt="..."
            />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <p className="card-text">
                Ride Id : <small>{id}</small>
              </p>
              <p className="card-text">
                Origin Station : <small>{origin_station}</small>
              </p>
              <p className="card-text">
                station_path : <small>[{station_path}]</small>
              </p>
              <p className="card-text">
                Date : <small>{date}</small>
              </p>
              <p className="card-text">
                Distance : <small>{destination_station - origin_station}</small>
              </p>
            </div>
          </div>
          <div
            className="col-md-4 text-white mt-5"
            style={{ textAlign: "left" }}
          >
            <span className="citySpan">{city}</span>
            <span className="citySpan">{state}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
