import React, { useEffect, useState } from "react";
import "./contact.css";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text, Textarea } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";


export default function Contact() {


  return (
    <Box>
      <Navbar /> 
      <center>
      <Breadcrumb ml={10} mt='30px'>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/contact'>Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
        <div class="container">
          <form action="https://getform.io/f/a105321b-f3a2-45fa-b584-b731ca25f8b8" method="POST">
            <div class="card4">
              <a class="singup">Xabar Jo'natish</a>
              <div className="sim">
                <div class="inputBox1">
                  <input type="text" name="name" required="required" />
                  <span class="user">Ism</span>
                </div>

                <div class="inputBox">
                  <input type="text" name="username" required="required" />
                  <span>Familya</span>
                </div>


                <div class="inputBox2">
                  <input type="number" name="phone number" required="required" />
                  <span>Telefon Number</span>
                </div>
              </div>

              <div className="textarea">
                <Textarea border='2px solid black' width={{ md: '950px', base: '300px' }} height='' className="textarea" placeholder="Xabar Jo'natish" />
              </div>

              <button type="submit" class="enter">Jo'natish</button>
            </div>
          </form>
        </div>
      </center>
    </Box>
  );
}
