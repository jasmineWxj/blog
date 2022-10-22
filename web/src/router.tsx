import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
// const Find = lazy(() => import('../page/Find'));
const RouteConfigs = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    {/* <Route path='/:id' element={<Homeimg />}></Route> */}
                    {/* <Route path="/find" element={<Find />}></Route> */}
                    {/* <Route path="/vip" element={<Vip />}></Route> */}
                    {/* <Route path="/mine" element={<Mine />}></Route> */}
                </Routes>
            </Suspense>
        </div>
    );
};
export default RouteConfigs;
