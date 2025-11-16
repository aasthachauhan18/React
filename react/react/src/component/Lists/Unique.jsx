import React from "react";

function Unique() {
  const users = [
    {
      id: 1,
      name: "Aastha",
    },
    {
      id: 2,
      name: "Dev",
    },
    {
      id: 3,
      name: "Shivu",
    },
  ];
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Unique;
