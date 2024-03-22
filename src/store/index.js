import { configureStore } from "@reduxjs/toolkit";

//slices
import sideNavigationBarSlice from './slices/sideNavigationBarSlice'
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer:{
        user:userSlice,
        sideNavigationBar:sideNavigationBarSlice,
    }
})

export default store;