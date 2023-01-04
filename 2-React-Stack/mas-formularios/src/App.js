import React, { useState } from 'react';
import UserForm from './components/UserForm';
import Result from './components/Result';
import './App.css';


function App() {

  const [state, setState] = useState ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <div className="App">
      <UserForm inputs = {state} setInputs = {setState} />
      <Result data = {state}/>
    </div>
  );
}

export default App;
