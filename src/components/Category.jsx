import { Alert, Box, Button, Container, Tab, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoPhonePortraitOutline, IoGameControllerOutline } from "react-icons/io5";
import { IoIosLaptop } from "react-icons/io";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import { bag, clothe, jostik, table, voice } from '../assets';
import { FaRegEye, FaRegHeart, FaStar } from 'react-icons/fa6';
import { Navigation, Pagination } from 'swiper/modules';


export default function Category() {
    const [like1, setLike1] = useState(false)
    const [like2, setLike2] = useState(false)
    const [like3, setLike3] = useState(false)
    const [like4, setLike4] = useState(false)
    const [toast, setToast] = useState(false);



    const handleBuy = () => {
        setToast(true)
        setTimeout(() => {
            setToast(false)
        }, 2000);
    }
    return (
        <Container maxWidth='1460px'>
            <Box >
                <Box display='flex' alignItems='center' gap={5} mt='100px' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
                        <rect width="20" height="40" rx="4" fill="#DB4444" />
                    </svg>
                    <Text color='#DB4444' fontSize={16}> Categories</Text>
                </Box>
                <Box>
                    <Text fontSize='36px' color='#000' fontWeight={500} mb={50}>Browse By Category</Text>
                </Box>
                {/* category  */}
                <Box display='flex' alignItems='center' justifyContent='space-evenly' flexDirection={{ md: 'inherit', base: 'column' }} gap={{ md: 'none', base: '20px' }} borderBottom='1px solid black' pb={100}>
                    <Box display='flex' alignItems='center' justifyContent='center' gap={14}>
                        {/* 1 */}
                        <Box className='card' display='flex' cursor='pointer' alignItems='center' flexDirection='column' gap={4} border='1px solid gray' width='160px' height='145px' padding='25px 56px 24px 55px'>
                            <IoPhonePortraitOutline className='icon' size={50} />
                            <Text className='icon' fontSize='16px'>Phones</Text>
                        </Box>
                        {/* 2 */}
                        <Box className='card' display='flex' cursor='pointer' alignItems='center' flexDirection='column' gap={4} border='1px solid gray' width='160px' height='145px' padding='25px 56px 24px 55px'>
                            <IoIosLaptop className='icon' size={50} />
                            <Text className='icon' fontSize='16px'>Computers</Text>
                        </Box>
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent='center' gap={14}>
                        {/* 3 */}
                        <Box className='card' display='flex' cursor='pointer' alignItems='center' flexDirection='column' gap={4} border='1px solid gray' width='160px' height='145px' padding='25px 56px 24px 55px'>
                            <BsSmartwatch className='icon' size={50} />
                            <Text className='icon' fontSize='16px'>SmartWatch</Text>
                        </Box>
                        {/* 4 */}
                        <Box className='card' display='flex' cursor='pointer' alignItems='center' flexDirection='column' gap={4} border='1px solid gray' width='160px' height='145px' padding='25px 56px 24px 55px'>
                            <CiCamera className='icon' size={50} />
                            <Text className='icon' fontSize='16px'>Camera</Text>
                        </Box>
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent='center' gap={14}>
                        {/* 5 */}
                        <Box className='card' display='flex' cursor='pointer' alignItems='center' flexDirection='column' gap={4} border='1px solid gray' width='160px' height='145px' padding='25px 56px 24px 55px'>
                            <CiHeadphones className='icon' size={50} />
                            <Text className='icon' fontSize='16px'>HeadPhones</Text>
                        </Box>
                        {/* 6 */}
                        <Box className='card' display='flex' cursor='pointer' alignItems='center' flexDirection='column' gap={4} border='1px solid gray' width='160px' height='145px' padding='25px 56px 24px 55px'>
                            <IoGameControllerOutline className='icon' size={50} />
                            <Text className='icon' fontSize='16px'>Gaming</Text>
                        </Box>
                    </Box>
                </Box>


                <Box>
                    <Box>
                        <Box mt={70} >
                            <Box display='flex' alignItems='center' gap={5} > <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
                                <rect width="20" height="40" rx="4" fill="#DB4444" />
                            </svg> <Text color='#DB4444' fontSize={16} > This Month</Text></Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between'>
                            <Text fontSize='36px' color='#000' fontWeight={600}>Best Selling Products</Text>
                            <Button bg='#DB4444' color='white' padding='25px 48px'>View All </Button>
                        </Box>
                    </Box>

                    {/* for selling produts  */}
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
                        className="sw"
                    >
                        <SwiperSlide>
                            <Box mt='5px'>
                                <Box bg='#989898' padding={5} >
                                    <Box display='flex' alignItems='center' justifyContent='end'>
                                        <Box display='flex' alignItems='end' flexDirection='column' gap={2}>
                                            <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike1((prevLike) => !prevLike)}>{like1 ? '❤️' : <FaRegHeart />}</Text>
                                            <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                        </Box>
                                    </Box>
                                    <img className='rotate' src={clothe} alt="" />
                                    <Button className='wait' display='none' ml={2.5} width={{ md: '244.5px', base: '245.5px' }} onClick={handleBuy}><span>Add Shop</span></Button>
                                </Box>
                                <Box>
                                    <Text color='#000' fontSize='16px' fontWeight={500} mt={5}>HAVIT HV-G92 Gamepad</Text>
                                    <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$120<Text color='#000' opacity='0.5' fontWeight={500} textDecoration='line-through'>$160</Text></Text>
                                    <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(88)</Text></Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        {/* 2 */}
                        <SwiperSlide>
                            <Box mt='5px'>
                                <Box bg='#989898' padding={5} >
                                    <Box display='flex' alignItems='center' justifyContent='end'>
                                        <Box display='flex' alignItems='end' flexDirection='column' gap={2}>
                                            <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike2((prevLike) => !prevLike)}>{like2 ? '❤️' : <FaRegHeart />}</Text>
                                            <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                        </Box>
                                    </Box>
                                    <img className='rotate' src={bag} alt="" />
                                    <Button className='wait' display='none' ml={2.5} width={{ md: '244.5px', base: '245.5px' }} onClick={handleBuy}><span>Add Shop</span></Button>
                                </Box>
                                <Box>
                                    <Text color='#000' fontSize='16px' fontWeight={500} mt={5}>HAVIT HV-G92 Gamepad</Text>
                                    <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$120<Text color='#000' opacity='0.5' fontWeight={500} textDecoration='line-through'>$160</Text></Text>
                                    <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(88)</Text></Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        {/* 3 */}
                        <SwiperSlide>
                            <Box mt='5px'>
                                <Box bg='#989898' padding={5} >
                                    <Box display='flex' alignItems='center' justifyContent='end'>
                                        <Box display='flex' alignItems='end' flexDirection='column' gap={2}>
                                            <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike3((prevLike) => !prevLike)}>{like3 ? '❤️' : <FaRegHeart />}</Text>
                                            <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                        </Box>
                                    </Box>
                                    <img className='rotate' src={voice} alt="" />
                                    <Button className='wait' display='none' ml={2.5} width={{ md: '244.5px', base: '245.5px' }} onClick={handleBuy}><span>Add Shop</span></Button>
                                </Box>
                                <Box>
                                    <Text color='#000' fontSize='16px' fontWeight={500} mt={5}>HAVIT HV-G92 Gamepad</Text>
                                    <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$120<Text color='#000' opacity='0.5' fontWeight={500} textDecoration='line-through'>$160</Text></Text>
                                    <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(88)</Text></Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        {/* 4 */}
                        <SwiperSlide>
                            <Box mt='5px'>
                                <Box bg='#989898' padding={5} >
                                    <Box display='flex' alignItems='center' justifyContent='end'>
                                        <Box display='flex' alignItems='end' flexDirection='column' gap={2}>
                                            <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px' onClick={() => setLike4((prevLike) => !prevLike)}>{like4 ? '❤️' : <FaRegHeart />}</Text>
                                            <Text bg='whitesmoke' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='50px'><FaRegEye /></Text>
                                        </Box>
                                    </Box>
                                    <img className='rotate' src={table} alt="" />
                                    <Button className='wait' display='none' ml={2.5} width={{ md: '244.5px', base: '245.5px' }} onClick={handleBuy}><span>Add Shop</span></Button>
                                </Box>
                                <Box>
                                    <Text color='#000' fontSize='16px' fontWeight={500} mt={5}>HAVIT HV-G92 Gamepad</Text>
                                    <Text display='flex' alignItems='center' gap={3} color='#DB4444' fontSize='16px'>$120<Text color='#000' opacity='0.5' fontWeight={500} textDecoration='line-through'>$160</Text></Text>
                                    <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(88)</Text></Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    </Swiper>

                </Box>
            </Box >
            {toast && (<Alert sx={{ position: 'fixed',zIndex:'999' ,top: '0', right: '0', borderRadius:'8px' ,w:'400px', bg:'#2FF924', color:'white'}}>
            This is a success alert — check it out!
        </Alert>)
}
            
        </Container >
    )
}
