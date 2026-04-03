import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../Home/Home";
import {ROUTES} from "../../utils/routes";
import SingleProducts from "../Product/SingleProducts";
import Profile from "../Profile/Profile";
import SingleCategory from "../Categories/SingleCategory";
import Cart from "../Cart/Cart";
import Help from "../Help/Help";
import Terms from "../Terms/Terms";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path={ROUTES.PRODUCT} element={<SingleProducts />}/>
            <Route path={ROUTES.PROFILE} element={<Profile />}/>
            <Route path={ROUTES.CATEGORY} element={<SingleCategory />}/>
            <Route path={ROUTES.CARD} element={<Cart />}/>
            <Route path={ROUTES.HELP} element={<Help />}/>
            <Route path={ROUTES.TERMS} element={<Terms />}/>
        </Routes>
    )
}

export default AppRoutes