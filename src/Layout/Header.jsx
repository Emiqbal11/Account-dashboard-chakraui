import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon, CheckIcon } from "@chakra-ui/icons";
import { MdOutlineNotificationsNone } from "react-icons/md";

// interface Props {
//   children: React.ReactNode;
// }

const Links = ["Dashboard", "Accounting"];

const NavLink = ({ children }) => (
  <Box
    as="a"
    px={2}
    py={1}
    rounded={"md"}
    color={"gray.600"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    fontWeight={"bold"}
    href={"#"}
  >
    {children}
  </Box>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleMenu = () => (isOpen ? onClose() : onOpen());

  return (
    <>
      <Box px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={toggleMenu}
          />
          <HStack spacing={10} alignItems={"center"}>
            <Text fontSize="2xl">
              <span style={{ fontWeight: "bold" }}>Trusted</span>Copy
            </Text>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap={6}>
            <Box
              borderRight="0.5px solid gray"
              paddingRight="20px"
              height="100%"
            >
              <IconButton
                isRound={true}
                variant="solid"
                colorScheme="green"
                aria-label="Done"
                fontSize="25px"
                icon={<MdOutlineNotificationsNone />}
              />
            </Box>
            {/* <Box>MdOutlineNotificationsNone</Box> */}
            {/* <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Action
            </Button> */}
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"md"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
            <Box justifyContent={"start"}>
              <Text>Organization Profile</Text>
              <NavLink to="#">Go to Profile</NavLink>
            </Box>
          </Flex>
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
      <Box borderBottom="0.5px solid gray" />
    </>
  );
}
