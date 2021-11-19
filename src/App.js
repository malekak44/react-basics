import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';
import Form from './components/Form';
import Users from './components/Users';
import ThemeProvider from './components/Context';
import Memo from './components/Memo';
import Reducer from './components/Reducer';
import Cleanup from './components/Cleanup';
import Callback from './components/Callback';
import Class from './components/Class';
import Redux from './components/Redux';

export default function App() {
  const [users, setUsers] = useState([]);

  const url = "https://api.github.com/users";
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <ThemeProvider>
      <Counter />
      <Users users={users} />
      <Form />
      <Memo />
      <Reducer />
      <Cleanup />
      <Callback />
      <Redux />
      <Class />
    </ThemeProvider>
  )
}