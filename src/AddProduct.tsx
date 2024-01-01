import { useState } from "react";
import { ProductType } from "./Products";
import axios from "axios";
import Swal from "sweetalert2";

function AddProduct() {
  const [newProduct, setNewProduct] = useState<ProductType>({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/products", {
        id: newProduct.id,
        title: newProduct.title,
        price: newProduct.price,
        description: newProduct.description,
        category: newProduct.category,
        image: newProduct.image,
        rating: {
          rate: newProduct.rating.rate,
          count: newProduct.rating.count,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "New Product Added",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="add-product-page">
      <h1>Add New Product</h1>

      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          required
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        />
        <input
          type="number"
          name="id"
          placeholder="id"
          required
          onChange={(e) =>
            setNewProduct({ ...newProduct, id: Number(e.target.value) })
          }
        />
        <div className="rating">
          <input
            type="number"
            name="rate"
            placeholder="rate"
            required
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                rating: { ...newProduct.rating, rate: Number(e.target.value) },
              })
            }
            step=".01"
          />
          <input
            type="number"
            name="count"
            placeholder="count"
            required
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                rating: { ...newProduct.rating, count: Number(e.target.value) },
              })
            }
          />
        </div>
        <input
          type="number"
          name="price"
          placeholder="price"
          required
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: Number(e.target.value) })
          }
          step=".01"
        />
        <select
          className="form-select"
          required
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
        >
          <option value="men's-clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="women's-clothing">women's clothing</option>
        </select>
        <input
          type="text"
          name="image"
          placeholder="put image link here"
          required
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddProduct;
