import React, { useState } from 'react'
import Axios from 'axios';
import './postData.css';
import { useNavigate } from 'react-router-dom';

const PostData = () => {

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
                navigate('/');
            })

            .catch(err => {
                console.log('Error Occur Submiting data', err)
            })
    };

    const [data, setData] = useState({
        name: '',
        email: '',
        mobile: '',
        phone: '',
        address: '',
        designation: '',
    })
    // console.log(data)
    return (
        <div className='main-post'>
            <div class="login-box">

                <form onSubmit={(e) => SubmitData(e)}>
                    <p id="heading">Add New User</p>
                    <div class="user-box">
                        <input type="text"
                            id="name"
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            value={data.name}
                            name="name" />
                        <label>Name</label>
                    </div>
                    <div class="user-box">
                        <input type="email"
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            value={data.email}
                            name="email" />
                        <label>Email</label>
                    </div>
                    <div class="user-box">
                        <input type="number"
                            id="mobile"
                            onChange={(e) => setData({ ...data, mobile: e.target.value })}
                            value={data.mobile}
                            name="mobile" />
                        <label>Mobile</label>
                    </div>
                    <div class="user-box">
                        <input type="number"
                            id="phone"
                            onChange={(e) => setData({ ...data, phone: e.target.value })}
                            value={data.phone}
                            name="phone" />
                        <label>Phone</label>
                    </div>
                    <div class="user-box">
                        <input type="text"
                            id="address"
                            onChange={(e) => setData({ ...data, address: e.target.value })}
                            value={data.address}
                            name="address" />
                        <label>Address</label>
                    </div>
                    <div class="user-box">
                        <input type="text"
                            id="designation"
                            onChange={(e) => setData({ ...data, designation: e.target.value })}
                            value={data.designation}
                            name="designation" />
                        <label>Designation</label>
                    </div>
                    <center>
                        <button type="submit" className='bt'>
                            Submit
                            <span></span>
                        </button>
                    </center>
                </form>
            </div>
        </div>
    );
}

export default PostData