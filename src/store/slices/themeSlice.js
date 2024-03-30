import { createSlice } from "@reduxjs/toolkit";

const getAppTheme = ()=>{
   if (!localStorage.getItem('theme') === null) {
       
  const systemTheme = (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'theme-dark' : 'theme-light');
  localStorage.setItem('theme', systemTheme); 
  }
  return localStorage.getItem('theme')
}
       

 const themeSlice = createSlice({
  name:"theme",
  initialState:{
    theme:getAppTheme(),
  },
  reducers:{
    setTheme:(state,action)=>{
      state.theme = action.payload
      localStorage.setItem('theme',action.payload)
      
    }
  }

 })
 export const {setTheme} = themeSlice.actions
 export default themeSlice.reducer;