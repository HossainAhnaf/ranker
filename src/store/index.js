import { configureStore } from "@reduxjs/toolkit";
//slices
import userSlice from "./slices/userSlice";
import themeSlice from './slices/themeSlice'
import sideNavigationBarSlice from './slices/sideNavigationBarSlice'
import challengesSectionNavSlice from './slices/challengesSectionNavSlice'
const store = configureStore({
    reducer:{
        userSlice,
        themeSlice,
        sideNavigationBarSlice,
        challengesSectionNavSlice
    }
})

export default store;