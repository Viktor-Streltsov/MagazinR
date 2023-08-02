import React from 'react';

import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import AppRoutes from '../component/Routes/Routes';
import Sidebar from '../component/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>

        <div className="container">
            <Sidebar/>
            <AppRoutes/>
        </div>

        <Footer/> 
    </div>
  );
}

export default App;
