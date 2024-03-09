import React, { useEffect, useState } from "react";
import { ProductItem } from "../ProductItem";

const ProductItemList = () => {
  const [data, setData] = useState([]);

  const MemoizedProductItem = React.memo(ProductItem);

  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");

    response.ok; // => false
    response.status; // => 404

    const text = await response.json();
    setData(text);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul>
      {data.map((product) => (
        <MemoizedProductItem
          key={product.id}
          itemKey={product.id}
          product={product}
        />
      ))}
    </ul>
  );
};

export { ProductItemList };
