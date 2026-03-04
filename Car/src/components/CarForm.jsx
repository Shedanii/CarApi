import { useState } from "react";

function CarForm({ onAdd }) {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    price: "",
    year: "",
    img: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => !value)) {
      alert("Wszystkie pola są wymagane!");
      return;
    }

    onAdd(formData);

    setFormData({
      brand: "",
      model: "",
      price: "",
      year: "",
      img: "",
      description: "",
    });
  };

  return (
    <div className="card p-4 mt-3">
      <h5 className="card-title mb-4">Dodaj ogłoszenie</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Brand"
            className="form-control"
            value={formData.brand}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Model"
            className="form-control"
            value={formData.model}
            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="number"
              placeholder="Price"
              className="form-control"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="number"
              placeholder="Year"
              className="form-control"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            />
          </div>
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Image URL"
            className="form-control"
            value={formData.img}
            onChange={(e) => setFormData({ ...formData, img: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Opis"
            className="form-control"
            rows="3"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Dodaj Oferte
        </button>
      </form>
    </div>
  );
}

export default CarForm;