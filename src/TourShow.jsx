import "./TourShow.css";

export function TourShow(props) {
  return (
    <div className="background_modal">
      <div>
        <h1 className="center-title">{props.tour.name}</h1>
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
