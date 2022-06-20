import React, { useEffect, useState, useRef } from "react";

function ProductsData() {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const searchBoxRef = useRef(null);

  useEffect(async () => {
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProducts(data.products);
    //     setOriginalProducts(data.products);
    //   })
    //   .catch((error) => console.error(error));

    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      setOriginalProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    searchBoxRef?.current?.focus();
  }, [products]);

  const handleSearch = () => {
    // logic to search products
    const value = searchBoxRef.current.value;
    let filterProducts = [];
    if (value === "") {
      filterProducts = originalProducts;
    } else {
      filterProducts = originalProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(value.toLowerCase()) ||
          product.brand.toLowerCase().includes(value.toLowerCase()) ||
          product.category.toLowerCase().includes(value.toLowerCase())
      );
    }

    setProducts(filterProducts);
  };

  if (products.length === 0) {
    return <div>Fecthing Products....</div>;
  }

  return (
    <div>
      <input
        ref={searchBoxRef}
        placeholder="Search Here"
        style={{ margin: "8px" }}
      />
      <button onClick={handleSearch}>Search</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Brand</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsData;
