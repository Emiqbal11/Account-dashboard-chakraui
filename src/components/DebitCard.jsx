import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const DebitCard = () => {
  return (
    <SimpleGrid spacingY="20px">
      <Box>
        <FormControl>
          <FormLabel fontSize={"sm"}>Cardholder Name</FormLabel>
          <Input
            type="text"
            variant={"filled"}
            placeholder="Cardholder Name"
            size="lg"
            rounded={"full"}
          />
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel fontSize={"sm"}>Card Number</FormLabel>
          <Input
            type="number"
            variant={"filled"}
            placeholder="Card Number"
            size="lg"
            rounded={"full"}
          />
        </FormControl>
      </Box>
      <Flex justifyContent={"space-between"}>
        <Box>
          <FormControl>
            <FormLabel fontSize={"sm"}>Card Number</FormLabel>
            <Input
              type="number"
              variant={"filled"}
              placeholder="Card Number"
              size="lg"
              rounded={"full"}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel fontSize={"sm"}>CVV</FormLabel>
            <Input
              type="password"
              variant={"filled"}
              placeholder="***"
              size="lg"
              rounded={"full"}
            />
          </FormControl>
        </Box>
      </Flex>
      <Divider orientation="horizontal" />
    </SimpleGrid>
  );
};

export default DebitCard;
