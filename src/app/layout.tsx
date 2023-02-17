"use client";

import Section from "@/components/Section";
import theme from "@/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  ColorModeScript,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme} resetCSS>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Grid
              h="100vh"
              alignItems="center"
              justifyContent="center"
              p={{
                base: 7,
                sm: 7,
              }}
            >
              <GridItem>
                <Section size={{ base: "sm", sm: "sm", md: "md" }}>
                  {children}
                </Section>
              </GridItem>
            </Grid>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
