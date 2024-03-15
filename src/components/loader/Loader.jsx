import React from 'react'
import './Loader.css'
import { Box } from '@chakra-ui/react'

export default function Loader() {
    return (
        <Box minHeight='100vh' bg='black' pt={250}>
            <center>
                <div class="loader">Loading
                    <span></span>
                </div>
            </center>
        </Box>
    )
}
