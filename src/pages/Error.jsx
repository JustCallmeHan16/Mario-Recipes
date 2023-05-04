import {
    Box,
    Button,
    Image,
    Text
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <Box className={'animate__animated animate__fadeIn'} minW={'100%'} justifyContent={'center'} alignItems={'center'} minH={'100vh'} display={'flex'}> 
            <Box textAlign={'center'} boxSize={'500px'}>
                <Text color={'yellow.400'} fontSize={'30px'} fontWeight={'bold'}>404 Not Found</Text>
                <Image src='/404-error.gif'/>
                <Link to={'/'}>
                    <Button variant={'ghost'} colorScheme={'green'}>Go Back To Home</Button>
                </Link>
            </Box>
        </Box>
    )
}

export default Error