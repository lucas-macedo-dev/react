import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Product = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  console.log(product);
  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>R$ {product.price}</p>
        </div>
      )}
    </>
  );
};

export default Product;
