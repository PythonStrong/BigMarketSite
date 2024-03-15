import { Box, Button, Container, Input, Stack, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MdArrowForwardIos } from "react-icons/md";
import { phone } from '../assets';

export default function Hero() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1200)}s`;
  };
  return (
    <Container maxWidth='1460px'>
      <Box display='flex'>
        <Box width={'300px'} height='100%' position='sticky' borderRight={{ md: '1px solid black', base: 'none' }}>
          <Box display={{ md: 'flex', base: 'none' }} alignItems='start' gap={4} flexDirection='column' pt={20}>
            <Text display='flex' alignItems='center' justifyContent='center' gap={10} cursor='pointer' className='text'>Woman’s Fashion <MdArrowForwardIos /> </Text>
            <Text display='flex' alignItems='center' justifyContent='center' gap={10} cursor='pointer' className='text'>Men's Fashion <MdArrowForwardIos /> </Text>
            <Text cursor='pointer' className='text'>Electronics</Text>
            <Text cursor='pointer' className='text'>Home & Lifestyle</Text>
            <Text cursor='pointer' className='text'>Medicine</Text>
            <Text cursor='pointer' className='text'>Sports & Outdoor</Text>
            <Text cursor='pointer' className='text'>Baby's & Toys</Text>
            <Text cursor='pointer' className='text'>Groceries & Pets</Text>
            <Text cursor='pointer' className='text'>Health & Beauty</Text>
          </Box>


        </Box>
        <Box w={{ md: '80%', base: '100%' }} h={{ base: '450px', md: '' }}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="swip"
          >
            <SwiperSlide><img src={phone} alt="" /></SwiperSlide>
            <SwiperSlide><img src={phone} alt="" /></SwiperSlide>
            <SwiperSlide><img src={phone} alt="" /></SwiperSlide>
            <SwiperSlide><img src={phone} alt="" /></SwiperSlide>
            <SwiperSlide><img src={phone} alt="" /></SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </Box>
      </Box>
    </Container>
  )
}
