import React from "react";
import {
  Box,
  Stack,
  VStack,
  HStack,
  Input,
  Heading,
  Text,
  Flex,
  Checkbox,
  Spacer,
  Button,
  Link,
  Center,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";

type Props = {};

function Banner({}: Props) {
  return (
    <>
      <Flex
        height="100px"
        bg="blue.300"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={4}
      >
        <Box flex={1}>
          <Text color="black" fontSize="25px" fontWeight={500}>
            We have Recommendations for you
          </Text>
          <Text color="white">Get 20% off for your first order</Text>
        </Box>

        <Center flex={1}>
          <Button bg="white">Discover now </Button>
        </Center>

        <Center flex={1} style={{display:"flex",gap:"10px"}}>
          {" "}
          <FaFacebook size={25}  />
          <SiTwitter size={25}  />
          <FaInstagram size={25}  />
          <FaGoogle size={25}  />
        </Center>
      </Flex>
    </>
  );
}

export default Banner;
