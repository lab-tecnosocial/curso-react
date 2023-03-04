import React from "react";

const Product = ({name,price,description,available}) => {
  return (
    <>
      <div>{name}</div>
      <div>{price}</div>
      <div>{description}</div>
      <h3>{available ? "Disponible" : "Agotado"}</h3>
    </>
  );
};

export default Product;
