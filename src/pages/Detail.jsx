import {
    Badge,
    Box,
    Button,
    Flex, 
    Grid, 
    GridItem, 
    Heading,
    Img,
    Text
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleMealQuery } from '../api/mealApi'
import Loader from '../components/Loader'
import { BsYoutube } from 'react-icons/bs'
import Navbar from '../components/Navbar'

const Detail = () => {

    const [meal,setMeal] = useState([])
    const {id} = useParams()
    const { data,isLoading } =  useGetSingleMealQuery(id)

    useEffect(() => {
        setMeal(data?.meals)
    },[data])

    console.log(meal)

    return (
        <>
            <Navbar/>
        {
            isLoading? ( 
            <Box as={'div'} className={'animate__animated animate__fadeIn'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'450px'}> 
                <Loader/>
            </Box>
        ) :(
                meal?.map( detail => 
                    <Grid
                    className={'animate__animated animate__fadeIn'}
                    key={detail.idMeal}
                    gridTemplateColumns={'repeat(6,1fr)'}
                    gridGap={'15px'}
                    >
                        <GridItem colSpan={{base : 6, sm : 6, md : 6, lg : 6}}>
                            <Box display={'flex'} flexDirection={'column'} gap={'25px'} padding={'20px'}>
                                <Heading
                                color={'red.500'}
                                textTransform={'capitalize'}
                                fontSize={'30px'}
                                >{detail.strMeal}</Heading>
                                <Img width={'350px'} src={detail.strMealThumb}/>
                                <Box display={'flex'} gap={'5px'}>
                                    <Badge fontSize={'13px'} variant='outline' colorScheme={'blue'}>{detail.strCategory}</Badge>
                                    <Badge fontSize={'13px'} variant='solid' colorScheme={'green'}>{detail.strArea}</Badge>
                                </Box>
                                <Text
                                color={'gray.600'}
                                fontWeight={'medium'}
                                >{detail.strInstructions}</Text>
                                <Flex gap={'10px'}>
                                    <Link target={'_blank'} to={detail.strYoutube}>
                                        <Button size={'sm'} leftIcon={<BsYoutube fontSize={'25px'}/>} colorScheme={'red'}>Watch On Youtube</Button>
                                    </Link>
                                    <Link to={'/'}>
                                        <Button size={'sm'} variant={'ghost'} colorScheme={'green'}>Back To Home</Button>
                                    </Link>
                                </Flex>
                            </Box>
                        </GridItem>
                    </Grid>
                )
            )
        }
        </>
    )
}

export default Detail