import React, { useState, useEffect } from 'react'
import Form from './components/Form';
import User from './components/User';

export default function App() {
  const [value, setValue] = useState(0);
  const [users, setUsers] = useState([]);

  const url = "https://api.github.com/users";
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);


  return (
    <>
      <h1 id="value">{value}</h1>
      <div className="btn-container">
        <button onClick={() => setValue(value + 1)}>Increase</button>
        <button onClick={() => setValue(0)}>Reset</button>
        <button onClick={() => setValue(value - 1)}>Decrease</button>
      </div>

      <div className="users">
        {users.map((user, index) => <User key={index} user={user} />)}
      </div>

      <Form />
    </>
  )
}
