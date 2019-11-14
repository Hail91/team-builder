import React, {useState} from 'react';
import Form from './components/Form';
import TeamForm from './components/TeamForm';
import './App.css';

function App() {
  const [forms, setForms] = useState([{
    name: 'Aaron',
    email: 'warOnReact@VanillaJS.com',
    role: 'Front-End Engineer',
    age: '28'
  },
  {
    name: 'John',
    email: 'ReactGenius@DevTo.com',
    role: 'Front-End Engineer',
    age: '33'
  },
  {
    name: 'Sarah',
    email: 'SarahDev@gmail.com',
    role: 'Back-end Engineer',
    age: '24' 
  },
  {
    name: 'Eric',
    email: 'ReactGenius@DevTo.com',
    role: 'Front-End Engineer',
    age: '36'
  },
  {
    name: 'Andrew',
    email: 'LovesToSing@neverends.com',
    role: 'CSS Master',
    age: 'TBD'
  },
  {
    name: 'Andrew',
    email: 'I forgot',
    role: 'Jack of all trades',
    age: 'TBD'
  },
  {
    name: 'Kai',
    email: 'LovesRamen@gmail.com',
    role: 'secret genius',
    age: 'Younger than me'
  },
  {
    name: 'ShadowMan',
    email: '???',
    role: '???',
    age: '25'
  }
]);

  const addNewForm = form => {
    const newForm = {
      name: form.name,
      email: form.email,
      role: form.role,
      age: form.age
    };
    setForms([...forms, newForm]);
  };
  
  return (
  <div className="App">
    <h1>Our Team</h1>
    <TeamForm addNewForm={addNewForm} />
    <Form forms={forms} />
  </div>
  );
}

export default App;
