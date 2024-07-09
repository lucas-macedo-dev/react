import React from "react";

const UserDetails = ({ name, age, job }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      { age >= 18 ? (<strong>Pode tirar habilitação!</strong> ) : (<strong>Não pode tirar habilitação!</strong>)}
    </div>
  );
};

export default UserDetails;
