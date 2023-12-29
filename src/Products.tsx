import axios from "axios";
import { useState, useEffect } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  operations: React.ReactNode;
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
  console.log(data);

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
          {data?.map((product: Product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title.slice(0, 12)}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.image} alt="img" />
              </td>
              <td>
                <button>View</button>
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
