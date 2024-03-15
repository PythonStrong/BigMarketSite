import {
  Alert,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { cap, check, game } from "../assets/products";
import { clothe } from "../assets";
import { Navigation, Pagination } from "swiper/modules";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoTrash } from "react-icons/go";

export default function Likes() {
  const [toast, setToast] = useState(false);
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [val, setVal] = useState(4);

  const handleBuy = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 2000);
  };
  const laptop = () => {
    setVal(val - 1);
  };

  return (
    <Box>
      <Navbar />

      <Breadcrumb ml={10} mt={6}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/shop">Likes</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Container maxWidth="1460px" mt={32} mb={32}>
        <Text>Wishlist:{val}</Text>
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
          {show && (
            <SwiperSlide>
              <Box mt={70}>
                <Box bg="#989898" padding={5}>
                  <Box
                    display="flex"
                    alignItems="start"
                    justifyContent="space-between"
                  >
                    <Text
                      bg="#00FF66"
                      padding="4px 12px"
                      width={20}
                      borderRadius="8px"
                      color="white"
                    >
                      New
                    </Text>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                      gap={2}
                    >
                      <Text
                        bg="whitesmoke"
                        className="trash"
                        width={30}
                        height={8}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="50px"
                        onClick={() => setShow(false)}
                      >
                        <GoTrash onClick={laptop} />
                      </Text>
                    </Box>
                  </Box>
                  <img className="rotate" src={cap} alt="" />
                  <Button
                    className="wait"
                    ml={2.5}
                    width={{ md: "244.5px", base: "245.5px" }}
                    display="none"
                    onClick={handleBuy}
                  >
                    <span>Add Shop</span>
                  </Button>
                </Box>
                <Box display="flex" alignItems="start" flexDirection="column">
                  <Text color="#000" fontSize="16px" fontWeight={500} mt={6}>
                    Curology Product Set{" "}
                  </Text>
                  <Text
                    display="flex"
                    alignItems="center"
                    gap={3}
                    color="#DB4444"
                    fontSize="16px"
                  >
                    $500
                  </Text>
                </Box>
              </Box>
            </SwiperSlide>
          )}
          {/* 2 */}
          {show2 && (
            <SwiperSlide>
              <Box mt={70}>
                <Box bg="#989898" padding={5}>
                  <Box display="flex" alignItems="center" justifyContent="end">
                    <Box
                      display="flex"
                      alignItems="end"
                      flexDirection="column"
                      gap={2}
                    >
                      <Text
                        bg="whitesmoke"
                        className="trash"
                        width={30}
                        height={8}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="50px"
                        onClick={() => setShow2(false)}
                      >
                        <GoTrash onClick={laptop} />
                      </Text>
                    </Box>
                  </Box>
                  <img className="rotate" src={check} alt="" />
                  <Button
                    className="wait"
                    ml={2.5}
                    width={{ md: "244.5px", base: "245.5px" }}
                    display="none"
                    onClick={handleBuy}
                  >
                    <span>Add Shop</span>
                  </Button>
                </Box>
                <Box display="flex" alignItems="start" flexDirection="column">
                  <Text color="#000" fontSize="16px" fontWeight={500} mt={6}>
                    Jr. Zoom Soccer Cleats
                  </Text>
                  <Text
                    display="flex"
                    alignItems="center"
                    gap={3}
                    color="#DB4444"
                    fontSize="16px"
                  >
                    $1160
                  </Text>
                </Box>
              </Box>
            </SwiperSlide>
          )}
          {/* 3 */}
          {show3 && (
            <SwiperSlide>
              <Box mt={70}>
                <Box bg="#989898" padding={5}>
                  <Box
                    display="flex"
                    alignItems="start"
                    justifyContent="space-between"
                  >
                    <Text
                      bg="#00FF66"
                      padding="4px 12px"
                      width={20}
                      borderRadius="8px"
                      color="white"
                    >
                      New
                    </Text>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                      gap={2}
                    >
                      <Text
                        bg="whitesmoke"
                        className="trash"
                        width={30}
                        height={8}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="50px"
                        onClick={() => setShow3(false)}
                      >
                        <GoTrash onClick={laptop} />
                      </Text>
                    </Box>
                  </Box>
                  <img className="rotate" src={game} alt="" />
                  <Button
                    className="wait"
                    ml={2.5}
                    width={{ md: "244.5px", base: "245.5px" }}
                    display="none"
                    onClick={handleBuy}
                  >
                    <span>Add Shop</span>
                  </Button>
                </Box>
                <Box display="flex" alignItems="start" flexDirection="column">
                  <Text color="#000" fontSize="16px" fontWeight={500} mt={6}>
                    GP11 Shooter USB Gamepad
                  </Text>
                  <Text
                    display="flex"
                    alignItems="center"
                    gap={3}
                    color="#DB4444"
                    fontSize="16px"
                  >
                    $550
                  </Text>
                </Box>
              </Box>
            </SwiperSlide>
          )}
          {/* 4 */}
          {show4 && (
            <SwiperSlide>
              <Box mt={70}>
                <Box bg="#989898" padding={5}>
                  <Box display="flex" alignItems="center" justifyContent="end">
                    <Box
                      display="flex"
                      alignItems="end"
                      flexDirection="column"
                      gap={2}
                    >
                      <Text
                        bg="whitesmoke"
                        className="trash"
                        width={30}
                        height={8}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="50px"
                        onClick={() => setShow4(false)}
                      >
                        <GoTrash onClick={laptop} />
                      </Text>
                    </Box>
                  </Box>
                  <img className="rotate" src={clothe} alt="" />
                  <Button
                    className="wait"
                    ml={2.5}
                    width={{ md: "244.5px", base: "245.5px" }}
                    display="none"
                    onClick={handleBuy}
                  >
                    <span>Add Shop</span>
                  </Button>
                </Box>
                <Box display="flex" alignItems="start" flexDirection="column">
                  <Text color="#000" fontSize="16px" fontWeight={500} mt={6}>
                    Quilted Satin Jacket
                  </Text>
                  <Text
                    display="flex"
                    alignItems="center"
                    gap={3}
                    color="#DB4444"
                    fontSize="16px"
                  >
                    $660
                  </Text>
                </Box>
              </Box>
            </SwiperSlide>
          )}
        </Swiper>
        {toast && (
          <Alert
            sx={{
              position: "fixed",
              bottom: "0",
              left: "0",
              borderRadius: "8px",
              w: "400px",
              bg: "#2FF924",
              color: "white",
            }}
          >
            This is a success alert — check it out!
          </Alert>
        )}
      </Container>
      <Footer />
    </Box>
  );
}
