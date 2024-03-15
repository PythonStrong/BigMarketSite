import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Img, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './about.css';
import { bik, dollar, emma, house, priz, smith, wom, xodim } from '../../assets/products'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaC } from 'react-icons/fa6';
import { car, ear, sec } from '../../assets';

export default function About() {
    return (
        <Box>
            <Navbar />
            <Breadcrumb ml={10}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/about'>About</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            {/* fro image and text  */}
            <Box display='flex' alignItems='center' justifyContent='space-around' flexDirection={{ md: 'inherit', base: 'column' }}>
                <Box display='flex' alignItems={'start'} justifyContent='start' ml={6} flexDirection='column' gap={10} mt={20}>
                    <Text color='#000' fontSize={{ md: '54px', base: '30px' }} fontWeight={600}>Our Story</Text>
                    <Text width={{ md: '525px', base: '300px' }} fontSize='16px' fontWeight={400}>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </Text>
                    <Text width={{ md: '505px', base: '300px' }} fontSize='16px' fontWeight={400}>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</Text>
                </Box>
                <Box ml={{ md: '200px', base: '0' }} mt={40}>
                    <img src={wom} alt="" />
                </Box>
            </Box>
            {/* fro cards  */}
            <Box display='flex' alignItems='center' justifyContent='space-around' mt={40} flexDirection={{ md: 'inherit', base: 'column' }} mb={110}>
                <Box display='flex' alignItems='center' justifyContent='space-around' w={'100%'} gap={{ md: '0', base: '20px' }}>
                    {/* 1 */}
                    <Box className='card' display='flex' alignItems='center' flexDirection='column' padding={{ md: 10, base: '8px' }} border='1px solid gray'>
                        <img src={house} alt="" />
                        <Text fontSize='32px' fontWeight={700}>10.5K</Text>
                        <Text>Sallers active our site</Text>
                    </Box>
                    {/* 2 */}
                    <Box className='card' display='flex' alignItems='center' flexDirection='column' padding={{ md: 10, base: '8px' }} border='1px solid gray'>
                        <img src={bik} alt="" />
                        <Text fontSize='32px' fontWeight={700}>33K</Text>
                        <Text>Sallers active our site</Text>
                    </Box>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-around' w={'100%'} gap={{ md: '0', base: '20px' }} mt={{ md: 0, base: '30px' }}>
                    {/* 3 */}
                    <Box className='card' display='flex' alignItems='center' flexDirection='column' padding={{ md: 10, base: '8px' }} border='1px solid gray'>
                        <img src={priz} alt="" />
                        <Text fontSize='32px' fontWeight={700}>45.5K</Text>
                        <Text>Sallers active our site</Text>
                    </Box>
                    {/* 4 */}
                    <Box className='card' display='flex' alignItems='center' flexDirection='column' padding={{ md: 10, base: '8px' }} border='1px solid gray'>
                        <img src={bik} alt="" />
                        <Text fontSize='32px' fontWeight={700}>25K</Text>
                        <Text>Sallers active our site</Text>
                    </Box>
                </Box>
            </Box>
            <Container maxWidth='1460px' mt={30} >
                <Box display='flex' alignItems='center' gap={5} mt='100px' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
                        <rect width="20" height="40" rx="4" fill="#DB4444" />
                    </svg>
                    <Text color='#DB4444' fontSize={{ md: '30px', base: '16px' }}> Bizning Xodimlar</Text>
                    <Text color='#DB4444' fontSize={{ md: '30px', base: '16px' }} className='rot'>🡺</Text>
                </Box>
            </Container>
            {/* for xodim  */}
            <div className="basicparent">
                <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {/* 1 */}
                    <SwiperSlide>
                        <div class="basic">
                            <div class="front">
                                <img class="img" src={xodim} />
                                <div class="contents">
                                    <h2 class="title">Tom Cruise</h2>
                                    <p class="tex">Web Developer</p>
                                </div>
                            </div>
                            <div class="back">
                                <div class="contents">
                                    <h3 class="subtitle">Web Developer</h3>
                                    <ul class="socials">
                                        <li>
                                            <a target="#" href="">
                                                <FaTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="#" href="">
                                                <FaLinkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="#" href="">
                                                <FaInstagram />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="#" href="">
                                                <FaFacebook />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* 2 */}
                    <SwiperSlide>
                        <div class="basic">
                            <div class="front">
                                <img class="img" src={emma} />
                                <div class="contents">
                                    <h2 class="title">Emma Watson</h2>
                                    <p class="tex">Managing Director</p>
                                </div>
                            </div>
                            <div class="back">
                                <div class="contents">
                                    <h3 class="subtitle">Managin Director</h3>
                                    <ul class="socials">
                                        <li>
                                            <a target="#" href="">
                                                <FaTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="#" href="">
                                                <FaLinkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="#" href="">
                                                <FaInstagram />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="#" href="">
                                                <FaFacebook />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div></SwiperSlide>
                    {/* 3 */}
                    <SwiperSlide>
                        <div class="basic">
                            <div class="front">
                                <img class="img" src={smith} />
                                <div class="contents">
                                    <h2 class="title">Will Smith</h2>
                                    <p class="tex">Product Designer</p>
                                </div>
                            </div>
                            <div class="back">
                                <div class="contents">
                                    <h3 class="subtitle">Product Designer</h3>
                                    <ul class="socials">
                                        <li>
                                            <a target="#" href="">
                                                <FaTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="#" href="">
                                                <FaLinkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="#" href="">
                                                <FaInstagram />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="#" href="">
                                                <FaFacebook />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* 4 */}
                    <SwiperSlide>
                        <div class="basic">
                            <div class="front">
                                <img class="img" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                <div class="contents">
                                    <h2 class="title">Emily Watson</h2>
                                    <p class="tex">Graphic Design</p>
                                </div>
                            </div>
                            <div class="back">
                                <div class="contents">
                                    <h3 class="subtitle">Graphic Design</h3>
                                    <ul class="socials">
                                        <li>
                                            <a target="#" href="">
                                                <FaTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="#" href="">
                                                <FaLinkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="#" href="">
                                                <FaInstagram />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="#" href="">
                                                <FaFacebook />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
            {/* for three image  */}
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


            <Footer />
        </Box>
    )
}
