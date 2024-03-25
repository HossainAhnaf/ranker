import { createSlice } from "@reduxjs/toolkit";

 const challengesSectionNavSlice = createSlice({
  name:"challengesSectionNav",
  initialState:{
    isChallengesSectionNavInvisible:false,
    isFilterOptionActive:false
  },
  reducers:{
    setIsChallengesSectionNavInvisible(state,action){
      state.isChallengesSectionNavInvisible = action.payload
    },
    showFilterOption(state){
      state.isFilterOptionActive = true
    },
   hideFilterOption(state){
     state.isFilterOptionActive = false
   }
  }

 })
 export const {showFilterOption,hideFilterOption} = challengesSectionNavSlice.actions
 export default challengesSectionNavSlice.reducer;