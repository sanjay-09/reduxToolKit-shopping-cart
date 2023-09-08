import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import {Provider} from "react-redux";
import store from "./store/store";
import Login from "./components/Login/Login";
import RequireUser from "./components/RequireUser";
import IfNotLoggedIn from "./components/IfNotLoggedIn";
import Signup from "./components/SignUp/Signup";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes >
            {/* <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/login" element={<Login/>}></Route> */}
            <Route element={<RequireUser/>}>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
           
   </Route>
   <Route element={<IfNotLoggedIn/>}>
          <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
