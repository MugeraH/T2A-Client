import React, { useEffect, useRef } from "react";
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
} from "@chakra-ui/react";

type Props = {};

function CategorySection({}: Props) {
  return (
    <>
      <Box height={"500px"} mt={5} p={30} bg="#fff">
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
            Popular Categories
          </Heading>

          <Flex
            direction={"row"}
            px={8}
            wrap="wrap"
            gap={8}
          
            justifyContent={"space-between"}
          >
            <Feature
              title="Auot Motorcylces Parts and Accessories"
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
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

export default CategorySection;

// @ts-ignore
function Feature({ title, desc, ...rest }) {
  return (
    <Box
      bg="gray.100"
      width={"400px"}
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
