import React, {useEffect} from "react";
import ShimmerUI from "./ShimmerUI";
import NotFound from "./NotFound";
///need to dispatch a action from the ui
import {useDispatch, useSelector} from "react-redux";
//actions bhi import kerna hoga slice se
import {add} from "../store/slices/cartSlice";
import {fetchProducts} from "../store/slices/productSlice";
import { STATUSES } from "../store/slices/productSlice";


const Products = () => {
  const dispatch = useDispatch();
  //destructuring below and aliasing data as products
  const {data: Products, status} = useSelector((state) => state.product);

  useEffect(() => {
    //using the fetchProduct thunk for api calling
    dispatch(fetchProducts());
    // const fetchProds = async () => {
    //   // const res = await fetch("https://fakestoreapi.com/products");
    //   // const data = await res.json();
    //   // console.log(data);
    //   // setProducts(data);
    // };
    // fetchProds();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status=== STATUSES.LOADING) {
    return(<ShimmerUI/>)
  }

  if(status==STATUSES.ERROR){
    return (<NotFound/>)
  }

  return (
    <div className="productsWrapper">
      {Products.map((prod) => (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center" key={prod.id}>  
        <img className="rounded-t-lg mt-4" src={prod.image} alt="" />
        <h5 className="my-2 text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">{prod.title}</h5>
        <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">$ {prod.price}</p>
        <button
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-600 dark:focus:ring-blue-800"
          onClick={() => {
            handleAdd(prod);
          }}>
          Add to Cart
        </button>
      </div>
      ))}
    </div>
    
  );
};

export default Products;

