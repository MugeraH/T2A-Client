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
  Select,
  Icon,
  chakra,
  Tooltip,
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
          Router.push("/");
        }}
      >
        {" "}
        <BiArrowBack />
        <Text fontSize="1xl"> Back</Text>
      </Button>

      <Flex direction="row" gap={2} p={4}>
        <VStack w="300px" gap={4}>
          <Box
            borderRadius="10px"
            bg="gray.200"
            w="250px"
            mx="auto"
            py={2}
            px={3}
          >
            <Text
              my={2}
              fontWeight="3xl"
              style={{
                display: "flex",
                fontWeight: "500",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Categories
              <BsThreeDotsVertical />
            </Text>
            <Text
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              my={2}
              px={2}
            >
              Auto & mobile
              <MdOutlineKeyboardArrowRight />
            </Text>
            <Text
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              my={2}
              px={2}
            >
              Furniture
              <MdOutlineKeyboardArrowRight />
            </Text>
            <Text
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              my={2}
              px={2}
            >
              Beddings
              <MdOutlineKeyboardArrowRight />
            </Text>
            <Text
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              my={2}
              px={2}
            >
              Art $ Deco
              <MdOutlineKeyboardArrowRight />
            </Text>
            <Text
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              my={2}
              px={2}
            >
              Apparel
              <MdOutlineKeyboardArrowRight />
            </Text>
            <Text
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              my={2}
              px={2}
            >
              Kitchenware
              <MdOutlineKeyboardArrowRight />
            </Text>
          </Box>

          <Box
            borderRadius="10px"
            bg="gray.200"
            w="250px"
            mx="auto"
            py={2}
            px={3}
          >
            <Text
              my={2}
              fontWeight="3xl"
              style={{
                display: "flex",
                fontWeight: "500",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              MANUFACTURER
            </Text>
            <Stack spacing={4} px={2}>
              <Checkbox borderColor="black">Louis viton</Checkbox>
              <Checkbox borderColor="black">H & M</Checkbox>
              <Checkbox borderColor="black">Versace</Checkbox>
              <Checkbox borderColor="black">Other</Checkbox>
            </Stack>
          </Box>
        </VStack>

        <Box flex="1">
          <Box
            height={"400px"}
            width="100%"
            bg="pink"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            objectFit="cover"
            backgroundImage="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
            borderRadius="10px"
          ></Box>

          <Flex
            my={5}
            borderRadius="7px"
            direction="row"
            bg="gray.200"
            py={2}
            px={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <HStack>
              <Box style={{ display: "flex" }}>
                <Button
                  p={0}
                  m={0}
                  disabled={showCardLayout}
                  onClick={() => {
                    setShowCardLayout(!showCardLayout);
                  }}
                >
                  <Icon as={BsFillGrid3X3GapFill} w={8} h={7} my={1} />
                </Button>

                <Button
                  p={0}
                  m={0}
                  disabled={!showCardLayout}
                  onClick={() => {
                    setShowCardLayout(!showCardLayout);
                  }}
                >
                  <Icon as={GoThreeBars} w={8} h={9} />
                </Button>
              </Box>
              <Text></Text>
            </HStack>
            <HStack>
              <Text mx={12}>Showing 1-9 of 30(3 Pages)</Text>

              <Text>Show</Text>

              <Select
                width="60px"
                variant="filled"
                placeholder="5"
                bg="white"
                mx={2}
              >
                <option value="option1">5</option>
                <option value="option2">10</option>
                <option value="option3">15</option>
              </Select>

              <Text>Sort By:</Text>
              <Select
                width="150px"
                variant="filled"
                placeholder="Default"
                bg="white"
              >
                <option value="option1">Default</option>
                <option value="option2">Price</option>
                <option value="option3">Name</option>
              </Select>
            </HStack>
          </Flex>

          {/* list */}

          {/* cards stack */}
          {showCardLayout && (
            <Flex
              py={50}
              w="full"
              alignItems="center"
              justifyContent="space-between"
              wrap="wrap"
              // gap="20px"
            >
              <Box
                bg="white"
                maxW="md"
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
                  w="320px"
                  src={data.imageURL}
                  alt={`Picture of ${data.name}`}
                  roundedTop="lg"
                />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
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
                  </Box>
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
                    <Tooltip
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
                    </Tooltip>
                  </Flex>

                  <Flex justifyContent="space-between" alignContent="center">
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
                maxW="md"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                mb={3}
                onClick={() => {
                  Router.push("products/1");
                }}
                cursor="pointer"
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
                  w="320px"
                  src={data.imageURL}
                  alt={`Picture of ${data.name}`}
                  roundedTop="lg"
                />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
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
                  </Box>
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
                    <Tooltip
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
                    </Tooltip>
                  </Flex>

                  <Flex justifyContent="space-between" alignContent="center">
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
                maxW="md"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                mb={3}
                cursor="pointer"
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
                  w="320px"
                  src={data.imageURL}
                  alt={`Picture of ${data.name}`}
                  roundedTop="lg"
                />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
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
                  </Box>
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
                    <Tooltip
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
                    </Tooltip>
                  </Flex>

                  <Flex justifyContent="space-between" alignContent="center">
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
          )}

          {/* horizontal stack */}
          {!showCardLayout && (
            <Flex direction="column" gap="10px">
              <Box
                as={HStack}
                bg="white"
                w="100%"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                mb={3}
                justifyContent="space-between"
                px={3}
                onClick={() => {
                  Router.push("products/1");
                }}
                cursor="pointer"
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
                  w="320px"
                  src={data.imageURL}
                  alt={`Picture of ${data.name}`}
                  roundedTop="lg"
                  p={5}
                />
                <Box flex={1} height="250px" p="6">
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
                  <Box
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {data.name}
                  </Box>

                  <Rating rating={data.rating} numReviews={data.numReviews} />
                  <Box w="400px">
                    <Text fontSize="16px">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Rerum repellendus ut quas totam pariatur amet eius laborum
                      est. Ad dolor sunt voluptatem pariatur repudiandae ipsa
                      consequuntur eum odio cumque ipsum?
                    </Text>
                  </Box>
                </Box>
                <Box p="6" height="250px">
                  <Box as={Flex} gap="20px">
                    <Text fontSize="1xl">Available:</Text>
                    <Text fontSize="1xl" color="blue.300">
                      98 in stock
                    </Text>
                  </Box>
                  <Box as={Flex} gap={2} my={2}>
                    <Text fontSize="3xl">$</Text>
                    <Text fontSize="3xl">{data.price}</Text>
                  </Box>
                  <Button colorScheme="blue" size="md" my={2}>
                    Add to Cart
                  </Button>
                  <Box as={Flex} gap={3}>
                    <Icon as={BiSearch} h={7} w={7} />
                    <Icon as={BiHeart} h={7} w={7} />
                    <Icon as={BiRefresh} h={7} w={7} />
                  </Box>
                </Box>
              </Box>
              <Box
                as={HStack}
                bg="white"
                w="100%"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                mb={3}
                justifyContent="space-between"
                px={3}
                onClick={() => {
                  Router.push("products/1");
                }}
                cursor="pointer"
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
                  w="320px"
                  src={data.imageURL}
                  alt={`Picture of ${data.name}`}
                  roundedTop="lg"
                  p={5}
                />
                <Box flex={1} height="250px" p="6">
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
                  <Box
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {data.name}
                  </Box>

                  <Rating rating={data.rating} numReviews={data.numReviews} />
                  <Box w="400px">
                    <Text fontSize="16px">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Rerum repellendus ut quas totam pariatur amet eius laborum
                      est. Ad dolor sunt voluptatem pariatur repudiandae ipsa
                      consequuntur eum odio cumque ipsum?
                    </Text>
                  </Box>
                </Box>
                <Box p="6" height="250px">
                  <Box as={Flex} gap="20px">
                    <Text fontSize="1xl">Available:</Text>
                    <Text fontSize="1xl" color="blue.300">
                      98 in stock
                    </Text>
                  </Box>
                  <Box as={Flex} gap={2} my={2}>
                    <Text fontSize="3xl">$</Text>
                    <Text fontSize="3xl">{data.price}</Text>
                  </Box>
                  <Button colorScheme="blue" size="md" my={2}>
                    Add to Cart
                  </Button>
                  <Box as={Flex} gap={3}>
                    <Icon as={BiSearch} h={7} w={7} />
                    <Icon as={BiHeart} h={7} w={7} />
                    <Icon as={BiRefresh} h={7} w={7} />
                  </Box>
                </Box>
              </Box>
              <Box
                as={HStack}
                bg="white"
                w="100%"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                mb={3}
                justifyContent="space-between"
                px={3}
                onClick={() => {
                  Router.push("products/1");
                }}
                cursor="pointer"
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
                  w="320px"
                  src={data.imageURL}
                  alt={`Picture of ${data.name}`}
                  roundedTop="lg"
                  p={5}
                />
                <Box flex={1} height="250px" p="6">
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
                  <Box
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {data.name}
                  </Box>

                  <Rating rating={data.rating} numReviews={data.numReviews} />
                  <Box w="400px">
                    <Text fontSize="16px">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Rerum repellendus ut quas totam pariatur amet eius laborum
                      est. Ad dolor sunt voluptatem pariatur repudiandae ipsa
                      consequuntur eum odio cumque ipsum?
                    </Text>
                  </Box>
                </Box>
                <Box p="6" height="250px">
                  <Box as={Flex} gap="20px">
                    <Text fontSize="1xl">Available:</Text>
                    <Text fontSize="1xl" color="blue.300">
                      98 in stock
                    </Text>
                  </Box>
                  <Box as={Flex} gap={2} my={2}>
                    <Text fontSize="3xl">$</Text>
                    <Text fontSize="3xl">{data.price}</Text>
                  </Box>
                  <Button colorScheme="blue" size="md" my={2}>
                    Add to Cart
                  </Button>
                  <Box as={Flex} gap={3}>
                    <Icon as={BiSearch} h={7} w={7} />
                    <Icon as={BiHeart} h={7} w={7} />
                    <Icon as={BiRefresh} h={7} w={7} />
                  </Box>
                </Box>
              </Box>
            </Flex>
          )}
        </Box>
      </Flex>
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
