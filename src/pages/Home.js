import React from "react";
import Products from "../components/Products";
const Home = () => {
  console.log("Rendering:Home");
  return (
    <div>
      <h3 className=" mb-2 mt-2 text-2xl">
        Welcome to Redux Thunk supported store!
      </h3>

      <section>
        <h3 className="mb-4 text-2xl ">
          <span className="dark:decoration-gray-600">Products</span>
        </h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
