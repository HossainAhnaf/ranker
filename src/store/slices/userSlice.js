//modules
import { createSlice } from "@reduxjs/toolkit";
//fake data
import {singleUser} from '../../data/usersData.json'
 
 function fetchUserData(username){
    const data = singleUser[username]
  return data   
} 

 const userSlice = createSlice({    
  name:"user",
  initialState:fetchUserData('MdHossainAhnafOvi'),
  reducers:{

  }

 })
 export const {} = userSlice.actions
 export default userSlice.reducer;