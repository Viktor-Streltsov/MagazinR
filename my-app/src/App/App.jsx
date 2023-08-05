import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import AppRoutes from '../component/Routes/Routes';
import Sidebar from '../component/Sidebar/Sidebar';
import { getCategories } from '../features/categories/categoriesSlise';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    },[dispatch]);

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
