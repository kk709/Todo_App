import React, { useState, useEffect } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
// import AddIcon from '@mui/icons-material/Add';
import Axios from 'axios';
import { NavLink, Link } from 'react-router-dom';

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
                <NavLink to="/addItem" className="btn btn-outline-primary text-white" id="button">Add New User</NavLink>
                <table className="table">
                    <thead className='text-white'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Roll No</th>
                            <th scope="col">City</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {items.map(item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.roll}</td>
                                <td>{item.city}</td>
                                <td>
                                    <button onClick={() => handleDelete(item.id)} className="btn btn-outline-danger"
                                        style={{ color: 'white' }} toltip="Delete"><DeleteOutlineIcon /></button>

                                    <Link to={`/update/${item.id}`} className="btn btn-outline-success">
                                        <BorderColorIcon />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>


        );
    }
}

export default GetData