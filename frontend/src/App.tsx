import { response } from "express";
import React, { useEffect, useState } from "react";
import api from "./services/api";

import User from "./components/User";

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    // definimos que o que vier do api.get é do tipo IUser em forma de array
    api.get<IUser[]>("/users").then((response) => {
      return setUsers(response.data);
    });
  }, []);

  return (
    <div className="App">
      {users.map((user) => (
        <p> <User key={user.email} user={user} /> </p>
      ))}
    </div>
  );
}

export default App;
