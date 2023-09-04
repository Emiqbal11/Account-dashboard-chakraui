import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
  Select,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaAccusoft, FaEnvelope } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import AddNewPaymentMethod from "./AddNewPaymentMethod";

const PaymentMethod = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SimpleGrid columns={[1, null, 2]} spacing="40px" mt={"5"}>
        <Card>
          <CardHeader>
            <Heading size="md">Payment Method</Heading>
          </CardHeader>
          <CardBody>
            <FormLabel>Current Payment Method</FormLabel>
            <Select icon={<MdArrowDropDown />} variant="filled" size="lg">
              <option>Card Ending 5535</option>
            </Select>
          </CardBody>
          <CardFooter>
            <Button
              ml={"auto"}
              bg="#50c782"
              color={"white"}
              py={6}
              px={6}
              rounded={"full"}
              _hover={{
                bg: useColorModeValue("green.400", "gray.500"),
              }}
              onClick={onOpen}
            >
              Add New Payment Method
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Payment Alerts</Heading>
          </CardHeader>
          <CardBody>
            <FormLabel>Notification Email To</FormLabel>
            <Select icon={<MdArrowDropDown />} variant="filled" size="lg">
              <option>joh.dev@gov.com</option>
            </Select>
          </CardBody>
          <CardFooter>
            <Button
              ml={"auto"}
              bg="#50c782"
              color={"white"}
              py={6}
              px={6}
              _hover={{
                bg: useColorModeValue("green.400", "gray.500"),
              }}
              rounded={"full"}
              onClick={onOpen}
            >
              Add New Payment Method
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
      <AddNewPaymentMethod isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};

export default PaymentMethod;
