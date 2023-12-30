import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

function Products() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="products">
      <h1>Products Home</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product: ProductType) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title.slice(0, 12)}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.image} alt="img" />
              </td>
              <td>
                <Link to={`/products/${product.id}`}>
                  <button>View</button>
                </Link>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
