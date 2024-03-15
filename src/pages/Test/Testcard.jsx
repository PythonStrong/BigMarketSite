import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'

export default function Testcard({ image, text }) {
    return (
        <Box display='flex' alignItems='center' flexDirection='column' userSelect='none' >
            <Img src={image} alt=""/>
            <Text color='white' fontWeight='600' fontSize='24px' className='testText'>{text}</Text>
        </Box>
    )
}
