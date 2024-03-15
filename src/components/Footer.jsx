import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { IoSend } from "react-icons/io5";
import { appstore, code, googleplay } from '../assets';
import { FaFacebookF, FaInstagram, FaCopyright } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from 'react-icons/fa6';

export default function Footer() {
    return (
        <Box background='#000' height='100%' padding={20} maxWidth='100%' >
            <Box display='flex' alignItems='center' justifyContent='space-around' flexDirection={{ md: 'inherit', base: 'column' }} gap={{ md: '0', base: '50px' }} color='#FAFAFA' pb={10}>
                <Box display='flex' alignItems='start' textAlign='start' flexDirection='column' gap={5}>
                    <Text fontWeight={700} fontSize={24}>Exclusive</Text>
                    <Text fontWeight={500} fontSize={20}>Subscribe</Text>
                    <Text>Get 10% off your first order</Text>
                    <form action="https://getform.io/f/a105321b-f3a2-45fa-b584-b731ca25f8b8" method='POST'>
                        <Box display='flex' alignItems='center' border='1px solid gray'>
                            <input style={{ background: 'transparent', padding: ' 12px 0px 12px 16px' }} type="email" placeholder='Enter Your Email' name='email' />
                            <IoSend size={25} />
                        </Box>
                    </form>
                </Box>
                <Box display='flex' alignItems='start' textAlign='start' flexDirection='column' gap={5}>
                    <Text fontWeight={500} fontSize='20px'>Support</Text>
                    <Text width='175px'>Uzbekistan, Fergana, Quva, Istiqlol street </Text>
                    <Text>abdullayevlazizbek118@gmail.com</Text>
                    <Text>+999 91 041 14 25</Text>
                </Box>
                <Box display={{ md: 'flex', base: 'none' }} alignItems='start' textAlign='start' flexDirection='column' gap={5}>
                    <Text>Account</Text>
                    <Text>My Account</Text>
                    <Text>Login/Register</Text>
                    <Text>Cart</Text>
                    <Text>Wishlist</Text>
                    <Text>Shop</Text>
                </Box>
                <Box display={{ md: 'flex', base: 'none' }} alignItems='start' textAlign='start' flexDirection='column' gap={5}>
                    <Text>Quick Link</Text>
                    <Text>Privacy Policy</Text>
                    <Text>Terms Of Use</Text>
                    <Text>FAQ</Text>
                    <Text>Contact</Text>
                </Box>
                <Box display='flex' alignItems='start' textAlign='start' flexDirection='column' gap={5}>
                    <Text>Download</Text>
                    <Text>Save $3 with App New User Only</Text>
                    <Box display='flex' gap={10}>
                        <Box>
                            <img src={code} alt="" />
                        </Box>
                        <Box display='flex' alignItems='center' flexDirection='column' gap={2}>
                            <img src={googleplay} alt="" />
                            <img src={appstore} alt="" />
                        </Box>
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent='center' gap={6}>
                        <FaFacebookF size={35} />
                        <CiTwitter size={35} />
                        <FaInstagram size={35} />
                        <FaLinkedinIn size={35} />
                    </Box>
                </Box>
            </Box>
            <Box display={{ md: 'flex', base: 'none' }} alignItems='center' gap={2} pl={500}>
                <FaCopyright />
                <Text color='gray'>Copyright Rimel 2022. All right reserved</Text>
            </Box>
        </Box>
    )
}
