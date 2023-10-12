import React from "react";
import { Box, Button } from "@chakra-ui/react";
import "./home.css";
import { MdWork } from "react-icons/md";
import myImage from '../assets/mydp.png';




const home = () => {

  return (
    <>
      <Box
        h={"100vh"}
        w={"100%"}
        display={"flex"}
        padding={"50px"}
        alignContent={"center"}
        alignItems={"center"}
        className="Main"
      >
        <Box className="titleContent" margin={["10px","200px"]}>
          <h1>
            D <span className="H">H </span>
            <span className="A"> A </span>
            <span className="N"> N </span>
            <span className="A"> A </span>
          </h1>

          <h1><span className="N"> N </span>
            J <span className="A"> A </span>
            <span> Y </span>
          </h1>
          <p>UI/UX , FULLSTACK WEB-DEVELOPER</p>
          <Button
            m={"10px"}
            borderRadius={"20px"}
            colorScheme="blue"
            _hover={{
              backgroundColor: "red.500",
              color: "white",
            }}
            _focus={{
              outline: "none",
            }}
            
          >
            HIRE ME <MdWork />
          </Button>
        </Box>
        <img src={myImage} alt="name" />
      </Box>
    </>
  );
};

export default home;
