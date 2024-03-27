import { createSlice } from "@reduxjs/toolkit";

 const sideNavigationBarSlice = createSlice({
  name:"sideNavigationBar",
  initialState:{
    isActive:false,
    oldPageY:0
  },
  reducers:{
  
    showSideNavigationBar(state){
        state.isActive = true;
      },
      hideSideNavigationBar(state){
        state.isActive = false
      },
      sideNavigationBarAutoHideHandler(state){
        if (state.isActive && window.scrollY < (state.oldPageY - 150) || window.scrollY > (state.oldPageY + 150)) {
          state.isActive = false
          state.oldPageY = window.scrollY
        }
      }     
  }
 })
 export const {showSideNavigationBar,hideSideNavigationBar,sideNavigationBarAutoHideHandler} = sideNavigationBarSlice.actions
 export default sideNavigationBarSlice.reducer;