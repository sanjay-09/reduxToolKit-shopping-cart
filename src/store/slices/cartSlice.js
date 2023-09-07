import {createSlice} from "@reduxjs/toolkit";

const initialState = [];
//creatSlice ki wageh se i am able to do state.push,but agr toolkit nahi hota to i would have copied then mutated
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state,action) {
        state.push(action.payload);
    },
    remove(state,action) {
      return state.filter((item)=>item.id!==action.payload);
    },
  },
});

//named exports the actions
export const {add,remove}=cartSlice.actions; 
export default cartSlice.reducer;