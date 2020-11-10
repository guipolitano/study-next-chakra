import {
  Box,
  Button,
  Divider,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/core";
import React from "react";

export const LoginForm: React.FC = () => {
  return (
    <Box
      flex="1"
      minWidth="360px"
      bg="gray.700"
      borderRadius="md"
      p="8"
      alignContent="center"
      justifyContent="center"
    >
      <Heading size="md">Login</Heading>
      <Divider marginY="4" />
      <Stack spacing="4">
        <InputGroup>
          <InputLeftAddon>
            <Icon name="at-sign" />
          </InputLeftAddon>
          <Input
            _focus={{ borderColor: "orange.400" }}
            roundedLeft="0"
            placeholder="E-mail"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children={<Icon name="lock" />} />
          <Input
            type="password"
            _focus={{ borderColor: "orange.400" }}
            roundedLeft="0"
            placeholder="Senha"
          />
        </InputGroup>
        <Button
          bg="orange.400"
          _hover={{ bg: "orange.500" }}
          _focus={{ border: "none" }}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
};
