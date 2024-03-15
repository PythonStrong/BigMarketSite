import { Box, Container, Img, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { calendar, car, engineering, group, screen, sifat, together } from '../../assets';
import { useRef } from 'react';
import './Test.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Testcard from './Testcard';

export default function Test() {
    return (
        <>
            <Navbar />
            <Box h='70vh' mt='50px' mb='50px' zIndex='-100' overflow='hidden'>
                <Box display='flex' alignItems='center' w='100%' justifyContent='space-between' px='100px' pos='absolute'>
                    <Box className="bg-shape1 bg-teal" opacity={'50'}></Box>
                    <Box className="bg-shape2 bg-primary" opacity={'50'} display={{ md: 'block', base: 'none' }}></Box>
                </Box>
                <Box bg='#0F072CFF' h='100%'  >
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{ background: 'transparent' }}>
                            <Testcard image={calendar} text={'Siz Istagan Kunda'} />
                        </SwiperSlide>
                        <SwiperSlide style={{ background: 'transparent' }}>
                            <Testcard image={group} text={'Jamoviy Ishlash'} />
                        </SwiperSlide>
                        <SwiperSlide style={{ background: 'transparent' }}>
                            <Testcard image={engineering} text={'Eng Yangi Texnalogiyalar'} />
                        </SwiperSlide>
                        <SwiperSlide style={{ background: 'transparent' }}>
                            <Testcard image={together} text={"Do'stlar Bilan Qiziqroq"} />
                        </SwiperSlide>
                        <SwiperSlide style={{ background: 'transparent' }}>
                            <Testcard image={screen} text={"Siz Yaxshi Mahnat"} />
                        </SwiperSlide>
                        <SwiperSlide style={{ background: 'transparent' }}>
                            <Testcard image={sifat} text={"Sifatli Ish"} />
                        </SwiperSlide>
                        <SwiperSlide style={{ background: 'transparent' }}>
                            <Testcard image={engineering} text={"Sifatli Ish"} />
                        </SwiperSlide>
                        <SwiperSlide style={{ background: 'transparent' }}>
                            <Testcard image={together} text={"Sifatli Ish"} />
                        </SwiperSlide>
                    </Swiper>
                </Box>
            </Box>
            <Footer />
        </>
    )
}
