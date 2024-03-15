import React, { useState } from 'react'
import './admin.css'
import { Box, Button, Img, Input } from '@chakra-ui/react'
import { RiLockPasswordFill } from 'react-icons/ri'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { LuAtSign } from 'react-icons/lu'
import { admin } from '../../assets'

export default function Admin() {
  const [value, setValue] = useState('')
  const [value1, setValue1] = useState('')
  const [ture, setTrue] = useState(true)
  const inp = () => {
    if (value === 'abc' && value1 === '123')
      setTrue(false)
    else {
      alert('kod xato')
    }
  }
  const [show, setShow] = useState(false)
  const handleshow = () => {
    setShow(!show)
  }
  return (
    <>
      {ture ?
        <center>
          <Box className='part'>
            <div className="flex-column">
              <label>Login To The Admin Panel</label>
            </div>
            <div className="inputForm">
              <LuAtSign size={20} />
              <Input width={{md:'400px'}} type='text' required='text' variant='unstyled' placeholder='Enter your Name' value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <Box display='flex' alignItems='center' justifyContent='space-between' border='1px solid gray' borderRadius='10px'>
              <div className="inputForm">
                <RiLockPasswordFill size={20} />
                <Input  width={{md:'340px'}} type={show ? "text" : "password"} required='password' placeholder="Enter your password" variant='unstyled' value={value1} onChange={(e) => setValue1(e.target.value)} />
              </div>
              <Button onClick={handleshow} bg='transparent'>{show ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}</Button>

            </Box>
            <Button onClick={inp}>Login</Button>
          </Box>
        </center>
        :
        <Box backgroundImage={admin} height='100vh' backgroundRepeat='no-repeat'  backgroundSize='cover' width='100%' cursor='pointer'>

        </Box>
      }
    </>
  )
}
