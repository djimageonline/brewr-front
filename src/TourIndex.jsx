import axios from "axios";
import { useState, useEffect } from "react";
import { ToursNew } from "./ToursNew";
import { Modal } from "./Modal";
import { TourShow } from "./TourShow";

export function TourIndex(props) {
  const [tours, setTours] = useState([]);
  const [currentTour, setCurrentTour] = useState({});
  const [breweryTours, setBreweryTours] = useState([]);

  const handleShowTours = () => {
    axios.get(`https://brewr-production.up.railway.app/tours.json`).then((response) => {
      console.log(response.data);
      setTours(response.data);
    });
  };

  const handleCreateTour = (params) => {
    console.log("handleCreateTour", params);
    axios.post("https://brewr-production.up.railway.app/tours.json", params).then((response) => {
      console.log(response.data);
      setTours([...tours, response.data]);
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

  const handleUpdateTour = (id, params) => {
    console.log("handleUpdateTour", params);
    axios.patch(`https://brewr-production.up.railway.app/tours/${id}.json`, params).then((response) => {
      setTours(
        tours.map((tour) => {
          if (tour.id === response.data.id) {
            return response.data;
          } else {
            return tour;
          }
        })
      );
      handleClose();
    });
  };

  const handleDestoryTour = (tour) => {
    axios.delete("https://brewr-production.up.railway.app/tours/" + tour.id + ".json").then((response) => {
      setTours(tours.filter((t) => t.id !== tour.id));
      handleClose();
    });
  };

  const handleDestroyBreweryTour = (brewId, brewTourId) => {
    console.log("Hola 2", brewId);
    axios
      .delete("https://brewr-production.up.railway.app/breweries_tours/" + brewId + "/" + brewTourId + ".json")
      .then((response) => {
        setBreweryTours(breweryTours.filter((t) => t.id !== brewId));
        handleClose();
      });
  };

  useEffect(handleShowTours, []);

  return (
    <div>
      <div className="e-tour ">
        <br></br>
      </div>
      <div className="your-tours-container">
        <div className="left-tour-item-wrap">
          <ToursNew onCreateTour={handleCreateTour} />
          <Modal show={isTourShowInfoVisible} onClose={handleClose}>
            <TourShow
              tour={currentTour}
              onUpdateTour={handleUpdateTour}
              onDestroyTour={handleDestoryTour}
              onDestroyBreweryTour={handleDestroyBreweryTour}
            />
          </Modal>
        </div>

        <div className="right-tour-item-wrap">
          <h1>Your Tours:</h1>
          {tours.map((tour) => (
            <div key={tour.id} className="tours">
              <h2>
                {tour.name}
                <button onClick={() => handleShowTourInfo(tour)} className="styled-button your-tours-btn">
                  Info
                </button>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
