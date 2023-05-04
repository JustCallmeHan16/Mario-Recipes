import {
    InputGroup,
    InputLeftElement,
    Input
} from '@chakra-ui/react'
import {GoSearch} from 'react-icons/go'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getMeals } from "../services/mealSlice";
import { useGetFoodieQuery } from '../api/mealApi';

const Search = () => {

    const [foods,setFoods] = useState([]);
    const [search,setSearch] = useState('');
    const dispatch = useDispatch()

    const {data} = useGetFoodieQuery('Seafood');

    useEffect(() => {
        const meals = data?.meals
        setFoods(meals)
    },[data])

    useEffect(() => {
        dispatch(getMeals(foods))
        const filterMeals = foods.filter(food => food.strMeal.toLowerCase().includes(search.toLocaleLowerCase()))
        dispatch(getMeals(filterMeals))
    },[search])

    return (
        <InputGroup width={'200px'}>
        <InputLeftElement
        pointerEvents='none'
        children={<GoSearch color='gray.300' />}
        />
        <Input value={search} onChange={(e) => setSearch(e.target.value)} focusBorderColor='black' bg={'white'} type='text' width={'200px'} placeholder='Recipe Name' />
    </InputGroup>
    )
}

export default Search