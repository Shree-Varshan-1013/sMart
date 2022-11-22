import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import PocketBase from 'pocketbase'
import Swal from 'sweetalert2';

export default function SignInForm() {

    const [details, setDetails] = useState({
        email: '',
        password: '',
    });

    const eventHandler = (event) => {
        setDetails({ ...details, [event.target.name]: event.target.value });
    }

    const client = new PocketBase('http://127.0.0.1:8090');

    const eventLogin = async () => {
        try {
            const authData = await client.collection('users').authWithPassword(
                details.email,
                details.password,
            );
            if (authData) {
                const record = await
                client.collection('users').getFirstListItem('username="Joker"',{});
                // console.log(localStorage.getItem('s-mart-username'));
                console.log(record.email);
                Swal.fire({
                    icon: 'success',
                    title: 'Yayy...',
                    text: 'Successfully Logged In!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        }
        catch (e) {
            const url = "https://sweetalert2.github.io/#usage";
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="\'{url}\'">Why do I have this issue?</a>'
            })
        }
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" name="email" value={details.email} onChange={eventHandler} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" name="password" value={details.password} onChange={eventHandler} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={eventLogin}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}