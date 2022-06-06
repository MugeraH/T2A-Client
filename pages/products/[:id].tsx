import React, { useState } from "react";
import Router from "next/router";
import {
  Flex,
  HStack,
  VStack,
  Circle,
  Stack,
  Center,
  Square,
  Heading,
  Image,
  Badge,
  useColorModeValue,
  Box,
  Text,
  Checkbox,
  Container,
  Button,
  Link,
  Select,
  Icon,
  chakra,
  Tooltip,
  Divider,
} from "@chakra-ui/react";

import {
  BsFillGrid3X3GapFill,
  BsThreeDotsVertical,
  BsStar,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { BiHeart, BiRefresh, BiSearch, BiArrowBack } from "react-icons/bi";

import Navbar from "../../components/Navbar";

type Props = {};

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

interface RatingProps {
  rating: number;
  numReviews: number;
}

function Products({}: Props) {
  const [showCardLayout, setShowCardLayout] = useState(true);
  return (
    <>
      <Navbar />

      <Button
        m={5}
        as={HStack}
        onClick={() => {
          Router.push("/products");
        }}
      >
        {" "}
        <BiArrowBack />
        <Text fontSize="1xl"> Back</Text>
      </Button>
      <VStack py={5}>
        <Box
          as={HStack}
          borderRadius="10px"
          borderWidth="5px"
          borderColor="gray.200"
          w="80%"
          justifyContent="space-between"
        >
          {" "}
          <Box>
            <Image
              height="400px"
              w="500px"
              src={data.imageURL}
              alt={`Picture of ${data.name}`}
              roundedTop="lg"
              p={5}
            />
          </Box>
          <Box my={2}>
            <Box
              fontSize="3xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.name}
            </Box>
            <Rating rating={data.rating} numReviews={data.numReviews} />
            <Box as={Flex} gap="20px" my={2}>
              <Text fontSize="1xl">Available:</Text>
              <Text fontSize="1xl" color="blue.300">
                98 in stock
              </Text>
            </Box>

            {/* <hr
              style={{
                border: "none",
                height: "3px",
                background: "black",
                width: "90%",
                margin: "10px 0px",
              }}
            /> */}
            <Box w="400px">
              <Text fontSize="15px">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                repellendus ut quas totam pariatur amet eius laborum est. Ad
                dolor sunt voluptatem pariatur repudiandae ipsa consequuntur eum
                odio cumque ipsum?
              </Text>
            </Box>

            <hr
              style={{
                border: "none",
                height: "3px",
                background: "black",
                width: "90%",
                margin: "20px 0px",
              }}
            />

            <Box as={HStack} justifyContent="space-between" px="18px">
              <Text>Qty</Text>
              <Text borderWidth="3px" p={3} borderColor="grey.200">
                1
              </Text>
              <Button
                colorScheme="blue"
                size="md"
                my={2}
                onClick={() => {
                  Router.push("/cart");
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Box>
        <Box w="100%" bg="gray.100" py={12}>
          <Box w="80%" bg="white" p={3} mx="auto">
            <Text fontSize="2xl" textAlign="center">
              Description
            </Text>
            <hr
              style={{
                border: "none",
                height: "3px",
                background: "#aeaeae",
                width: "100%",
                margin: "20px 0px",
              }}
            />
            <Box my={3}>
              <Text fontSize="2xl">Quality wool</Text>
              <Text fontSize="16px">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
                modi quibusdam possimus? Vel quibusdam delectus exercitationem
                est doloremque eius beatae!
              </Text>
            </Box>
            <Box my={3}>
              <Text fontSize="2xl">Quality wool</Text>
              <Text fontSize="16px">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
                modi quibusdam possimus? Vel quibusdam delectus exercitationem
                est doloremque eius beatae!
              </Text>
            </Box>
            <Box my={3}>
              <Text fontSize="2xl">Quality wool</Text>
              <Text fontSize="16px">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
                modi quibusdam possimus? Vel quibusdam delectus exercitationem
                est doloremque eius beatae!
              </Text>
            </Box>
          </Box>
        </Box>
        <Box w="100%" p={12}>
          <Text my={4} fontSize="2xl">
            Related Products
          </Text>
          <Flex gap="10px" direction="row" justify="space-between">
            <Box
              bg="white"
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              cursor="pointer"
              shadow="lg"
              position="relative"
              mb={3}
              onClick={() => {
                Router.push("products/1");
              }}
            >
              {/* {data.isNew && (
                <Circle
                  size="10px"
                  position="absolute"
                  top={2}
                  right={2}
                  bg="red.200"
                />
              )} */}

              <Image
                height="250px"
                w="300px"
                src={data.imageURL}
                alt={`Picture of ${data.name}`}
                roundedTop="lg"
              />

              <Box p="6">
                {/* <Box d="flex" alignItems="baseline">
                  {data.isNew && (
                    <Badge
                      rounded="full"
                      px="2"
                      fontSize="0.8em"
                      colorScheme="red"
                    >
                      New
                    </Badge>
                  )}
                </Box> */}
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Box
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {data.name}
                  </Box>
                  {/* <Tooltip
                    label="Add to cart"
                    bg="white"
                    placement={"top"}
                    color={"gray.800"}
                    fontSize={"1.2em"}
                  >
                    <chakra.a href={"#"} display={"flex"}>
                      <Icon
                        as={FiShoppingCart}
                        h={7}
                        w={7}
                        alignSelf={"center"}
                      />
                    </chakra.a>
                  </Tooltip> */}
                </Flex>

                <Flex
                  direction="column"
                  gap="10px"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Rating rating={data.rating} numReviews={data.numReviews} />
                  <Box
                    fontSize="2xl"
                    color={useColorModeValue("gray.800", "white")}
                  >
                    <Box as="span" color={"gray.600"} fontSize="lg">
                      $
                    </Box>
                    {data.price.toFixed(2)}
                  </Box>
                </Flex>
              </Box>
            </Box>
            <Box
              bg="white"
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              cursor="pointer"
              shadow="lg"
              position="relative"
              mb={3}
              onClick={() => {
                Router.push("products/1");
              }}
            >
              {/* {data.isNew && (
                <Circle
                  size="10px"
                  position="absolute"
                  top={2}
                  right={2}
                  bg="red.200"
                />
              )} */}

              <Image
                height="250px"
                w="300px"
                src={data.imageURL}
                alt={`Picture of ${data.name}`}
                roundedTop="lg"
              />

              <Box p="6">
                {/* <Box d="flex" alignItems="baseline">
                  {data.isNew && (
                    <Badge
                      rounded="full"
                      px="2"
                      fontSize="0.8em"
                      colorScheme="red"
                    >
                      New
                    </Badge>
                  )}
                </Box> */}
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Box
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {data.name}
                  </Box>
                  {/* <Tooltip
                    label="Add to cart"
                    bg="white"
                    placement={"top"}
                    color={"gray.800"}
                    fontSize={"1.2em"}
                  >
                    <chakra.a href={"#"} display={"flex"}>
                      <Icon
                        as={FiShoppingCart}
                        h={7}
                        w={7}
                        alignSelf={"center"}
                      />
                    </chakra.a>
                  </Tooltip> */}
                </Flex>

                <Flex
                  direction="column"
                  gap="10px"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Rating rating={data.rating} numReviews={data.numReviews} />
                  <Box
                    fontSize="2xl"
                    color={useColorModeValue("gray.800", "white")}
                  >
                    <Box as="span" color={"gray.600"} fontSize="lg">
                      $
                    </Box>
                    {data.price.toFixed(2)}
                  </Box>
                </Flex>
              </Box>
            </Box>
            <Box
              bg="white"
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              cursor="pointer"
              shadow="lg"
              position="relative"
              mb={3}
              onClick={() => {
                Router.push("products/1");
              }}
            >
              {/* {data.isNew && (
                <Circle
                  size="10px"
                  position="absolute"
                  top={2}
                  right={2}
                  bg="red.200"
                />
              )} */}

              <Image
                height="250px"
                w="300px"
                src={data.imageURL}
                alt={`Picture of ${data.name}`}
                roundedTop="lg"
              />

              <Box p="6">
                {/* <Box d="flex" alignItems="baseline">
                  {data.isNew && (
                    <Badge
                      rounded="full"
                      px="2"
                      fontSize="0.8em"
                      colorScheme="red"
                    >
                      New
                    </Badge>
                  )}
                </Box> */}
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Box
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {data.name}
                  </Box>
                  {/* <Tooltip
                    label="Add to cart"
                    bg="white"
                    placement={"top"}
                    color={"gray.800"}
                    fontSize={"1.2em"}
                  >
                    <chakra.a href={"#"} display={"flex"}>
                      <Icon
                        as={FiShoppingCart}
                        h={7}
                        w={7}
                        alignSelf={"center"}
                      />
                    </chakra.a>
                  </Tooltip> */}
                </Flex>

                <Flex
                  direction="column"
                  gap="10px"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Rating rating={data.rating} numReviews={data.numReviews} />
                  <Box
                    fontSize="2xl"
                    color={useColorModeValue("gray.800", "white")}
                  >
                    <Box as="span" color={"gray.600"} fontSize="lg">
                      $
                    </Box>
                    {data.price.toFixed(2)}
                  </Box>
                </Flex>
              </Box>
            </Box>
            <Box
              bg="white"
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              cursor="pointer"
              shadow="lg"
              position="relative"
              mb={3}
              onClick={() => {
                Router.push("products/1");
              }}
            >
              {/* {data.isNew && (
                <Circle
                  size="10px"
                  position="absolute"
                  top={2}
                  right={2}
                  bg="red.200"
                />
              )} */}

              <Image
                height="250px"
                w="300px"
                src={data.imageURL}
                alt={`Picture of ${data.name}`}
                roundedTop="lg"
              />

              <Box p="6">
                {/* <Box d="flex" alignItems="baseline">
                  {data.isNew && (
                    <Badge
                      rounded="full"
                      px="2"
                      fontSize="0.8em"
                      colorScheme="red"
                    >
                      New
                    </Badge>
                  )}
                </Box> */}
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Box
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {data.name}
                  </Box>
                  {/* <Tooltip
                    label="Add to cart"
                    bg="white"
                    placement={"top"}
                    color={"gray.800"}
                    fontSize={"1.2em"}
                  >
                    <chakra.a href={"#"} display={"flex"}>
                      <Icon
                        as={FiShoppingCart}
                        h={7}
                        w={7}
                        alignSelf={"center"}
                      />
                    </chakra.a>
                  </Tooltip> */}
                </Flex>

                <Flex
                  direction="column"
                  gap="10px"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Rating rating={data.rating} numReviews={data.numReviews} />
                  <Box
                    fontSize="2xl"
                    color={useColorModeValue("gray.800", "white")}
                  >
                    <Box as="span" color={"gray.600"} fontSize="lg">
                      $
                    </Box>
                    {data.price.toFixed(2)}
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </VStack>
    </>
  );
}

export default Products;

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "orange" : "gray"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}
