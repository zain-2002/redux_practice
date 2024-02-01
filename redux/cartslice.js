'use client'

const { createSlice } = require("@reduxjs/toolkit")

const cartSlice=createSlice({
    name:"Number changer",
    initialState:0,
    reducers:{
        incre(state,action){
          return  state+action.payload;
        },
        decre(state,action){
         
            return  state>0 ? state-action.payload :state ;
          },
    }
})

export const {incre,decre}=cartSlice.actions;
export default cartSlice.reducer;