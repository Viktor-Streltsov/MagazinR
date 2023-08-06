import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import AppRoutes from '../component/Routes/Routes';
import Sidebar from '../component/Sidebar/Sidebar';
import { getCategories } from '../features/categories/categoriesSlise';
import { getProducts } from '../features/products/products';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
    },[dispatch]);

  return (
    <div className="app">
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
