//  create a horizontal card to display teammate name, image,  description and role using chakra ui
import React from 'react';
import { Box, Image, Text, Flex, Heading, Stack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const TeammateCard = () => {

    const [team, setTeam] = useState([{
        name: '',
        image: '',
        description: '',
        role: '',
    }]);

    useEffect(() => {
        fetch("http://localhost:8000/teammates")
            .then((response) => response.json())
            .then((data) => setTeam(data))
    }, []);

    return (
        <Stack spacing={9} direction="row">
            {
                team.map((teammate) => {
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
                                w="200px"
                                h="200px"
                                objectFit="cover"
                                borderRadius="12px"
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
                        </Box>)
                })
            }
        </Stack>

    );
};

export default TeammateCard;