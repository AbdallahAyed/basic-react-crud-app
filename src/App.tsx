import { Link } from "react-router-dom";

function App() {
  return (
    <div id="app">
      <div className="container">
        <aside>
          <Link
            to={"/"}
            style={{
              margin: "1rem",
              textDecoration: "none",
              color: "blue",
            }}
          >
            <p>Logo</p>
          </Link>
          <ul>
            <li>Get All Products</li>
            <li>Get All Categories</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default App;
