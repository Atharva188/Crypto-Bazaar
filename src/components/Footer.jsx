import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://media.licdn.com/dms/image/D4D03AQHPR9iE14T30w/profile-displayphoto-shrink_400_400/0/1679412620716?e=1712793600&v=beta&t=mZzrZPfe9lsFNWiobgI4GwPRsl9Is58zA01aU5H8Lp8";

const Footer = () => {
  return (
    <Box
      bgColor={"black"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto viewing website with in depth analysis of each and every crypto currencies..
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "2"]} src={avatarSrc} />
          <Text>Our Developer</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;