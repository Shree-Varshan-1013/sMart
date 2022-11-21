//  create a horizontal card to display teammate name, image,  description and role using chakra ui
import React from 'react';
import { Box, Image, Text, Flex, Heading } from '@chakra-ui/react';

const TeammateCard = (teammate) => {
    return (
        <Box
            w="300px"
            h="400px"
            bg="white"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="10px"
            p="20px"
        >
            <Image
                src={teammate.image}
                alt={teammate.name}
                w="100%"
                h="200px"
                objectFit="cover"
                borderRadius="10px"
            />
            <Flex flexDirection="column" mt="20px">
                <Heading as="h3" size="md" color="gray.800">
                    {teammate.name}
                </Heading>
                <Text color="gray.600" mt="10px">
                    {teammate.role}
                </Text>
                <Text color="gray.500" mt="10px">
                    {teammate.description}
                </Text>
            </Flex>
        </Box>
    );
};

export default TeammateCard;