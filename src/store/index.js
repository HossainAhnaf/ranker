import { configureStore } from "@reduxjs/toolkit";
//slices
import sideNavigationBarSlice from './slices/sideNavigationBarSlice'
import themeSlice from './slices/themeSlice'
import challengesSearchFormSlice from './slices/challengesSearchFormSlice'
const store = configureStore({
    reducer:{
        themeSlice,
        sideNavigationBarSlice,
        challengesSearchFormSlice
    }
})

export default store;