import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/home'
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import RiderLogin from "./pages/RiderLogin";
import RiderSignup from "./pages/RiderSignup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<UserLogin/>}></Route>
        <Route path ='/signup' element={<UserSignup/>}></Route>
        <Route path ='/rider-login' element={<RiderLogin/>}></Route>
        <Route path ='/rider-signup' element={<RiderSignup/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
