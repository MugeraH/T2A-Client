/* eslint-disable @next/next/no-img-element */
import React from "react";
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

type Props = {};

function ProductSection({}: Props) {
  const IMAGE =
    "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";
  return (
    <>
      {" "}
      <Box height={"650px"} p={30} bg="white">
        <Stack align={"start"} spacing={3}>
          {/* <Heading
            color={"#1a1a1a"}
            fontWeight={800}
            style={{ fontFamily: "Oswald, sans-serif" }}
            fontSize={{ base: "2xl", sm: "2xl", md: "3xl" }}
            lineHeight={"100%"}
            textAlign={"start"}
            mb={5}
          >
            Products
          </Heading> */}

          <Flex
            height="550px"
            width="100%"
            borderRadius={2}
            borderWidth="3px"
            borderColor="gray.100"
            bg="gray.100"
            p={0}
          >
            <Flex
              direction="column"
              gap="30px"
              w="250px"
              bg="gray.100"
              px={3}
              py={2}
              m={0}
            >
              <Text fontSize="4xl">Auto</Text>
              {/* <Link as={Button} href="https://chakra-ui.com" isExternal>
                Explore
              </Link> */}
              <Button
                as={Link}
                href="/products"
                color="white"
                bg="blue.300"
              >
                Explore
              </Button>
              <Box>
                <img
                  src="https://images.unsplash.com/photo-1590621500362-afc1311f6019?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8OTcwODAzOTV8fGVufDB8fHx8&auto=format&fit=crop&w=500"
                  alt=" carparts"
                />
              </Box>
            </Flex>

            <Box flex="1" p={2} bg="white">
              <Flex
                direction={"row"}
                px={8}
                wrap="wrap"
                gap={8}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Feature
                  title="Spare parts"
                  desc="The future can be even brighter but a goal without a plan is just a wish"
                />{" "}
                <Feature
                  title="Spare parts"
                  desc="The future can be even brighter but a goal without a plan is just a wish"
                />{" "}
                <Feature
                  title="Spare parts"
                  desc="The future can be even brighter but a goal without a plan is just a wish"
                />{" "}
                <Feature
                  title="Spare parts"
                  desc="The future can be even brighter but a goal without a plan is just a wish"
                />{" "}
                <Feature
                  title="Spare parts"
                  desc="The future can be even brighter but a goal without a plan is just a wish"
                />{" "}
                <Feature
                  title="Spare parts"
                  desc="The future can be even brighter but a goal without a plan is just a wish"
                />{" "}
              </Flex>
            </Box>
          </Flex>

          {/* <Flex
            direction={"row"}
            px={8}
            wrap="wrap"
            gap={8}
            justifyContent={"space-between"}
          >
            <Feature
              title="Auto Motorcylces Parts and Accessories"
              desc="The future can be even brighter but a goal without a plan is just a wish"
            />{" "}
            <Feature
              title="Furniture"
              desc="The future can be even brighter but a goal without a plan is just a wish"
            />{" "}
            <Feature
              title="Kitchenware"
              desc="The future can be even brighter but a goal without a plan is just a wish"
            />
            <Feature
              title="Apparel"
              desc="The future can be even brighter but a goal without a plan is just a wish"
            />
            <Feature
              title="Beddings"
              desc="The future can be even brighter but a goal without a plan is just a wish"
            />
            <Feature
              title="Art and Deco"
              desc="The future can be even brighter but a goal without a plan is just a wish"
            />
          </Flex> */}
        </Stack>
      </Box>
    </>
  );
}

export default ProductSection;

// @ts-ignore
function Feature({ title, desc, ...rest }) {
  return (
    <Box
      bg="gray.100"
      width={"300px"}
      height="200px"
      px={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="5px"
      textAlign="center"
      {...rest}
    >
      <Heading fontSize="xl" my={2}>
        {title}
      </Heading>
      <Box height="150px">
        <img
          style={{ height: "100%", margin: "auto" }}
          src="https://images.unsplash.com/photo-1590621500362-afc1311f6019?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8OTcwODAzOTV8fGVufDB8fHx8&auto=format&fit=crop&w=500"
          alt=" carparts"
        />
      </Box>
    </Box>
  );
}
