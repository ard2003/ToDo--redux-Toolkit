import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './TodoSlice'

export  const store = configureStore({
    reducer:{
        tasks:taskReducer
    }
})