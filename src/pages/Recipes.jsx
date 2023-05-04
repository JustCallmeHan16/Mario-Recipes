import { useGetFoodieQuery } from "../api/mealApi"
import { useEffect } from "react";
import {
    Box,
    Flex
} from '@chakra-ui/react'
import Recard from "../components/Recard";
import Loader from "../components/Loader";
import 'animate.css';
import { useDispatch, useSelector } from "react-redux";
import { getMeals } from "../services/mealSlice";
import Notfound from "../components/Notfound";
import Search from "../components/Search";
import Navbar from "../components/Navbar";

const Recipes = () => {

    const meals = useSelector(state => state.meal.meals)
    const dispatch = useDispatch()
   
    const { data,isLoading } = useGetFoodieQuery('Seafood');

    useEffect(() => {
        const recipes = data?.meals
        dispatch(getMeals(recipes))
    },[data])
    
    return (
        <>
            <Navbar/>
            {
                isLoading?(
                    <Box as={'div'} className={'animate__animated animate__fadeIn'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'450px'}> 
                        <Loader/>
                    </Box>
                ) : 
                (
                    <>
                    <Box display={'flex'} justifyContent={'center'}>
                        <Search/>
                    </Box>
                    <Flex className={'animate__animated animate__fadeIn'} justifyContent={{ base : 'center',md : 'space-evenly' ,lg : 'space-evenly'}} my={'30px'} gap={"25px"} flexWrap={'wrap'}>
                    {
                        meals?.length > 0 ? meals?.map((meal) => <Recard key={meal.idMeal} meal={meal}/>) : (<Notfound/>)
                    }
                    </Flex>
                    </>
                )
            }
        </>
    )
}

export default Recipes