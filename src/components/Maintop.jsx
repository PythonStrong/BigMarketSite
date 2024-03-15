import { Alert, Box, Button, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { speaker } from '../assets'
import { IoPhonePortraitOutline, IoGameControllerOutline } from "react-icons/io5";
import { IoIosLaptop } from "react-icons/io";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import { bag, clothe, jostik, table, voice } from '../assets';
import { FaRegEye, FaRegHeart, FaStar } from 'react-icons/fa6';
import { Navigation, Pagination } from 'swiper/modules';
import { camera, cap, check, dog, game, laptop } from '../assets/products';


export default function Maintop() {
    const data = new Date()
    let day = data.getDay()
    let hour = data.getHours()
    let minute = data.getMinutes()
    let second = data.getSeconds()

    const [like1, setLike1] = useState(false)
    const [like2, setLike2] = useState(false)
    const [like3, setLike3] = useState(false)
    const [like4, setLike4] = useState(false)
    const [like5, setLike5] = useState(false)
    const [like6, setLike6] = useState(false)
    const [like7, setLike7] = useState(false)
    const [like8, setLike8] = useState(false)
    const [toast, setToast] = useState(false);



    const handleBuy = () => {
        setToast(true)
        setTimeout(() => {
            setToast(false)
        }, 2000);
    }
    return (
        <Box>
            {/* fro sepaker  */}
            <Box minH='85vh' mt={20} Width='100%' display='flex' alignItems='center' justifyContent='space-around' flexDirection={{ md: 'inherit', base: 'column-reverse' }} bg='#000' padding={10}>
                <Box display='flex' alignItems='start' justifyContent='start' flexDirection='column' gap='40px'>
                    <Text color='#0F6' fontSize='20px' fontWeight='500'>Categories</Text>
                    <Text fontSize={{ md: '48px', base: '20px' }} color='white'>Enhance Your Music <br /> Experience</Text>
                    <Box display='flex' alignItems='center' justifyContent='center' gap={10}>
                        <Text display='flex' alignItems='center' flexDirection='column' bg='white' borderRadius={'500px'} padding={{ md: '10px', base: '10px' }} fontWeight={700} fontSize={{ md: '16px', base: '15px' }} userSelect='none'>{day} <Text fontWeight={300} >Days</Text></Text>
                        <Text display='flex' alignItems='center' flexDirection='column' bg='white' borderRadius={'500px'} padding={{ md: '10px', base: '10px' }} fontWeight={700} fontSize={{ md: '16px', base: '15px' }} userSelect='none'>{hour} <Text fontWeight={300} >Hours</Text></Text>
                        <Text display='flex' alignItems='center' flexDirection='column' bg='white' borderRadius={'500px'} padding={{ md: '10px', base: '10px' }} fontWeight={700} fontSize={{ md: '16px', base: '15px' }} userSelect='none'>{minute}<Text fontWeight={300} >Minute</Text></Text>
                        <Text display='flex' alignItems='center' flexDirection='column' bg='white' borderRadius={'500px'} padding={{ md: '10px', base: '10px' }} fontWeight={700} fontSize={{ md: '16px', base: '15px' }} userSelect='none'>{second} <Text fontWeight={300} >Second</Text></Text>
                    </Box>
                    <Button bg='#0F6' padding='30px 48px' color='white'>Buy Now!</Button>
                </Box>
                <Box >
                    <img src={speaker} alt="" />
                </Box>
            </Box>
            {/* for category products  */}
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
                    1024: {
                        slidesPerView: 4,
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
                    <Box mt={50}>
                        <Box bg='#989898' padding={5} >
                            <Box display='flex' alignItems='center' justifyContent='end'>
                                <Box display='flex' alignItems='end' flexDirection='column' gap={2}>
                                    <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike1((prevLike) => !prevLike)}>{like1 ? '❤️' : <FaRegHeart />}</Text>
                                    <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                </Box>
                            </Box>
                            <img className='rotate' src={dog} alt="" />
                            <Button className='wait' width={{ md: '244.5px', base: '245.5px' }} ml={2.5} display='none' onClick={handleBuy}><span>Add Shop</span></Button>
                        </Box>
                        <Text color='#000' fontSize='16px' fontWeight={500} mt={6}>Breed Dry Dog Food</Text>
                        <Box display='flex' alignItems='center' justifyContent='space-between' mt={6}>
                            <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$100</Text>
                            <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                            <Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(35)</Text>
                        </Box>
                    </Box>
                </SwiperSlide>
                {/* 2 */}
                <SwiperSlide >
                    <Box mt={50}>
                        <Box bg='#989898' padding={5} >
                            <Box display='flex' alignItems='center' justifyContent='end'>
                                <Box display='flex' alignItems='end' flexDirection='column' gap={2}>
                                    <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike2((prevLike) => !prevLike)}>{like2 ? '❤️' : <FaRegHeart />}</Text>
                                    <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                </Box>
                            </Box>
                            <img className='rotate' src={camera} alt="" />
                            <Button className='wait' ml={2.5} width={{ md: '244.5px', base: '245.5px' }} display='none' onClick={handleBuy}><span>Add Shop</span></Button>
                        </Box>
                        <Text color='#000' fontSize='16px' fontWeight={500} mt={6}>CANON EOS DSLR Camera</Text>
                        <Box display='flex' alignItems='center' justifyContent='space-between' mt={6}>
                            <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$360</Text>
                            <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                            <Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(95)</Text>
                        </Box>
                    </Box>
                </SwiperSlide>
                {/* 3 */}
                <SwiperSlide>
                    <Box mt={50}>
                        <Box bg='#989898' padding={5} >
                            <Box display='flex' alignItems='center' justifyContent='end'>
                                <Box display='flex' alignItems='end' flexDirection='column' gap={2}>
                                    <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike3((prevLike) => !prevLike)}>{like3 ? '❤️' : <FaRegHeart />}</Text>
                                    <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                </Box>
                            </Box>
                            <img className='rotate' src={laptop} alt="" />
                            <Button className='wait' ml={2.5} width={{ md: '244.5px', base: '245.5px' }} display='none' onClick={handleBuy}><span>Add Shop</span></Button>
                        </Box>
                        <Text color='#000' fontSize='16px' fontWeight={500} mt={6}>ASUS FHD Gaming Laptop</Text>
                        <Box display='flex' alignItems='center' justifyContent='space-between' mt={6}>
                            <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$700</Text>
                            <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                            <Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(325)</Text>
                        </Box>
                    </Box>
                </SwiperSlide>
                {/* 4 */}
                <SwiperSlide>
                    <Box mt={50}>
                        <Box bg='#989898' padding={5} >
                            <Box display='flex' alignItems='center' justifyContent='end'>
                                <Box display='flex' alignItems='end' flexDirection='column' gap={2}>
                                    <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike4((prevLike) => !prevLike)}>{like4 ? '❤️' : <FaRegHeart />}</Text>
                                    <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                </Box>
                            </Box>
                            <img className='rotate' src={table} alt="" />
                            <Button className='wait' ml={2.5} width={{ md: '244.5px', base: '245.5px' }} display='none' onClick={handleBuy}><span>Add Shop</span></Button>
                        </Box>
                        <Text color='#000' fontSize='16px' fontWeight={500} mt={6}>Curology Product Set </Text>
                        <Box display='flex' alignItems='center' justifyContent='space-between' mt={6}>
                            <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$500</Text>
                            <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                            <Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(145)</Text>
                        </Box>
                    </Box>
                </SwiperSlide>
            </Swiper>
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
                    1024: {
                        slidesPerView: 4,
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
                    <Box mt={70}>
                        <Box bg='#989898' padding={5} >
                            <Box display='flex' alignItems='start' justifyContent='space-between'>
                                <Text bg='#00FF66' padding='4px 12px' width={20} borderRadius='8px' color='white'>New</Text>
                                <Box display='flex' alignItems='center' flexDirection='column' gap={2}>
                                    <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike5((prevLike) => !prevLike)}>{like5 ? '❤️' : <FaRegHeart />}</Text>
                                    <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                </Box>
                            </Box>
                            <img className='rotate' src={cap} alt="" />
                            <Button className='wait' ml={2.5} width={{ md: '244.5px', base: '245.5px' }} display='none' onClick={handleBuy}><span>Add Shop</span></Button>
                        </Box>
                        <Text color='#000' fontSize='16px' fontWeight={500} mt={6}>Curology Product Set </Text>
                        <Box display='flex' alignItems='center' justifyContent='space-between' mt={6}>
                            <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$500</Text>
                            <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                            <Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(145)</Text>
                        </Box>
                        <RadioGroup defaultValue='1'>
                            <Stack spacing={2} direction='row'>
                                <Radio value='2' bg='orange'></Radio>
                                <Radio value='3' bg='red'></Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </SwiperSlide>
                {/* 2 */}
                <SwiperSlide>
                    <Box mt={70}>
                        <Box bg='#989898' padding={5} >
                            <Box display='flex' alignItems='center' justifyContent='end'>
                                <Box display='flex' alignItems='end' flexDirection='column' gap={2}>
                                    <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike6((prevLike) => !prevLike)}>{like6 ? '❤️' : <FaRegHeart />}</Text>
                                    <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                </Box>
                            </Box>
                            <img className='rotate' src={check} alt="" />
                            <Button className='wait' ml={2.5} width={{ md: '244.5px', base: '245.5px' }} display='none' onClick={handleBuy}><span>Add Shop</span></Button>
                        </Box>
                        <Text color='#000' fontSize='16px' fontWeight={500} mt={6}>Curology Product Set </Text>
                        <Box display='flex' alignItems='center' justifyContent='space-between' mt={6}>
                            <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$500</Text>
                            <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                            <Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(145)</Text>
                        </Box>
                        <RadioGroup defaultValue='1'>
                            <Stack spacing={2} direction='row'>
                                <Radio value='2' bg='yellow'></Radio>
                                <Radio value='3' bg='black'></Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </SwiperSlide>
                {/* 3 */}
                <SwiperSlide>
                    <Box mt={70}>
                        <Box bg='#989898' padding={5} >
                            <Box display='flex' alignItems='start' justifyContent='space-between'>
                                <Text bg='#00FF66' padding='4px 12px' width={20} borderRadius='8px' color='white'>New</Text>
                                <Box display='flex' alignItems='center' flexDirection='column' gap={2}>
                                    <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike7((prevLike) => !prevLike)}>{like7 ? '❤️' : <FaRegHeart />}</Text>
                                    <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                </Box>
                            </Box>
                            <img className='rotate' src={game} alt="" />
                            <Button className='wait' ml={2.5} width={{ md: '244.5px', base: '245.5px' }} display='none' onClick={handleBuy}><span>Add Shop</span></Button>
                        </Box>
                        <Text color='#000' fontSize='16px' fontWeight={500} mt={6}>GP11 Shooter USB Gamedpad</Text>
                        <Box display='flex' alignItems='center' justifyContent='space-between' mt={6}>
                            <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$660</Text>
                            <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                            <Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(55)</Text>
                        </Box>
                        <RadioGroup defaultValue='1'>
                            <Stack spacing={2} direction='row'>
                                <Radio value='3' bg='black'></Radio>
                                <Radio value='2' bg='red'></Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </SwiperSlide>
                {/* 4 */}
                <SwiperSlide>
                    <Box mt={70}>
                        <Box bg='#989898' padding={5} >
                            <Box display='flex' alignItems='center' justifyContent='end'>
                                <Box display='flex' alignItems='end' flexDirection='column' gap={2}>
                                    <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike8((prevLike) => !prevLike)}>{like8 ? '❤️' : <FaRegHeart />}</Text>
                                    <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                </Box>
                            </Box>
                            <img className='rotate' src={clothe} alt="" />
                            <Button className='wait' ml={2.5} width={{ md: '244.5px', base: '245.5px' }} display='none' onClick={handleBuy}><span>Add Shop</span></Button>
                        </Box>
                        <Text color='#000' fontSize='16px' fontWeight={500} mt={6}>Quilted Satin Jacket</Text>
                        <Box display='flex' alignItems='center' justifyContent='space-between' mt={6}>
                            <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$600</Text>
                            <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                            <Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(55)</Text>
                        </Box>
                        <RadioGroup defaultValue='1'>
                            <Stack spacing={2} direction='row'>
                                <Radio value='2' bg='red'></Radio>
                                <Radio value='3' bg='black'></Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </SwiperSlide>
            </Swiper>
            <center>
                <Button bg='#DB4444' color='white' mt={30} padding='25px 48px'>View All Products</Button>
            </center>
            {toast && (<Alert sx={{ position: 'fixed', zIndex:'999' ,top: '0', right: '0', borderRadius: '8px', w: '400px', bg: '#2FF924', color: 'white' }}>
                This is a success alert — check it out!
            </Alert>)}
        </Box>
    )
}
