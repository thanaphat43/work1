import logo from './logo.svg';
import './work1.css';
import Haeder from './Components/Haeder';
import Content from './Components/Content';
import Footer from './Components/Footer';
import React from 'react';

function App() {
  return (
   <React.Fragment>
       <Haeder/>
        <Content/>
        <Footer/>
   </React.Fragment>

  );
}

export default App;
