import { configureStore } from '@reduxjs/toolkit'
import login from './slices/loginSlice'


export const store = configureStore({
    reducer:{
        login
    }
})