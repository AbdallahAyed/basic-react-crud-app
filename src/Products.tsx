import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (product: ProductType) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        axios
          .delete(`http://localhost:3000/products/${product.id}`)
          .then((response) => {
            console.log(`Deleted post with ID ${product.id}`, response);
            getAllProducts();
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  return (
    <div className="products">
      <h1>Products Home</h1>

      <Link to={`/products/addn-product-page`}>
        {" "}
        <button className="add-product">Add new product</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product: ProductType) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title.slice(0, 12)}</td>
              <td>{product.price}</td>
              <td>{product.category.toUpperCase()}</td>
              <td>
                <Link to={`/products/${product.id}`}>
                  <button>View</button>
                </Link>
                <button>Edit</button>
                <button onClick={() => deleteProduct(product)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
