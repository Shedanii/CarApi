import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';

function Navbar({ query, setQuery }) {
  return (
    <div className="p-3 d-flex align-items-center">
        <img src={logo} 
            className="me-3"
            style={{ height: "60px" }}></img>
      <h1 className="me-3 mb-0">OTMOTO</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Szukaj po marce lub modelu..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ maxWidth: '300px' }}
      />
    </div>
  );
}

export default Navbar;