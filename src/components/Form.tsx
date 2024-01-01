import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";

function Form() {
  const { formSubmit, newProduct, setNewProduct } = useProducts();
  const navigate = useNavigate();

  return (
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

      <input type="submit" value="Submit" onClick={() => navigate(-1)} />
    </form>
  );
}

export default Form;
