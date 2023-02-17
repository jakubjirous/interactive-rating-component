"use client";

import ThanksIcon from "@/theme/icons/ThanksIcon";
import { validateRange } from "@/utils/validators";
import { Badge, Flex, Heading, Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  const rating = validateRange(searchParams.get("rating"));

  return (
    <Flex
      direction="column"
      gap={{ base: 7, sm: 7, md: 9 }}
      alignItems="center"
      textAlign="center"
    >
      <ThanksIcon
        boxSize={{
          base: "36",
          sm: "36",
          md: "40",
        }}
      />
      <Badge>
        <Text mt={0.5}>You selected {rating} out of 5</Text>
      </Badge>
      <Flex direction="column" gap="3">
        <Heading
          as="h1"
          fontSize={{
            base: "2xl",
            sm: "2xl",
            md: "3xl",
          }}
        >
          Thank you!
        </Heading>
        <Text>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </Text>
      </Flex>
    </Flex>
  );
}
