import { configureStore } from "@reduxjs/toolkit";
//slices
import sideNavigationBarSlice from './slices/sideNavigationBarSlice'
import themeSlice from './slices/themeSlice'
import challengesSectionNavSlice from './slices/challengesSectionNavSlice'
const store = configureStore({
    reducer:{
        themeSlice,
        sideNavigationBarSlice,
        challengesSectionNavSlice
    }
})

export default store;