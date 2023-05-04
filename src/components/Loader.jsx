import {
    Box,
    Image,
    Text
} from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <Box 
    textAlign={'center'} 
    display={'flex'}
    flexDirection={'column'}
    gap={'10px'}
    >
        <Image width={'100px'} src='/mario-run.gif'></Image>
        <Text>Loading...</Text>
    </Box>
  )
}

export default Loader