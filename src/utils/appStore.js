import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/slices/userSlice";
import moviesReducer from "./slices/moviesSlices"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer
    }
});

export default appStore