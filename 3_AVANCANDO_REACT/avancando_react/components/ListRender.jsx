import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Lucas", "Pedro", "Matheus"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Lucas", age: 21 },
    { id: 2, name: "Pedro", age: 26 },
    { id: 3, name: "Matheus", age: 34 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Deletar um usuário</button>
    </div>
  );
};

export default ListRender;
