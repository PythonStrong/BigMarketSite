import {
    Table,
    Thead,
    Tbody,
    Breadcrumb,
    Box,
    Tfoot,
    Tr,
    BreadcrumbItem,
    Th,
    Td,
    BreadcrumbLink,
    TableCaption,
    Container,
    TableContainer,
    Button,
    Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { tv, voice } from '../assets'
import { game } from '../assets/products'

export default function Shop() {
    const [val, setVal] = useState(0)
    const [natija, setNatija] = useState(0)
    const [val2, setVal2] = useState(0)
    const [natija2, setNatija2] = useState(0)
    const [val3, setVal3] = useState(0)
    const [natija3, setNatija3] = useState(0)


    const plus = () => {
        setVal(val + 650)
        setNatija(natija + 1)
    }
    const mnus = () => {
        if (0 < val) {
            setVal(val - 650)
            setNatija(natija - 1)
        } else {
            setVal(val - 0)
        }
    }
    const plus2 = () => {
        setVal2(val2 + 1960)
        setNatija2(natija2 + 1)
    }
    const mnus2 = () => {
        if (0 < val2) {
            setVal2(val2 - 1960)
            setNatija2(natija2 - 1)
        } else {
            setVal2(val2 - 0)
        }
    }
    const plus3 = () => {
        setVal3(val3 + 550)
        setNatija3(natija3 + 1)
    }
    const mnus3 = () => {
        if (0 < val3) {
            setVal3(val3 - 550)
            setNatija3(natija3 - 1)
        } else {
            setVal3(val3 - 0)
        }
    }
    return (
        <Box width='100%'>
            <Navbar />
            <Breadcrumb ml={10}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/shop'>Shop</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Container maxWidth='1460px'>
                <Box display='flex' alignItems='center' flexDirection='column' gap={20}>
                    {/* 1 */}
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Product</Th>
                                <Th display={{ md: 'inherit', base: 'none' }}>Name</Th>
                                <Th >Price</Th>
                                <Th>Quantity</Th>
                                <Th display={{ md: 'inherit', base: 'none' }}>Subtotal</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td><img src={tv} alt="" /></Td>
                                <Td display={{ md: 'inherit', base: 'none' }}>IPS LCD Gaming Monitor</Td>
                                <Td >$650</Td>
                                <Td>
                                    <Box display='flex' width={{ md: '124px', base: '100%' }} alignItems='center' gap={3} border='1px solid gray' borderRadius='4px'>
                                        <Button fontSize={20} bg='transparent' border='1px solid gray' borderRadius='0px' onClick={mnus}>-</Button>
                                        <Text fontWeight={600}>{natija}</Text>
                                        <Button fontSize={20} bg='transparent' border='1px solid gray' borderRadius='0px' onClick={plus}>+</Button>
                                    </Box>
                                </Td>
                                <Td>
                                    <Text display={{ md: 'flex', base: 'none' }} width='50px'  fontSize='24px'>${val}</Text>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    {/* 2 */}
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Product</Th>
                                <Th display={{ md: 'inherit', base: 'none' }}>Name</Th>
                                <Th >Price</Th>
                                <Th>Quantity</Th>
                                <Th display={{ md: 'inherit', base: 'none' }}>Subtotal</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td><img src={voice} alt="" /></Td>
                                <Td display={{ md: 'inherit', base: 'none' }}>RGB liquid CPU Cooler</Td>
                                <Td >$1960</Td>
                                <Td>
                                    <Box display='flex' width={{ md: '122px', base: '100%' }} alignItems='center' gap={3} border='1px solid gray' borderRadius='4px'>
                                        <Button fontSize={20} bg='transparent' border='1px solid gray' borderRadius='0px' onClick={mnus2}>-</Button>
                                        <Text fontWeight={600}>{natija2}</Text>
                                        <Button fontSize={20} bg='transparent' border='1px solid gray' borderRadius='0px' onClick={plus2}>+</Button>
                                    </Box>
                                </Td>
                                <Td>
                                    <Text display={{ md: 'flex', base: 'none'}} width='50px' fontSize='24px'>${val2}</Text>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    {/* 3 */}
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Product</Th>
                                <Th display={{ md: 'inherit', base: 'none' }}>Name</Th>
                                <Th >Price</Th>
                                <Th>Quantity</Th>
                                <Th display={{ md: 'inherit', base: 'none' }}>Subtotal</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td><img src={game} alt="" /></Td>
                                <Td display={{ md: 'inherit', base: 'none' }}>GP11 Shooter USB Gamepad</Td>
                                <Td >$550</Td>
                                <Td>
                                    <Box display='flex' width={{ md: '120px', base: '100%' }} alignItems='center' gap={3} border='1px solid gray' borderRadius='4px'>
                                        <Button fontSize={20} bg='transparent' border='1px solid gray' borderRadius='0px' onClick={mnus3}>-</Button>
                                        <Text fontWeight={600}>{natija3}</Text>
                                        <Button fontSize={20} bg='transparent' border='1px solid gray' borderRadius='0px' onClick={plus3}>+</Button>
                                    </Box>
                                </Td>
                                <Td>
                                    <Text display={{ md: 'flex', base: 'none' }} width='50px'  fontSize='24px'>${val3}</Text>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
                <Box display='flex' alignItems='center' mt={40} justifyContent='space-between' flexDirection='column' width={{ md: '400px', base: '100%' }} border='1px solid gray' lineHeight='70px'>
                    <Text borderBottom='1px solid gray' width='100%' textAlign='center'>Card Total</Text>
                    <Box display='flex' alignItems='center' justifyContent='space-between' width='95%' borderBottom='1px solid gray'>
                        <Text>Subtotal: </Text>
                        <Text>${val + val2 + val3}</Text>
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent='space-between' width='95%' borderBottom='1px solid gray'>
                        <Text>Shipping: </Text>
                        <Text>Free</Text>
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent='space-between' width='95%' borderBottom='1px solid gray'>
                        <Text>Total: </Text>
                        <Text>${val + val2 + val3}</Text>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </Box>
    )
}
