// 'use client'

import {
    Button,
    Checkbox,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
} from '@chakra-ui/react'
import  Axios  from 'axios'
import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const url = "http://localhost:7000/login/"

    const sinIn = async () => {

        try {
            const response = await Axios.post(url, userData);
            const { jwt } = response.data;
      
            // Store the JWT token securely (e.g., in localStorage)
            localStorage.setItem('token', jwt);
      
            // Redirect to a protected route or update the UI as needed
          } catch (error) {
            // Handle login error (display error message, etc.)
            console.error('Login failed:', error);
          }

        // console.log({
        //     email: userData.email,
        //     password: userData.password,
        // })


        window.location.href = '/detail';
    }

    return (
        <Stack minH={'88vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" name="email" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" name="password" value={userData.password} onChange={(e) => setUserData({...userData, password: e.target.value})} />
                    </FormControl>
                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            <Checkbox>Remember me</Checkbox>
                            {/* <Text color={'blue.500'}>Forgot password?</Text> */}
                            <Text>Don't have an account!<Link to="/@">Sign up</Link></Text>
                        </Stack>
                        <Button colorScheme={'blue'} variant={'solid'} onClick={sinIn}>
                            Sign in
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                    }
                />
            </Flex>
        </Stack>
    )
}

const Register = () => {
    
    const navigate = useNavigate()
    const url = "http://localhost:7000/register/"


    const signUp = () => {
        Axios.post(url, {
            name: data.name,
            email: data.email,
            password: data.password
        })
        .then(res => {
            console.log(res.data)
            navigate('/');
        })

        .catch(err => {
            console.log('Error Occur Submiting data', err)
        })
    }

    const [ data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    return (
        <Stack minH={'88vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'}>Register</Heading>
                    <FormControl id="name">
                        <FormLabel>Name</FormLabel>
                        <Input type="text" placeholder='Your Name' name="name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" name="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" name="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                    </FormControl>
                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            {/* <Checkbox>Remember me</Checkbox> */}
                            {/* <Text color={'blue.500'}>Forgot password?</Text> */}
                            <Text>Already have an account! <Link to="/">Sign In</Link> </Text>
                        </Stack>
                        <Button colorScheme={'blue'} variant={'solid'} onClick={signUp} type='submit'>
                            Sign up
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                    }
                />
            </Flex>
        </Stack>
    )
}

const Logout = () => {

    const navigate = useNavigate()
    const url = "http://localhost:7000/logout/"

    const handleLogout = async () => {
      try {
        // Send a POST request to your Django API's logout endpoint
        const response = await Axios.post(url);
  
        // Clear the JWT token from localStorage (or sessionStorage if preferred)
        localStorage.removeItem('token');
        window.location.href = '/';
        // Redirect to the login page or update the UI as needed
      } catch (error) {
        // Handle logout error (e.g., network error)
        console.error('Logout failed:', error);
      }
    };
  
    return (
      <div>
        <h2>Logout</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };

export { Login, Register, Logout };