import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";

function App() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const url = "http://localhost:5005/api/cars";

  const fetchCars = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if(data){
        setCars(data)
      }
      else{
        setCars([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const addCar = async (car) => {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    });

    fetchCars();
  };

  const deleteCar = async (id) => {
    await fetch(`${url}/${id}`, { method: "DELETE" });
    fetchCars();
  };

  const filteredCars = cars.filter((car) =>
    `${car.brand} ${car.model}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="bg-light vh-100">
      <div className="container">
        <Navbar query={query} setQuery={setQuery} />
        <CarForm onAdd={addCar} />
        <CarList
          cars={filteredCars}
          loading={loading}
          onDelete={deleteCar}
        />
      </div>
    </div>
  );
}

export default App;