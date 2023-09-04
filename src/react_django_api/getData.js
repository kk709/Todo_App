import React, { useState, useEffect } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
// import AddIcon from '@mui/icons-material/Add';
import Axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    // TableCaption,
    TableContainer,
} from '@chakra-ui/react'

const GetData = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // const url = '/api/'

    useEffect(() => {
        Axios.get('/api/')
            .then(
                (res) => {
                    setIsLoaded(true);
                    setItems(res.data);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
            )
            .catch(error => {
                setIsLoaded(true);
                setError(error);
            })
    }, [])

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
                <h1>All Users</h1><br />
                <NavLink to="/addItem" className="btn btn-outline-primary" id="button">Add User</NavLink>
                {/* <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Monile</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, uid) => (
                            <tr key={uid}>
                                <td>{item.id}</td>
                                <td>
                                    <Link to={`/profile/${item.id}`} style={{ color: 'black', textDecoration: 'none' }}>{item.name}</Link>
                                </td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>
                                    <button onClick={() => handleDelete(item.id)} className="btn btn-outline-danger" toltip="Delete"><DeleteOutlineIcon /></button>

                                    <Link to={`/update/${item.id}`} className="btn btn-outline-success">
                                        <BorderColorIcon />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}

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
            </>


        );
    }
}

export default GetData