import { Box, Button, Container, Input, Menu, MenuButton, MenuItem, MenuList, Select, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CiSearch, CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaBars, FaHeadSideCough } from "react-icons/fa";
import { IoPersonOutline, IoSettingsOutline, IoPencilSharp, IoChevronDownCircleOutline } from "react-icons/io5";
import { PiPersonArmsSpreadThin } from "react-icons/pi";
import { LuBellRing } from "react-icons/lu";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaPerson, FaPersonCircleCheck } from 'react-icons/fa6';

export default function Navbar() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <Box>
            {/* for black top  */}
            <Box background='#000' color='white' width='100%' display='flex' padding={3} alignItems='center' justifyContent='space-around'>
                <Text display='flex' alignItems='center' fontSize={{ md: '15px', base: '12px' }}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! ShopNow </Text>
                <Box>
                    <select style={{ background: 'transparent', color: 'white', border: 'none', width: '80px' }}  >
                        <option style={{ color: 'gray' }}>English</option>
                        <option style={{ color: 'gray' }}>Russian</option>
                        <option style={{ color: 'gray' }}>Uzbek</option>
                    </select>
                </Box>
            </Box>
            {/* nav  */}
            <Container maxWidth={1600} borderBottom='1px solid black' pb={6}>
                <Box display={{ md: 'flex', base: 'none' }} alignItems='center' justifyContent='space-between' mt={35} >
                    <Text fontSize={24} color='#000' fontWeight={700}>Exculsive</Text>
                    <ul style={{ display: 'flex', alignItems: 'center', listStyleType: 'none', gap: '20px', color: '#000', }}>
                        <li><a href="/">Home</a></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/sign'>Sign up</Link></li>
                    </ul>
                    <Box display='flex' alignItems='center' gap={3}>
                        <Box display='flex' alignItems='center' background='#F5F5F5'>
                            <Input variant='unstyled' placeholder='What are you looking for?' padding='7px 12px 7px 20px;' focusBorderColor='none' border='none' />
                            <CiSearch size={30} />
                        </Box>

                        <Link to='/likes'><Button bg='transparent'>  <CiHeart size={30} /></Button></Link>
                        <Link to='/shop'><Button bg='transparent'> <FiShoppingCart size={25} /></Button></Link>


                        <Menu >
                            <MenuButton as={Button} bg='transparent'>
                                <IoPersonOutline size={25} />
                            </MenuButton>
                            <MenuList background='transparent'>
                                <div className="input">
                                    <button className="value">
                                        <IoPersonOutline />
                                        Public profile
                                    </button>
                                    <button className="value">
                                        <IoSettingsOutline />
                                        Account
                                    </button>
                                    <button className="value">
                                        <IoPencilSharp />
                                        Appearance
                                    </button>
                                    <button className="value">
                                        <PiPersonArmsSpreadThin />
                                        Accessibility
                                    </button>
                                    <button className="value">
                                        <LuBellRing />
                                        Notifications
                                    </button>
                                </div>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
            <Button ref={btnRef} colorScheme='ghost' color='black' onClick={onOpen} display={{ md: 'none', base: 'block' }}>
                <FaBars />
            </Button>
            <Box display={{ md: 'none', base: 'flex' }} alignItems='center' gap={3}>
                <Box display='flex' alignItems='center' background='#F5F5F5'>
                    <Input variant='unstyled' placeholder='What are you looking for?' padding='7px 12px 7px 20px;' focusBorderColor='none' border='none' />
                    <CiSearch size={30} />
                </Box>
                <Link to='/likes'><Button bg='transparent'>  <CiHeart size={30} /></Button></Link>
                <Link to='/shop'><Button bg='transparent'> <FiShoppingCart size={25} /></Button></Link>

                <Menu >
                    <MenuButton as={Button} bg='transparent'>
                        <IoPersonOutline size={25} />
                    </MenuButton>
                    <MenuList background='transparent'>
                        <div className="input">
                            <button className="value">
                                <IoPersonOutline />
                                Public profile
                            </button>
                            <button className="value">
                                <IoSettingsOutline />
                                Account
                            </button>
                            <button className="value">
                                <IoPencilSharp />
                                Appearance
                            </button>
                            <button className="value">
                                <PiPersonArmsSpreadThin />
                                Accessibility
                            </button>
                            <button className="value">
                                <LuBellRing />
                                Notifications
                            </button>
                        </div>
                    </MenuList>
                </Menu>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <Box display='flex' alignItems='center' background='#F5F5F5' mt={50}>
                        <Input variant='unstyled' placeholder='What are you looking for?' padding='7px 12px 7px 20px;' focusBorderColor='none' border='none' />
                        <CiSearch size={30} />
                    </Box>
                    <DrawerBody>
                        <ul style={{ display: 'flex', alignItems: 'center', listStyleType: 'none', gap: '20px', color: '#000', }}>
                            <li><a href="/">Home</a></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/sign'>Sign up</Link></li>
                        </ul>
                        <Box display='flex' alignItems='start' gap={4} flexDirection='column' pt={20}>
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
                    </DrawerBody>
                </DrawerContent>
            </Drawer>



        </Box>
    )
}
