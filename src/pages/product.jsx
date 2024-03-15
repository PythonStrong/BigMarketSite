import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, Container, Heading, IconButton, Img, Radio, RadioGroup, Stack, StackDivider, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { game } from '../assets/products'
import Navbar from '../components/Navbar'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";

export default function Product() {
  const [like, setLike] = useState(false)
  const [val, setVal] = useState(192)
  const [natija, setNatija] = useState(0)


  const plus = () => {
    setVal(val + 192)
    setNatija(natija + 1)
  }
  const mnus = () => {
    if (192 < val) {
      setVal(val - 192)
      setNatija(natija - 1)
    } else {
      setVal(val - 0)
    }
  }
  return (
    <Box>
      <Navbar />
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/product'>mahsulot nomi</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Container maxWidth={1460}>

        <Box display='flex' alignItems='center' justifyContent={{ md: 'space-around', base: 'center' }} flexDirection={{ md: 'inherit', base: 'column' }}  >

          <Box bg='#DBD7D2' width={{ md: '500px', base: '380px' }} padding='154px 27px 131px 27px'>
            <Img width={{ md: '376px', base: '80%' }} src={game} />
          </Box>
          <Box display='flex' alignItems='start' textAlign='start' flexDirection='column' gap={2}>
            <Text fontSize='24px' fontWeight={600}>Havic HV G-92 Gamepad</Text>
            <Box display='flex' alignItems='center' color='orange' gap={6} ><Box display='flex' alignItems='center' ><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><Text color='#000' opacity='0.5' fontWeight={500} fontSize={15}>(150 Reviews)</Text> </Box><Text color={'#0F6'}>| Stock</Text></Box>
            <Text fontSize='24px'>${val}</Text>
            <Text width='373px'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</Text>
            <hr />
            <Box display='flex' alignItems='center' mt={8} gap={4}>
              <Text>Colors:</Text>
              <RadioGroup defaultValue='1'>
                <Stack spacing={2} direction='row'>
                  <Radio value='3' bg='#A0BCE0'></Radio>
                  <Radio value='2' bg='#E07575'></Radio>
                </Stack>
              </RadioGroup>
            </Box>
            <Box display='flex' alignItems='center' gap={4}>
              <Text fontSize='20px'>Size: </Text>
              <Button bg='transparent' border='1px solid #ECEDEC' className='size'>XS</Button>
              <Button bg='transparent' border='1px solid #ECEDEC' className='size'>S</Button>
              <Button bg='transparent' border='1px solid #ECEDEC' className='size'>M</Button>
              <Button bg='transparent' border='1px solid #ECEDEC' className='size'>L</Button>
              <Button bg='transparent' border='1px solid #ECEDEC' className='size'>Xl</Button>
            </Box>
            <Box display='flex' alignItems='center' gap={10}>
              <Box display='flex' alignItems='center' gap={3} border='1px solid gray' borderRadius='4px'>
                <Button fontSize={20} bg='transparent' border='1px solid gray' borderRadius='0px' onClick={mnus}>-</Button>
                <Text fontWeight={600}>{natija}</Text>
                <Button fontSize={20} bg='transparent' border='1px solid gray' borderRadius='0px' onClick={plus}>+</Button>
              </Box>
              <Button bg='#DB4444' color='white'>Buy Now</Button>
              <Text border='1px solid gray' cursor='pointer' width={30} height={8} display='flex' alignItems='center' justifyContent='center' borderRadius='5px' onClick={() => setLike((prevLike) => !prevLike)}>{like ? '❤️' : <FaRegHeart />}</Text>
            </Box>
            <Box display='flex' width={{ md: '400px', base: '350px' }} flexDirection='column' border='1px solid gray'  >
              <Box display='flex' alignItems='center' gap={3} border='1px solid gray' padding={4}>
                <TbTruckDelivery fontSize={35} />
                <Box >
                  <Text fontWeight={500}>Free Delivery</Text>
                  <Text>Enter your postal code for Delivery Availability</Text>
                </Box>
              </Box>
              <Box display='flex' alignItems='center' gap={3} border='1px solid gray' padding={7} >
                <GiReturnArrow fontSize={35} />
                <Box>
                  <Text fontWeight={500}>Return Delivery</Text>
                  <Text>Free 30 Days Delivery Returns. Details</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>


      </Container>
    </Box>
  )
}
