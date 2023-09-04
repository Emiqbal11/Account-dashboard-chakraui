import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import ACH from "./ACH";
import DebitCard from "./DebitCard";

const AddNewPaymentMethod = ({ isOpen, onOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={"center"} fontSize={"2xl"}>
          Payment Method
        </ModalHeader>
        <Text textAlign={"center"} py={"2"}>
          Add, delete or modify new and existing payment methods
        </Text>
        <ModalCloseButton />
        <ModalBody>
          <Tabs isFitted variant="enclosed" colorScheme="green">
            <TabList mb="1em" borderBottomWidth={"3px"}>
              <Tab
                _selected={{
                  borderBottomWidth: "3px",
                  borderTopWidth: "1px ",
                  borderTopColor: "gray.300",
                  borderRightColor: "gray.200",
                  borderLeftColor: "gray.200",
                  borderLeftWidth: "1px",
                  borderRightWidth: "1px",
                  borderRadius: "3px",
                  borderBottomColor: "green.400",
                }}
              >
                Credit / Debit Card
              </Tab>
              <Tab
                _selected={{
                  borderBottomWidth: "3px",
                  borderTopWidth: "1px ",
                  borderTopColor: "gray.300",
                  borderRightColor: "gray.200",
                  borderLeftColor: "gray.200",
                  borderLeftWidth: "1px",
                  borderRightWidth: "1px",
                  borderRadius: "3px",
                  borderBottomColor: "green.400",
                }}
              >
                ACH
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <DebitCard />
              </TabPanel>
              <TabPanel>
                <ACH />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>

        <ModalFooter>
          <Button
            mr={"3"}
            bg={"red.500"}
            color={"white"}
            py={6}
            px={6}
            _hover={{
              bg: useColorModeValue("red.400", "red.400"),
            }}
            rounded={"full"}
          >
            Delete
          </Button>
          <Button
            mr={"3"}
            bg="#3eed87"
            color={"white"}
            py={6}
            px={6}
            _hover={{
              bg: useColorModeValue("green.300", "green.300"),
            }}
            rounded={"full"}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddNewPaymentMethod;
