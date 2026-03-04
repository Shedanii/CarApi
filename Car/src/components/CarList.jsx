import CarCard from "./CarCard";

function CarList({ cars, onDelete }) {

  if (cars.length === 0) {
    return (
      <div className="text-center my-5">
        Brak wyników.
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {cars.map((car) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <CarCard car={car} onDelete={onDelete} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarList;