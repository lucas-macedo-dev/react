import React from "react";
import "./MyComponent.css";

const MyComponent = () => {
  return (
    <div>
      <h1>CSS de componente</h1>
      <p>Este é o parágrafo do componente</p>
      <p className="my_comp_paragraph"> Esse também é do componente</p>
      <hr />
      <p style={{ color: "blue", padding: 25, borderTop: "2px solid red"}}> Elemento estilizado com css inline</p>
    </div>
  );
};

export default MyComponent;
