import React,{useState} from 'react';
import './App.css';
import Login from './containers/Login';
import Button from './components/Button/Button';
import Form from './containers/Form';


function App() {
 

  return (
    <div className="App">

     
      <Login />
      <Form />
     <Button > Login
       </Button>
    </div>
  );
}

export default App;
