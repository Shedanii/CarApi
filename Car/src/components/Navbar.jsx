function Navbar({ query, setQuery }) {
  return (
    <div>
      <div >
        <h1>OTMOTO</h1>
      </div>
      <div >
        <input
          type="text"
          className="form-control"
          placeholder="Szukaj po marce lub modelu..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Navbar;