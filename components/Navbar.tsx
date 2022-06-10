import React, { ReactNode } from "react";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Input,
  Select,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { BiHeart } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";

type Props = {};

const Links = ["Dashboard", "Projects", "Team"];

function Navbar({}: Props) {
  return (
    <Box bg={useColorModeValue("blue.500", "blue.900")} px={4}>
      <Box>
        <Flex h={10} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={2} alignItems={"center"} color={"white"}>
            <Box style={{ borderRight: "2px solid white" }} px={2}>
              For Buyer
            </Box>

            <Box>For Seller</Box>
          </HStack>
          <HStack spacing={2} color={"white"} alignItems={"center"}>
            <Box style={{ borderRight: "2px solid white" }} px={2}>
              Account
            </Box>

            <Box>
              $USD
              {/* <Select
             
              variant="filled"
              placeholder="Category"
              bg="white"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select> */}
            </Box>
          </HStack>
        </Flex>
      </Box>
      <hr
        style={{
          border: "none",
          height: "3px",
          background: "white",
        }}
      />

      <Box>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            color={"white"}
            fontWeight={700}
            fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
            flex={"1"}
          >
            T2A
          </Box>
          <Box
            style={{
              display: "flex",
              gap: "3px",
              flex: "2",
            }}
          >
            <Input
              bg="white"
              variant="filled"
              placeholder="Search for products,categories and suppliers"
            />
            {/* <Select
              width="200px"
              variant="filled"
              placeholder="Category"
              bg="white"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select> */}
            <Button bg="gray.800">
              {" "}
              <SearchIcon color="white" />
            </Button>
          </Box>
          <Box
            flex={"1"}
            as={Flex}
            alignItems="center"
            justifyContent={"flex-end"}
            gap="10px"
            color="white"
          >
            <Box style={{ display: "flex" }}>
              <BiHeart size={30} color="white" />
              <span style={{ paddingBottom: "0px", display: "none" }}>0</span>
            </Box>
            <Box style={{ display: "flex" }}>
              <BsCartFill size={30} color="white" />
              <span style={{ paddingBottom: "0px", display: "none" }}>0</span>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;
