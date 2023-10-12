import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Center,

} from "@chakra-ui/react";

import { BiMenuAltLeft } from "react-icons/bi";
// import React, { useState } from 'react';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        top={4}
        left={4}
        position={"fixed"}
        colorScheme="pink"
        p={"0"}
        height={"30px"}
        width={"30px"}
        borderRadius={"full"}
        onClick={onOpen}
      >
        <BiMenuAltLeft />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>DHANANJAY KAKADE</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button onClick={onClose} colorScheme="pink" variant={"ghost"}>
                <Link to={"/"}>HOME</Link>
              </Button>
              <Button onClick={onClose} colorScheme="pink" variant={"ghost"}>
                <Link to={"/about"}>ABOUT</Link>
              </Button>
              <Button onClick={onClose} colorScheme="pink" variant={"ghost"}>
                <Link to={"/skills"}>SKILLS</Link>
              </Button>
              <Button onClick={onClose} colorScheme="pink" variant={"ghost"}>
                <Link to={"/project"}>PROJECT</Link>
              </Button>
            </VStack>
            <HStack
              position={"absolute"}
              bottom={10}
              justifyContent={"center"}
              left={0}
              w={"full"}
            >
              <Button
              onClick={onClose}
                bg={"blue.600"}
                color={"white"}
                variant={"solid"}
                w={"200px"}
                _hover={{
                  backgroundColor: "red.500", 
                  color: "white", 
                }}
                _focus={{
                  outline: "none", 
                }}
                borderRadius={"20px"}
              >
                <Link to={"/contact"}>CONTACT ME</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
