import React, { useState, useEffect } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Button, ButtonGroup } from '@chakra-ui/react'
// import AddIcon from '@mui/icons-material/Add';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    TableContainer,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,

} from '@chakra-ui/react'

const GetData = () => {

    // post request to add user data.

    const [data, setData] = useState({
        name: '',
        email: '',
        mobile: '',
        phone: '',
        address: '',
        designation: '',
    })

    const url = "/api/"

    const navigate = useNavigate()

    const SubmitData = (e) => {
        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            email: data.email,
            mobile: data.mobile,
            phone: data.phone,
            address: data.address,
            designation: data.designation,
        })
            .then(res => {
                console.log(res.data)
                window.location.href = '/detail'
            })

            .catch(err => {
                console.log('Error Occur Submiting data', err)
            })
            onClose();
    };
    // post request to add user data.

    // Add user popup model form variables.
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('half')


    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    // End Add user model form variables

    //get request to fetch user data.

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        Axios.get('/api/')
            .then(
                (res) => {
                    setIsLoaded(true);
                    setItems(res.data);
                },
            )
            .catch(error => {
                setIsLoaded(true);
                setError(error);
            })
    }, [])
    //End get request to fetch user data.

    //delete request to delete particular user.
    const handleDelete = (id) => {
        Axios.delete(`/api/${id}/`, {
        })
            .then(() => {
                // Remove the deleted item from the items state
                setItems(prevItems => prevItems.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error('Error deleting item:', error);
            });
    };
    //End delete request to delete particular user.

    // const handleUpdate = (id) => {
    //     // console.log(items[id-1])
    //     let newItems = items.find(item => item.id === id);

    //     setName(newItems.name);
    //     setRoll(newItems.roll);
    //     setCity(newItems.city);
    //     setId(newItems.id);

    // };


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>All Users</h1><br />

                {/* modal popup open button For add new user */}
                <Button colorScheme='blue' ml='4' onClick={() => {
                    setSize('xl')
                    setOverlay(<OverlayOne />)
                    onOpen()
                }} id="button">Add user</Button>
                {/* modal popup open button For add new user */}

                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Mobile</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {items.map((item, uid) => (
                                <Tr key={uid}>
                                    <Td>{item.id}</Td>
                                    <Td>
                                        <Link to={`/profile/${item.id}`} style={{ textDecoration: 'none' }}>{item.name}</Link>
                                    </Td>
                                    <Td>{item.email}</Td>
                                    <Td>{item.mobile}</Td>
                                    <Td>
                                        <button onClick={() => handleDelete(item.id)} className="btn btn-outline-danger" toltip="Delete"><DeleteOutlineIcon /></button>

                                        <Link to={`/update/${item.id}`} className="btn btn-outline-success">
                                            <BorderColorIcon />
                                        </Link>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>#</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Mobile</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>

                {/* modal popup For add new user */}

                <Modal
                    size={size}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    {overlay}
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create your account</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>First name</FormLabel>
                                <Input type='text' onChange={(e) => setData({ ...data, name: e.target.value })}
                                    value={data.name}
                                    name="name" placeholder='First name' />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Email</FormLabel>
                                <Input type="email"
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                    value={data.email}
                                    name="email" placeholder='Email' />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Mobile</FormLabel>
                                <Input type="number"
                                    id="mobile"
                                    onChange={(e) => setData({ ...data, mobile: e.target.value })}
                                    value={data.mobile}
                                    name="mobile" placeholder='Mobile' />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Phone</FormLabel>
                                <Input id="phone"
                                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                                    value={data.phone}
                                    name="phone" placeholder='Phone' />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Address</FormLabel>
                                <Input type="text"
                                    id="address"
                                    onChange={(e) => setData({ ...data, address: e.target.value })}
                                    value={data.address}
                                    name="address" placeholder='Address' />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Designation</FormLabel>
                                <Input type="text"
                                    id="designation"
                                    onChange={(e) => setData({ ...data, designation: e.target.value })}
                                    value={data.designation}
                                    name="designation" placeholder='Designation' />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={SubmitData}>
                                Save
                            </Button>
                            <Button colorScheme='red' onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                {/* End modal popup */}
            </>


        );
    }
}

export default GetData