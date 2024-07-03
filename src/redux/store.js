import { configureStore } from "@reduxjs/toolkit";
import categories from './slices/categoriesSlice'

export const store = configureStore({
    reducer:{
        categories: categories
    }
})