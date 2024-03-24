import { createSlice } from "@reduxjs/toolkit";

 const challengesSearchFormSlice = createSlice({
  name:"challengesSearchForm",
  initialState:{
    isFilterOptionActive:false
  },
  reducers:{
    showFilterOption(state){
      state.isFilterOptionActive = true
    },
   hideFilterOption(state){
     state.isFilterOptionActive = false
   }
  }

 })
 export const {showFilterOption,hideFilterOption} = challengesSearchFormSlice.actions
 export default challengesSearchFormSlice.reducer;