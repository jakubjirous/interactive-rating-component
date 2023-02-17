"use client";

import Rating from "@/components/Rating";
import StarIcon from "@/theme/icons/StarIcon";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

export default function Page() {
  const router = useRouter();

  const [rating, setRating] = useState<number>();

  const ratings = useMemo(() => Array.from({ length: 5 }, (_, i) => i + 1), []);

  const handleRating = useCallback((rating: number) => {
    setRating(rating);
  }, []);

  const handleSubmit = useCallback(() => {
    if (router) {
      router.push(`/thank-you?rating=${rating}`);
    }
  }, [router, rating]);

  return (
    <Flex direction="column" gap={{ base: 7, sm: 7, md: 9 }}>
      <Rating variant="readonly" size={{ base: "sm", sm: "sm", md: "md" }}>
        <StarIcon />
      </Rating>
      <Flex direction="column" gap="3">
        <Heading
          as="h1"
          fontSize={{
            base: "2xl",
            sm: "2xl",
            md: "3xl",
          }}
        >
          How did we do?
        </Heading>
        <Text>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Text>
      </Flex>
      <Flex
        direction="row"
        justifyContent="space-between"
        flexWrap="wrap"
        gap="2"
      >
        {ratings.map((value) => (
          <Rating
            key={value}
            as="button"
            variant="active"
            size={{ base: "sm", sm: "sm", md: "md" }}
            onClick={() => handleRating(value)}
            className={rating === value ? "active" : undefined}
          >
            <Text>{value}</Text>
          </Rating>
        ))}
      </Flex>
      <Button isDisabled={!rating} onClick={handleSubmit}>
        Submit
      </Button>
    </Flex>
  );
}
