import "./index.css";

export function TourShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateTour(props.tour.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyTour(props.tour);
  };

  const handleClickRemove = (brewId, brewTourId) => {
    props.onDestroyBreweryTour(brewId, brewTourId);
    console.log("Hola", brewId);
  };

  return (
    <div className="background_modal">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="center-title">
            <input defaultValue={props.tour.name} name="name" type="text" className="titlebrew" />
            <button type="submit" className="update-button styled-button">
              Update Name
            </button>
          </div>
        </form>
        <div className="delete">
          <button onClick={handleClick} className="delete-button styled-button">
            Delete Tour
          </button>
        </div>
      </div>
      <div className="container2">
        {props.tour.breweries.map((brewery) => (
          <div key={brewery.id} className="card2">
            <h2>{brewery.name}</h2>
            <a href={`https://www.${brewery.description}`}>{brewery.description}</a>
            <form onClick={() => handleClickRemove(brewery.id, props.tour.id)}>
              <button>Remove</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
