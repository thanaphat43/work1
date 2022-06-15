import logo from './logo.svg';
import './work1.css';

import Haeder from './Components/Haeder';
import Content from './Components/Content';
import Footer from './Components/Footer';
import React from 'react';

function App() {
  return (
   <React.Fragment>
     <body>
       <Haeder/>
        <Content/>
        <Footer/>
        </body>
   </React.Fragment>

  );
}

export default App;
