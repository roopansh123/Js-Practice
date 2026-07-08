import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./components/Products";
import Filtered from "./components/Filtered";

const App = () => {
  const [products, setProducts] = useState([]);
  const [category, updateCategory] = useState("All");

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    }

    getProducts();
  }, []);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  console.log(categories);

  const filtered =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  console.log(filtered);
  return (
    <div>
      <Filtered
        categories={categories}
        category={category}
        updateCategory={updateCategory}
      />

      <Products products={filtered} />
    </div>
  );
};

export default App;
