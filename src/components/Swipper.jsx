import { Alert, Box, Button, Container, Img, Text, WrapItem } from '@chakra-ui/react'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { FaRegHeart } from "react-icons/fa6";
import { FaRegEye } from 'react-icons/fa';
import { FaStar } from "react-icons/fa";
import { bag, clothe, jostik, key, table, tv, voice } from '../assets';

export default function Swipper() {
    let time = new Date().toLocaleTimeString()
    const [ctime, setTime] = useState(time)
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString()
        setTime(time)
    }
    setInterval(UpdateTime)
    const [like, setLike] = useState(false)
    const [like1, setLike1] = useState(false)
    const [like2, setLike2] = useState(false)
    const [like3, setLike3] = useState(false)
    const [like4, setLike4] = useState(false)
    const [like5, setLike5] = useState(false)
    const [like6, setLike6] = useState(false)
    const [toast, setToast] = useState(false);

    const handleBuy = () => {
        setToast(true)
        setTimeout(() => {
            setToast(false)
        }, 2000);
    }



    return (
        <Container maxWidth='1460px'>
            <Box mt='110px'>
                <Box display='flex' alignItems='center' gap={3}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
                        <rect width="20" height="40" rx="4" fill="#DB4444" />
                    </svg>
                    <Text color='#DB4444' fontSize={16}> Today's</Text>
                </Box>

                <Box display='flex' alignItems='center' gap={20} mt={35}>
                    <Text color='#000' fontSize={{ md: '36px', base: '25px' }} fontWeight={500}>Flash Sales</Text>
                    <Text color='#000' fontSize={{ md: '32px', base: '25px' }} fontWeight={600}>{ctime}</Text>
                </Box>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    navigation={true}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Box>
                            <Box bg='#DBD7D2' padding={8} >
                                <Box display='flex' alignItems='start' justifyContent='space-between'>
                                    <Text bg='#DB4444' padding='4px 12px' width={20} borderRadius='8px' color='white'>-40%</Text>
                                    <Box display='flex' alignItems='center' flexDirection='column' gap={2}>
                                        <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike((prevLike) => !prevLike)}>{like ? '❤️' : <FaRegHeart />}</Text>
                                        <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                    </Box>
                                </Box>
                                <Img className='rotate' src={jostik} />
                                <Button className='wait' width={{ md: '247.5px', base: '266px' }} display='none' onClick={handleBuy}><span>Add Shop</span></Button>

                            </Box>
                            <Box display='flex' alignItems='start' justifyContent='start' flexDirection='column' mt={3}>
                                <Text color='#000' fontSize='16px' fontWeight={500}>HAVIT HV-G92 Gamepad</Text>
                                <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$120<Text color='#000' opacity='0.5' fontWeight={500} textDecoration='line-through'>$160</Text></Text>
                                <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(88)</Text></Box>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    {/* 2 */}
                    <SwiperSlide>
                        <Box>
                            <Box bg='#DBD7D2' padding={8} >
                                <Box display='flex' alignItems='start' justifyContent='space-between'>
                                    <Text bg='#DB4444' padding='4px 12px' width={20} borderRadius='8px' color='white'>-35%</Text>
                                    <Box display='flex' alignItems='center' flexDirection='column' gap={2}>
                                        <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike1((prevLike) => !prevLike)}>{like1 ? '❤️' : <FaRegHeart />}</Text>
                                        <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                    </Box>
                                </Box>
                                <Img className='rotate' src={key} />
                                <Button className='wait' width={{ md: '247.5px', base: '266px' }} display='none' onClick={handleBuy}><span>Add Shop</span></Button>
                            </Box>
                            <Box display='flex' alignItems='start' justifyContent='start' flexDirection='column' mt={3}>
                                <Text color='#000' fontSize='16px' fontWeight={500}>AK-900 Wired Keyboard</Text>
                                <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$960<Text color='#000' opacity='0.5' fontWeight={500} textDecoration='line-through'>$1160</Text></Text>
                                <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(75)</Text></Box>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    {/* 3 */}
                    <SwiperSlide>
                        <Box>
                            <Box bg='#DBD7D2' padding={8} >
                                <Box display='flex' alignItems='start' justifyContent='space-between'>
                                    <Text bg='#DB4444' padding='4px 12px' width={20} borderRadius='8px' color='white'>-30%</Text>
                                    <Box display='flex' alignItems='center' flexDirection='column' gap={2}>
                                        <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike2((prevLike) => !prevLike)}>{like2 ? '❤️' : <FaRegHeart />}</Text>
                                        <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                    </Box>
                                </Box>
                                <img className='rotate' src={tv} alt="" />
                                <Button className='wait' width={{ md: '247.5px', base: '266px' }} display='none' onClick={handleBuy}><span>Add Shop</span></Button>
                            </Box>
                            <Box display='flex' alignItems='start' justifyContent='start' flexDirection='column' mt={3}>
                                <Text color='#000' fontSize='16px' fontWeight={500}>IPS LCD Gaming Monitor</Text>
                                <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$370<Text color='#000' opacity='0.5' fontWeight={500} textDecoration='line-through'>$400</Text></Text>
                                <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(99)</Text></Box>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    {/* 4 */}
                    <SwiperSlide>
                        <Box>
                            <Box bg='#DBD7D2' padding={8} >
                                <Box display='flex' alignItems='start' justifyContent='space-between'>
                                    <Text bg='#DB4444' padding='4px 12px' width={20} borderRadius='8px' color='white'>-40%</Text>
                                    <Box display='flex' alignItems='center' flexDirection='column' gap={2}>
                                        <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike3((prevLike) => !prevLike)}>{like3 ? '❤️' : <FaRegHeart />}</Text>
                                        <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                    </Box>
                                </Box>
                                <img className='rotate' src={table} alt="" />
                                <Button className='wait' width={{ md: '247.5px', base: '266px' }} display='none' onClick={handleBuy}><span>Add Shop</span></Button>
                            </Box>
                            <Box display='flex' alignItems='start' justifyContent='start' flexDirection='column' mt={3}>
                                <Text color='#000' fontSize='16px' fontWeight={500}>S-Series Comfort Chair </Text>
                                <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$375<Text color='#000' opacity='0.5' fontWeight={500} textDecoration='line-through'>$400</Text></Text>
                                <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(88)</Text></Box>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    {/* 5 */}
                    <SwiperSlide>
                        <Box>
                            <Box bg='#DBD7D2' padding={8} >
                                <Box display='flex' alignItems='start' justifyContent='space-between'>
                                    <Text bg='#DB4444' padding='4px 12px' width={20} borderRadius='8px' color='white'>-40%</Text>
                                    <Box display='flex' alignItems='center' flexDirection='column' gap={2}>
                                        <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike4((prevLike) => !prevLike)}>{like4 ? '❤️' : <FaRegHeart />}</Text>
                                        <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                    </Box>
                                </Box>
                                <img className='rotate' src={bag} alt="" />
                                <Button className='wait' width={{ md: '247.5px', base: '266px' }} display='none' onClick={handleBuy}><span>Add Shop</span></Button>
                            </Box>
                            <Box display='flex' alignItems='start' justifyContent='start' flexDirection='column' mt={3}>
                                <Text color='#000' fontSize='16px' fontWeight={500}>HAVIT HV-G92 Gamepad</Text>
                                <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$120<Text color='#000' opacity='0.5' fontWeight={500} textDecoration='line-through'>$160</Text></Text>
                                <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(88)</Text></Box>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    {/* 6 */}
                    <SwiperSlide>
                        <Box>
                            <Box bg='#DBD7D2' padding={8} >
                                <Box display='flex' alignItems='start' justifyContent='space-between'>
                                    <Text bg='#DB4444' padding='4px 12px' width={20} borderRadius='8px' color='white'>-40%</Text>
                                    <Box display='flex' alignItems='center' flexDirection='column' gap={2}>
                                        <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike5((prevLike) => !prevLike)}>{like5 ? '❤️' : <FaRegHeart />} </Text>
                                        <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                    </Box>
                                </Box>
                                <img className='rotate' src={voice} alt="" />
                                <Button className='wait' width={{ md: '247.5px', base: '266px' }} display='none' onClick={handleBuy}><span>Add Shop</span></Button>
                            </Box>
                            <Box display='flex' alignItems='start' justifyContent='start' flexDirection='column' mt={3}>
                                <Text color='#000' fontSize='16px' fontWeight={500}>HAVIT HV-G92 Gamepad</Text>
                                <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$120<Text color='#000' opacity='0.5' fontWeight={500} textDecoration='line-through'>$160</Text></Text>
                                <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(88)</Text></Box>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    {/* 7 */}
                    <SwiperSlide>
                        <Box>
                            <Box bg='#DBD7D2' padding={8} >
                                <Box display='flex' alignItems='start' justifyContent='space-between'>
                                    <Text bg='#DB4444' padding='4px 12px' width={20} borderRadius='8px' color='white'>-40%</Text>
                                    <Box display='flex' alignItems='center' flexDirection='column' gap={2}>
                                        <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike6((prevLike) => !prevLike)}>{like6 ? '❤️' : <FaRegHeart />}</Text>
                                        <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                    </Box>
                                </Box>
                                <img className='rotate' src={clothe} alt="" />
                                <Button className='wait' width={{ md: '247.5px', base: '266px' }} display='none' onClick={handleBuy}><span>Add Shop</span></Button>
                            </Box>
                            <Box display='flex' alignItems='start' justifyContent='start' flexDirection='column' mt={3}>
                                <Text color='#000' fontSize='16px' fontWeight={500}>HAVIT HV-G92 Gamepad</Text>
                                <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$120<Text color='#000' opacity='0.5' fontWeight={500} textDecoration='line-through'>$160</Text></Text>
                                <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(88)</Text></Box>
                            </Box>
                        </Box>
                    </SwiperSlide>
                </Swiper>
                <center>
                    <Button bg='#DB4444' color='white' mt={30} padding='25px 48px'>View All Products</Button>
                </center>
            </Box>
            {toast && (<Alert sx={{ position: 'fixed', zIndex:'999' ,top: '0', right: '0', borderRadius: '8px', w: '400px', bg: '#2FF924', color: 'white' }}>
                This is a success alert — check it out!
            </Alert>)}
        </Container>
    )
}
