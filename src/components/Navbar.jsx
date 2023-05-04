import {
    Box,
    Flex,
    Heading,
    Image,
    Avatar,
    Popover,
    PopoverTrigger,
    PopoverCloseButton,
    PopoverContent,
    PopoverBody,
    PopoverHeader,
    PopoverArrow,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <Box bg={'gray.200'} shadow={'md'} my={'25px'} px={'40px'} py={'15px'} borderRadius={'10px'}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Link to={'/'}>
                    <Flex alignItems={'center'} gap={'10px'}>
                        <Image 
                        width={'35px'}
                        src='/mario-logo.png'/>
                        <Heading
                        fontSize={{
                            sm : '20px',
                            lg : '25px',
                            xl : '25px'
                        }}
                        fontWeight={'bold'}
                        color={'black'}
                        display={{
                            base : 'block',
                            sm : 'block',
                            md : 'block',
                            lg : 'block'
                        }}
                        >Mario's Recipes
                        </Heading>
                    </Flex>
                </Link>
                <Popover isLazy>
                    <PopoverTrigger>
                        <Avatar _hover={{cursor : 'pointer'}} border={'2px'} src='/mario.png' />
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverHeader color={'red.500'} fontWeight='medium'>Mario</PopoverHeader>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody color={'gray.500'}>
                        Hello I am Chef Mario & I'll
                        share my recipes for you...
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Flex>
        </Box>
    )
}

export default Navbar