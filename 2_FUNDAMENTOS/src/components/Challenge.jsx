const Challenge = () => {
  const n1 = 10;
  const n2 = 20;

  const handleSoma = () => {
    console.log(n1 + n2);
  };

  return (
    <div>
      <h1>
        A soma de {n1} e {n2} é {n1 + n2}
      </h1>
      <button onClick={handleSoma}>Clique aqui para somar!</button>
    </div>
  );
};

export default Challenge;
