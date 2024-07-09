import React, { useState } from "react";
import "./App.css";
import UserDetails from "../components/UserDetails";

function App() {
  const users = [
    { id: 1, name: "Teste1", age: 19, job: "profissao_teste" },
    { id: 2, name: "Teste2", age: 17, job: "profissao_teste" },
    { id: 3, name: "Teste3", age: 39, job: "profissao_teste" },
  ];

  return (
    <div>
      <h1>Desafio Habilitação</h1>
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} age={user.age} job={user.job}/>
      ))}
    </div>
  );
}

export default App;
