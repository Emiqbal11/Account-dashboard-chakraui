import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const months = ["January", "February", "March", "April"];

const Invoice = () => {
  return (
    <>
      <Stack
        p={{ base: 2, md: 4 }}
        mt={"5"}
        shadow={"md"}
        border={"1px solid"}
        borderColor={useColorModeValue("gray.100", "gray.300")}
        rounded={"lg"}
      >
        <Divider orientation="vertical" />
        <Box borderBottom="1px" borderColor="gray.300" w="100%" py={2}>
          <Text fontWeight={"bold"} color={"gray.500"}>
            Date Range
          </Text>
        </Box>
        {months?.map((month, index) => (
          <Flex
            key={index}
            py={6}
            borderBottom="1px"
            borderColor="gray.300"
            w="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>{month}</Text>
            <Button
              bg="#36e47f"
              color="white"
              variant="solid"
              rounded="full"
              _hover={{
                bg: useColorModeValue("green.400", "gray.500"),
              }}
              size="lg"
            >
              View
            </Button>
          </Flex>
        ))}
      </Stack>
    </>
  );
};

export default Invoice;
