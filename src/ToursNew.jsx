export function ToursNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTour(params);
    event.target.reset();
  };

  return (
    <div>
      <h1>New Tour</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="name" type="text" placeholder="Enter Tour Name" />
        </div>
        <button type="submit" className="create-button styled-button">
          Create Tour
        </button>
      </form>
    </div>
  );
}
