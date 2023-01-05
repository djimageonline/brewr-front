import axios from "axios";
import { useState, useEffect } from "react";
import { ToursNew } from "./ToursNew";
import { Modal } from "./Modal";
import { TourShow } from "./TourShow";

export function TourIndex(props) {
  const [tours, setTours] = useState([]);
  const [currentTour, setCurrentTour] = useState({});

  const handleShowTours = () => {
    axios.get(`http://localhost:3000/tours.json`).then((response) => {
      console.log(response.data);
      setTours(response.data);
    });
  };

  const handleCreateTour = (params, successCallback) => {
    console.log("handleCreateTour", params);
    axios.post("http://localhost:3000/tours.json", params).then((response) => {
      setTours([...tours, response.data]);
      successCallback();
    });
  };

  const [isTourShowInfoVisible, setIsTourShowInfoVisible] = useState(false);

  const handleClose = () => {
    console.log("handleClose");
    setIsTourShowInfoVisible(false);
  };

  const handleShowTourInfo = (tour) => {
    console.log("handleShowTourInfo", tour);
    setIsTourShowInfoVisible(tour);
    setCurrentTour(tour);
  };

  useEffect(handleShowTours, []);

  return (
    <div>
      <ToursNew onCreateTour={handleCreateTour} />
      <Modal show={isTourShowInfoVisible} onClose={handleClose}>
        <TourShow tour={currentTour} />
      </Modal>
      <h1>Your Tours:</h1>
      {tours.map((tour) => (
        <div key={tour.id} className="tours">
          <h2>
            {tour.name}
            <button onClick={() => handleShowTourInfo(tour)}>Info</button>
          </h2>
        </div>
      ))}
    </div>
  );
}