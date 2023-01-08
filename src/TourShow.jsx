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

  return (
    <div className="background_modal">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="center-title">
            <input defaultValue={props.tour.name} name="name" type="text" className="titlebrew" />
            <button type="submit" className="update-button">
              Update Name
            </button>
          </div>
        </form>
        <button onClick={handleClick} className="delete-button">
          Delete Tour
        </button>
      </div>
      <div className="container2">
        {props.tour.breweries.map((brewery) => (
          <div className="card2">
            <div key={brewery.id}>
              <h2>{brewery.name}</h2>
              <a href={`https://www.${brewery.description}`}>{brewery.description}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
