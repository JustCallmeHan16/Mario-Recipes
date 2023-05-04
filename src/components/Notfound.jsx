import {
    Box,
    Icon,
    Text
} from '@chakra-ui/react'
import React from 'react'
import { BiBowlHot } from 'react-icons/bi'

const Notfound = () => {
    return (
        <Box as={'div'} className={'animate__animated animate__fadeIn'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'400px'}>
            <Box textAlign={'center'} color={'red.500'}>
                <Icon fontSize={'3xl'} as={BiBowlHot}/>
                <Text fontSize={'20px'} fontWeight={'medium'}>Recipe was not found</Text>
            </Box>
        </Box>
    )
}

export default Notfound