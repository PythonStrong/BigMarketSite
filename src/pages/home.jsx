import { Box, Container } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Hero from '../components/Hero'
import Swipper from '../components/Swipper'
import Maintop from '../components/Maintop'
import MarginBottom from '../components/MarginBottom'
import ScrollToTop from 'react-scroll-to-top'
import Footer from '../components/Footer'
import Loader from '../components/loader/Loader'


export default function Home() {
    const [loader, setLoader] = useState(true)
    setInterval(() => {
        setLoader(false)
    }, 3500);


    return (
        <>
            {loader ? <Loader /> :
                <Box>
                    <Navbar />
                    <Hero />
                    <Swipper />
                    <Category />
                    <Maintop />
                    <MarginBottom />
                    <Footer />
                    <ScrollToTop style={{ paddingLeft: '6px', borderRadius: '50px', }} smooth />
                </Box>
            }
        </>

    )
}
