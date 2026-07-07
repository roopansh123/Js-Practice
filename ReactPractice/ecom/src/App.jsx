import { useEffect, useState } from "react";
import Products from "./components/Products";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getproduct() {
      let response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products);
      setProducts(response.data.products);
    }
    getproduct();
  }, []);
  return (
    <div>
      <Products product={products} />
    </div>
  );
};

export default App;
