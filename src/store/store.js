import { configureStore } from "@reduxjs/toolkit";
import { mealApi } from "../api/mealApi";
import mealSlice from "../services/mealSlice";

export const store = configureStore({
    reducer : {
        [mealApi.reducerPath] : mealApi.reducer,
        meal : mealSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mealApi.middleware),
})

