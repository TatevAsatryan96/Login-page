import React,{useState} from 'react';
import './App.css';
import Login from './components/Login';
import Button from './components/Button/Button';
import Form from './components/Form';


function App() {
  const[count,setCount]=useState(0);
  const[text,setText]=useState('');

 const increaseCount=()=>{
    setCount(count+1);
    console.log(count);

 
}
const onChange=(event)=>{
   setText(event.target.value);
   console.log(text);
 }
 

  return (
    <div className="App">

      {count}
      <Login  value={text} onChange={onChange} />
      <Form />
     <Button onClick={increaseCount}> Login
       </Button>
    </div>
  );
}

export default App;
