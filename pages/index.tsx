import Image from "next/image";
import { Flex, Grid } from "@chakra-ui/core";
import { LoginForm } from "../components/home/LoginForm";
import { QuickStart } from "../components/home/QuickStart";
// import Logo from "../assets/logo.svg";

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr auto auto 1fr"
      templateRows="1fr auto 1fr"
      columnGap="4"
      rowGap="4"
      templateAreas="
      '. logo logo .'
      '. form form .'
      '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" width="50%" justifySelf="center">
        <Image
          src="/assets/logo.webp"
          width="1000"
          height="156"
          alt="Logo do Tormenta 20"
        />
      </Flex>
      <Flex gridArea="form" h="100%" flexWrap="wrap" style={{ gap: "1rem" }}>
        <QuickStart />
        <LoginForm />
      </Flex>
    </Grid>
  );
}
