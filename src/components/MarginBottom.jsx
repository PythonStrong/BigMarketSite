import { Box, Container, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { car, ear, gucci, playst, sec, speak, woman } from '../assets'

export default function MarginBottom() {
    return (
        <Box mb={100}>
            <Container maxWidth='1460px'>
                <Box display='flex' alignItems='center' gap={5} mt={70} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
                        <rect width="20" height="40" rx="4" fill="#DB4444" />
                    </svg>
                    <Text color='#DB4444' fontSize={16} > Categories</Text>
                </Box>
                <Text fontSize='36px' color='#000' fontWeight={600} mb={30}>New Arrival</Text>
            </Container>
            {/* for images  */}
            <Box display='flex' alignItems='center' justifyContent='center' flexDirection={{ md: 'inherit', base: 'column' }} gap={10}>
                <Box>
                    <img className='image' src={playst} alt="" />
                </Box>
                <Box>
                    <Box>
                        <img className='image' src={woman} alt="" />
                    </Box>
                    <Box display='flex' alignItems='center' flexDirection={{ md: 'inherit', base: 'column' }} gap={10} mt={8}>
                        <img className='image' src={speak} alt="" />
                        <img className='image' src={gucci} alt="" />
                    </Box>
                </Box>
            </Box>
            <Box display='flex' alignItems='center' justifyContent='space-around' flexDirection={{ md: 'inherit', base: 'column' }} gap={{ md: '0', base: '60px' }} mt={100} minHeight='30vh'>
                <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap={3}>
                    <Img src={car} />
                    <Text color='#000' fontSize='25px' fontWeight={600}>FREE AND FAST DELIVERY</Text>
                    <Text color='#000' fontWeight='400' fontSize='16px'>Free delivery for all orders over $140</Text>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap={3}>
                    <Img src={ear} />
                    <Text color='#000' fontSize='25px' fontWeight={600}>24/7 CUSTOMER SERVICE</Text>
                    <Text color='#000' fontWeight='400' fontSize='16px'>Friendly 24/7 customer support</Text>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap={3}>
                    <Img src={sec} />
                    <Text color='#000' fontSize='25px' fontWeight={600}>MONEY BACK GUARANTEE</Text>
                    <Text color='#000' fontWeight='400' fontSize='16px'>We reurn money within 30 days</Text>
                </Box>
            </Box>
        </Box>
    )
}
