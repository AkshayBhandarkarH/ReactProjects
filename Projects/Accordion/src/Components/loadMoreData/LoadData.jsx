import React, { useEffect, useState } from "react";
import "./styles.css";

function LoadData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProduct() {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count * 20}`);
      const result = await response.json();
      if (result && result.products) {
        setProducts(result.products);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [count]);

  return (
    <div className="container">
      <div className="product-container">
        {products.length > 0 ? (
          products.map((item) => (
            <div key={item.id} className="product">
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
      <div className="btnContainer">
        <button onClick={() => setCount(count + 1)} disabled={loading}>
          Load More Products
        </button>
        <button onClick={() => setCount(count - 1)} disabled={loading || count === 0}>
          Load Previous Data
        </button>
      </div>
    </div>
  );
}

export default LoadData;
