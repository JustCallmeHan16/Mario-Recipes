import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealApi = createApi({
    reducerPath : 'mealApi',
    baseQuery : fetchBaseQuery({ baseUrl : 'https://www.themealdb.com/api/json/v1/1'}),
    endpoints : (builder) => ({
        getFoodie : builder.query({
            query : (name) => `/filter.php?c=${name}`
        }),
        getSingleMeal : builder.query({
            query : (id) => `/lookup.php?i=${id}`
        }),
    })
})

export const { useGetFoodieQuery,useGetSingleMealQuery } = mealApi