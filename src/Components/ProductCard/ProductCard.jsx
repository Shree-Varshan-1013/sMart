import * as React from "react";
import { Box, Center, Image, Flex, Badge, Text, Spacer } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

export default function productCard(props) {
    return (
        <Center h="100vh">
            <Box maxW="320px" borderWidth="1px" borderRadius="md" shadow="md">
                <Image borderTopRadius="md" src="{props.product.image}" />
                <Box p="5">
                    <Flex align="baseline" mt={2}>
                        <Badge colorScheme="blue">{props.product.category}</Badge>
                        <Text
                            ml={3}
                            textTransform="uppercase"
                            fontSize="sm"
                            fontWeight="bold"
                            color="blue.800"
                        >
                            {props.product.brand}
                        </Text>
                    </Flex>
                    <Text mt={2} fontSize="3xl" fontWeight="bold" lineHeight="short">
                        {props.product.name}
                    </Text>
                    <Flex mt={2}>
                        <Text>${props.product.price}</Text>
                        <Spacer />
                        <Flex align="center">
                            <Box as={MdStar} color="orange.400" />
                            <Text ml={1} fontSize="sm">
                                <b>4.84</b> (190)
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Center>
    );
}