'use client'

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

// interface Props {
//     children: React.ReactNode
// }

// const Links = ['Home']

// const NavLink = (props: Props) => {
//     const { children } = props

//     return (
//         <Box
//             as="a"
//             px={2}
//             py={1}
//             rounded={'md'}
//             _hover={{
//                 textDecoration: 'none',
//                 bg: useColorModeValue('gray.200', 'gray.700'),
//             }}
//             href={'#'}>
//             {children}
//         </Box>
//     )
// }

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const btn = localStorage.getItem('token');

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        {btn ? (
                            <Link to="/detail"><Box>Logo</Box></Link>
                        ) : (
                            <Link to="/"><Box>Logo</Box></Link>
                        )}
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            <Link to="/detail"><Box>Home</Box></Link>
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        {btn ? (

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={
                                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                        }
                                    />
                                </MenuButton>
                                <MenuList>
                                    <Link to="#"><MenuItem>User Profile</MenuItem></Link>
                                    <Link to="#"><MenuItem>Change Password</MenuItem></Link>
                                    <MenuDivider />
                                    <Link to="/logout"><MenuItem>Logout</MenuItem></Link>
                                </MenuList>
                            </Menu>
                        ) : (
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={
                                            'https://avatars.dicebear.com/api/male/username.svg'
                                        }
                                    />
                                </MenuButton>
                                <MenuList>
                                    <Link to="/"><MenuItem>Login</MenuItem></Link>
                                    <Link to="/@"><MenuItem>Register</MenuItem></Link>
                                </MenuList>
                            </Menu>
                        )}
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>

                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}