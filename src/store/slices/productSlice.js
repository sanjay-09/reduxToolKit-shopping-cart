import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

//read-only enum, can be further used for loading-spinners n stuff
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    //donot do async calls inside from reducers, since they are pure fns-> no sideEffects
    // setProduct(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state,action){
    //     state.status=action.payload;
    // }
  },
  extraReducers: (builder)=>{
    builder 
      .addCase(fetchProducts.pending, (state,action)=>{
          state.status=STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state,action)=>{
        state.data=action.payload;
        state.status=STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state,action)=>{
        state.status=STATUSES.ERROR;
      })
  }
});

//named exports the actions
export const {setProduct,setStatus} = productSlice.actions;
export default productSlice.reducer;




//Thunks -> middleWare in redux
// it is a function-> returns a fucntion-> returns a promise

//normal thunk
// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();

//       dispatch(setProduct(data));
//       dispatch(setStatus(STATUSES.IDLE)); //success action dispatch krdo
//     } catch (error) {
//         console.log(error);
//         dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }


//toolkit thunk way

export const fetchProducts=createAsyncThunk('products/fetch', async ()=>{
  const res = await fetch("https://fakestoreapi.com/products");
   const data = await res.json();
   return data
})