export function ToursNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTour(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Tour</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <button type="submit">Create Tour</button>
      </form>
    </div>
  );
}
