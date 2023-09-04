"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { BsFile, BsPerson, BsSearch } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdSearch, MdSearchOff } from "react-icons/md";
import Invoice from "../components/Invoice";
import PaymentMethod from "../components/PaymentMethod";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"md"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.100", "gray.300")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatNumber fontSize={"4xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Box maxW="8xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg="#50c782"
          _hover={{
            bg: useColorModeValue("#50c782", "#50c782"),
          }}
        >
          Last 14 days
        </MenuButton>
        <MenuList>
          <MenuItem>Last 14 days</MenuItem>
          <MenuItem>Last 14 days</MenuItem>
          <MenuItem>Last 14 days</MenuItem>
          <MenuItem>Last 14 days</MenuItem>
        </MenuList>
      </Menu>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        pt={2}
        spacing={{ base: 5, lg: 8 }}
      >
        <StatsCard title={"Verified Document YTD"} stat={"1200"} />
        <StatsCard title={"Page Count"} stat={"1,000"} />
        <StatsCard title={"Approx,cost-to-date"} stat={"$10987"} />
      </SimpleGrid>
      <Stat
        p={"5"}
        mt={"5"}
        shadow={"md"}
        border={"1px solid"}
        borderColor={useColorModeValue("gray.100", "gray.300")}
        rounded={"lg"}
      >
        <Heading>Billing</Heading>

        <Flex
          direction={["column", "row"]} // Stack vertically on small screens and horizontally on larger screens
          align="center"
          mt={8}
          flexWrap={["nowrap", "wrap"]} // Prevent wrapping on small screens and allow wrapping on larger screens
        >
          <Tabs>
            <TabList
              display="flex" // Display as flex container
              flexDirection={["column", "row"]} // Stack tabs vertically on smaller screens and place them side by side on larger screens
              flexWrap={["nowrap", "wrap"]} // Prevent wrapping on larger screens and allow wrapping on smaller screens
              justifyContent={["flex-start", "center"]} // Align tabs to the start on larger screens and center on smaller screens
            >
              <Tab
                w={["100%", "300px"]} // Full width on small screens, fixed width on larger screens
                _selected={{
                  borderBottomColor: "green.400",
                }}
                fontWeight="bold"
                onClick={() => setSelectedTab(0)}
              >
                Invoices
              </Tab>
              <Tab
                w={["100%", "300px"]} // Full width on small screens, fixed width on larger screens
                _selected={{
                  borderBottomColor: "green.400",
                }}
                fontWeight="bold"
                onClick={() => setSelectedTab(1)}
              >
                Payment Method
              </Tab>
            </TabList>
          </Tabs>

          {/* Search input component */}
          <Box mt={[4, 0]} ml={["auto", "auto"]}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.500"
                fontSize="1.2rem"
                mt="1"
                ml="1"
              >
                <BsSearch />
              </InputLeftElement>
              <Input
                variant="filled"
                type="text"
                placeholder="search"
                borderRadius="full"
                px={6}
                py={6}
              />
            </InputGroup>
          </Box>
        </Flex>

        <Stat>
          {selectedTab === 0 && <Invoice />}
          {selectedTab === 1 && <PaymentMethod />}
        </Stat>
      </Stat>
    </Box>
  );
}
