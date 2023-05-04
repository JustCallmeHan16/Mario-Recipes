import { createSlice } from "@reduxjs/toolkit";

const mealSlice = createSlice({
    name : 'meal',
    initialState : {
        meals : []
    },
    reducers : {
        getMeals : (state,action) => {
            state.meals = action.payload
        },
    }
})

export const { getMeals } = mealSlice.actions
export default mealSlice.reducer