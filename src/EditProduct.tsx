import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

import Form from "./components/Form";
import { useProducts } from "./context/ProductsContext";

function EditProduct() {
  const { newProduct } = useProducts();
  let { id } = useParams();

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/products/${id}`, {
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
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
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
    <div className="edit-page">
      <h1>Edit Product</h1>

      <Form onSubmit={(e) => formSubmit(e)} />
    </div>
  );
}

export default EditProduct;
