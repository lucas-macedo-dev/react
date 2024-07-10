import { useState } from "react";
import "./App.css";
import MyForm from "../components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: "Lucas", email: "lucas@teste.com", bio: "Teste"}}></MyForm>
    </div>
  );
}

export default App;
