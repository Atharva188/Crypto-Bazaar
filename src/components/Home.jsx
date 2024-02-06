import React from 'react'
import { Box, Image, Text } from "@chakra-ui/react"
import heroImage from "../assets/hero1.jpg"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <Box bgColor={"black"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
       
        
      >
        Crypto-Bazaar
      </Text>
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={heroImage}
          filter={"grayscale(1)"}
        />
      </motion.div>


    </Box>
  )
}
export default Home;