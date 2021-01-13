import React from 'react';
import './App.css';

// import Login from './containers/Login';
// import Button from './components/Button/Button';
// import Form from './containers/Form';
import Layout from './components/Layout/Layout';
import Header from './containers/Header/Header';


function App() {
   return (
    <div className="App"> 
       <Header />
       <Layout > 
               {/* <Login /> */}
        {/* <Form />  */}
        {/* <Button > Login */}
        {/* </Button>   */}

        </Layout>
   
        
    </div>
  );
}

export default App;
