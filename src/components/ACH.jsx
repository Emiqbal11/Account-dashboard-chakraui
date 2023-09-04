import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const ACH = () => {
  return (
    <SimpleGrid spacingY="20px">
      <Box>
        <FormLabel fontSize={"sm"}>Current Payment Method</FormLabel>
        <Select
          icon={<MdArrowDropDown />}
          variant="filled"
          size="lg"
          rounded={"full"}
        >
          <option>Card Ending 5535</option>
        </Select>
      </Box>
      <Box>
        <FormControl>
          <FormLabel fontSize={"sm"}>Routing Number</FormLabel>
          <Input
            type="number"
            variant={"filled"}
            placeholder="Routing Number"
            size="lg"
            rounded={"full"}
          />
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel fontSize={"sm"}>Account Number</FormLabel>
          <Input
            type="number"
            variant={"filled"}
            placeholder="Account Number"
            size="lg"
            rounded={"full"}
          />
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel fontSize={"sm"}>Confirm Account Number</FormLabel>
          <Input
            type="number"
            variant={"filled"}
            placeholder="Confirm Account Number"
            size="lg"
            rounded={"full"}
          />
        </FormControl>
      </Box>
      <Divider orientation="horizontal" />
    </SimpleGrid>
  );
};

export default ACH;
