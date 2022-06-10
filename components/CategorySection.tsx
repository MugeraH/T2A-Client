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
      <Box min-height={"500px"} mt={5} p={30} bg="#fff">
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
              title="Auto Motorcylces Parts and Accessories"
              desc=""
              image="/carimage.jpeg"
            />{" "}
            <Feature title="Furniture" image="/furniture.png" desc="" />{" "}
            <Feature title="Kitchenware" image="/kitchenwr.png" desc="" />
            <Feature title="Apparel" image="clothes.jpeg" desc="" />
            <Feature title="Beddings" image="/beddings.jpeg" desc="" />
            <Feature title="Art and Deco" image="deco.jpeg" desc="" />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

export default CategorySection;

// @ts-ignore
function Feature({ title, image, desc, ...rest }) {
  return (
    <Box
      bg="gray.100"
      width={"300px"}
      alignItems={"center"}
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="5px"
      {...rest}
    >
      <img  src={image} alt={title} />
      <Heading fontSize="xl" >{title}</Heading>
      {/* <Text mt={4}>{desc}</Text> */}
    </Box>
  );
}
