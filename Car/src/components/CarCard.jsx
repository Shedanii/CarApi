function CarCard({ car, onDelete }) {
  return (
    <div className="card h-100">
      <img
        src={car.img}
        alt={car.model}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{car.brand} {car.model}</h5>
        <p className="card-text mb-1">
          <strong>Rok:</strong> {car.year} <br />
          <strong>Cena:</strong> {car.price} zł
        </p>
        <p className="card-text">{car.description}</p>
        <button
          className="btn btn-danger mt-auto"
          onClick={() => onDelete(car.id)}
        >
          Usuń
        </button>
      </div>
    </div>
  );
}

export default CarCard;