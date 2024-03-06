import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "./BlogSlice"

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
    reducer:{
        blogs: BlogReducer
    }
})