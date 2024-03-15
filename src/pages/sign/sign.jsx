import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, FormLabel, Input, Text } from "@chakra-ui/react";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGoogle, FaRegEyeSlash } from "react-icons/fa6";
import { BiShow } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { LuAtSign } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import "./sign.css";
import Footer from "../../components/Footer";
import { signInWithPopup } from "firebase/auth";
import { FaPhoneAlt, FaRegEye } from "react-icons/fa";
import { auth, provide } from "../../../config";
import Navbar from "../../components/Navbar";
import Home from "../home";
import { useNavigate } from "react-router-dom";

export default function Sign() {
  const [val, setVal] = useState('')
  const [val1, setVal1] = useState('')
  const handlesubmit = () => {
    signInWithPopup(auth, provide).then((data) => {
      setVal(data.user.email)
      setVal1(data.user.password)
      localStorage.setItem('email', data.user.email)
      localStorage.setItem('password', data.user.password)
    })
  }
  useEffect(() => {
    localStorage.getItem('email')
    localStorage.getItem('password')
  })

  const [show, setShow] = useState(false)
  const handleshow = () => {
    setShow(!show)
  }

  return (
    <div>
      <Navbar />
      <Breadcrumb ml={10}>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/sign'>Sign</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <center>
        <form className="form">
          <div className="flex-column">
            <label>Email </label>
          </div>
          <div className="inputForm">
            <LuAtSign size={20} />
            <input type="text" className="inp" name="email" placeholder="Enter your Email" />
          </div>

          <div className="flex-column">
            <label>Password </label>
          </div>
          <Box display='flex' alignItems='center' justifyContent='space-between' border='1px solid #ECEDEC ' borderRadius='8px'>
            <div className="inputForm">
              <RiLockPasswordFill size={20} />
              <input
                type={show ? "text" : "password"}
                className="inp"
                placeholder="Enter your password"
                name="password"
              />
            </div>
            <Button onClick={handleshow} bg='transparent'>{show ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}</Button>

          </Box>

          <div className="flex-row">
            <div>
              <input type="checkbox" />
              <label>Remember me </label>
            </div>
            <span className="span">Forgot password?</span>
          </div>
          <button className="button-submit" type="submit">Sign In</button>
          <p className="p">
            Don't have an account? <span class="span">Sign Up</span>
          </p>
          <p classNames="p line">Or With</p>

          <div className="flex-row">
            {val && val1 ? <Home /> : <button className="btn google" onClick={handlesubmit}  ><FaGoogle /> Google</button>}
            <button className="btn apple"><FaPhoneAlt />  Phone Number</button>
          </div>
        </form>
      </center>
      <Footer />
    </div>
  );
}
