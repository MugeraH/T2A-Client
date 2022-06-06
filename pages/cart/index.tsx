import React from "react";
import Navbar from "../../components/Navbar";
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
import { BiHeart, BiRefresh, BiSearch, BiArrowBack } from "react-icons/bi";

type Props = {};

function Cart({}: Props) {
  return (
    <>
      <Navbar />
      <Button
        m={5}
        as={HStack}
        onClick={() => {
          Router.push("/products/1");
        }}
      >
        {" "}
        <BiArrowBack />
        <Text fontSize="1xl"> Back</Text>
      </Button>
    </>
  );
}

export default Cart;
