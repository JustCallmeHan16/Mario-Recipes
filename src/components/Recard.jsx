import React from 'react'
import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Recard = ({meal}) => {
    return (
        <>
        <Card maxW='250px'>
            <CardBody>
                <Image
                src={meal.strMealThumb}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='4'>
                <Heading noOfLines={'1'} size='md'>{meal.strMeal}</Heading>
                <Link style={{ margin : 'auto', marginTop : '10px'}} to={`/detail/${meal.idMeal}`}>
                    <Button variant='solid' colorScheme='red'>
                        Details
                    </Button>
                </Link>
                </Stack>
            </CardBody>
        </Card>
        </>
    )
}

export default Recard