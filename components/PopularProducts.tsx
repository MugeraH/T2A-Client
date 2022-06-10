import React, { useState } from "react";
import {
  Box,
  Stack,
  Input,
  Heading,
  Text,
  Flex,
  Checkbox,
  Spacer,
  Button,
  Link,
  Center,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import Slider from "react-slick";

type Props = {};

function PopularProducts({}: Props) {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    autoplay: true,
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {" "}
      <Box height={"550px"} p={30} bg="gray.100">
        <Stack align={"start"} spacing={3}>
          <Heading
            color={"#1a1a1a"}
            fontWeight={800}
            style={{ fontFamily: "Oswald, sans-serif" }}
            fontSize={{ base: "2xl", sm: "2xl", md: "3xl" }}
            lineHeight={"100%"}
            textAlign={"start"}
            mb={5}
          >
            Popular Products
          </Heading>

          <Flex
            direction={"row"}
            px={8}
            wrap="wrap"
            gap={8}
            justifyContent={"space-between"}
          >
            <ProductSimple image="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" />
            <ProductSimple image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500" />
            <ProductSimple image="https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500" />
            <ProductSimple image="https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

export default PopularProducts;

// @ts-ignore
function Feature({ title, desc, ...rest }) {
  return (
    <Box
      bg="gray.100"
      width={"400px"}
      min-height={"300px"}
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="5px"
      {...rest}
    >
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}
// @ts-ignore
function ProductSimple({ image }) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"280px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={image}
            alt="product_pic"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Brand
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {" "}
              $57
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
