import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/menu_game.svg";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="logo" boxSize="60px" />
      <Text fontSize="2xl">Game Store</Text>
    </HStack>
  );
};

export default NavBar;
