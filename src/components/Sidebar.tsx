import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside>
      <Link
        to={"/"}
        style={{
          margin: "1rem",
          textDecoration: "none",
        }}
      >
        <p>Logo</p>
      </Link>
      <ul>
        <li>
          {" "}
          <Link
            to={"/products"}
            style={{
              margin: "1rem",
              textDecoration: "none",
            }}
          >
            Get All Products
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to={"/categories"}
            style={{
              margin: "1rem",
              textDecoration: "none",
            }}
          >
            Get All Categories
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
