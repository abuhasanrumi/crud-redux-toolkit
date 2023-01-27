import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

const store = configureStore({
    reducer: {
        userReducer: UserSlice
    }
})

export default store