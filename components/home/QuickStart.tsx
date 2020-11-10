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
  Text,
} from "@chakra-ui/core";
import React from "react";

export const QuickStart: React.FC = () => {
  return (
    <Box
      bg="gray.600"
      borderRadius="md"
      minWidth="480px"
      p="8"
      alignContent="center"
      justifyContent="space-between"
      flexDirection="column"
      display="flex"
      flex="1"
    >
      <Heading size="md">Início Rápido</Heading>
      <Text>
        Caso não queira se cadastrar, clique aqui para ir direto para a criação
        de fichas.
      </Text>
      <Button _hover={{ bg: "orange.500" }} _focus={{ border: "none" }}>
        Iniciar
      </Button>
    </Box>
  );
};
