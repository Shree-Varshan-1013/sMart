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
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PocketBase from 'pocketbase'
import Swal from 'sweetalert2';

export default function SignInForm() {

    const navigate = useNavigate();

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
                localStorage.setItem('s-mart-email', details.email);
                localStorage.setItem('s-mart-cart', []);
                localStorage.setItem('s-mart-wishlist', []);

                Swal.fire({
                    icon: 'success',
                    title: 'Yayy...',
                    text: 'Successfully Logged In!',
                })

                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
        }
        catch (e) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="\'{url}\'">Why do I have this issue?</a>'
            })
        }
    }


    const eventSign = () => {
        navigate('/signup');
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
                    <Text align="center" pt={3}>
                        Don't have an account yet?{' '}
                        <Link color={'blue.400'} onClick={eventSign}>
                            Sign up
                        </Link>
                    </Text>
                </Box>
            </Stack>
        </Flex>
    );
}