import {
  Button,
  Container,
  Flex,
  Box,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateUserModal from "./CreateUserModal";

const Navbar = ({ setUsers }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"900px"}>
      <Box
        px={4}
        my={4}
        borderRadius={5}
        bg={useColorModeValue("gray.200", "gray.600")}
      >
        {/* Left side */}
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
            display={{ base: "none", sm: "flex" }}
          >
            <img src="/react.png" alt="react logo" width={30} height={30} />
            <Text fontSize={"40px"}>+</Text>
            <img src="/python.png" alt="python logo" width={30} height={25} />
            <Text fontSize={"40px"}>=</Text>
            <img src="/explode.png" alt="explode" width={35} height={35} />
          </Flex>
          {/* Right side */}
          <Flex gap={3} alignItems={"center"}>
            <Text
              fontSize={"lg"}
              fontWeight={500}
              display={{ base: "none", md: "block" }}
            >
              FriendList😊
            </Text>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <IoMoon size={20} />
              ) : (
                <LuSun size={20} />
              )}
            </Button>
            <CreateUserModal setUsers={setUsers} />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;
