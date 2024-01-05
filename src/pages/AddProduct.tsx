import Form from "../components/Form";
import { useProducts } from "../context/ProductsContext";

function AddProduct() {
  const { formSubmit } = useProducts();

  return (
    <div className="add-product-page">
      <h1>Add New Product</h1>

      <Form onSubmit={(e) => formSubmit(e)} />
    </div>
  );
}

export default AddProduct;
