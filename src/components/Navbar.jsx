import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";



const Navbar = () => {
  console.log("Rendering:Navbar");

  const cartItems = useSelector((state) => state.cart); //this is like subscribing to the cart part of the store

  return (
    <div className="bg-gray-800 py-2 px-4 text-white">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">REDUX-THUNK-STORE</span>
        <div className="space-x-4">
          <Link className="text-2xl text-white hover:text-purple-700" to="/">
            Home
          </Link>
          <Link
            className="text-2xl text-white hover:text-purple-700"
            to="/cart">
            Cart
          </Link>
          <span className="text-xl text-white-400">Cart Items: {cartItems.length}</span>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
