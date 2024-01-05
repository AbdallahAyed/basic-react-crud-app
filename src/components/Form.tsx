import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";

type MyFormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

function Form({ onSubmit }: MyFormProps) {
  const { newProduct, setNewProduct } = useProducts();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={(e) =>
          setNewProduct({ ...newProduct, title: e.target.value })
        }
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        onChange={(e) =>
          setNewProduct({ ...newProduct, description: e.target.value })
        }
      />
      <input
        type="number"
        name="id"
        placeholder="id"
        onChange={(e) =>
          setNewProduct({ ...newProduct, id: Number(e.target.value) })
        }
      />
      <div className="rating">
        <input
          type="number"
          name="rate"
          placeholder="rate"
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
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: Number(e.target.value) })
        }
        step=".01"
      />
      <select
        className="form-select"
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
        onChange={(e) =>
          setNewProduct({ ...newProduct, image: e.target.value })
        }
      />

      <input type="submit" value="Submit" onSubmit={() => navigate(-1)} />
    </form>
  );
}

export default Form;
