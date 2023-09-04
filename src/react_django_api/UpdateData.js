import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateData.css';

const UpdateData = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [designation, setDesignation] = useState("");

    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        Axios.get(`/api/${id}/`)
            .then((res) => {
                const data = res.data;
                setName(data.name);
                setEmail(data.email);
                setMobile(data.mobile);
                setPhone(data.phone);
                setAddress(data.address);
                setDesignation(data.designation);
            })
            .catch((err) => {
                console.log('Error While fetching Data', err);
            })
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const UpdateRecord = { name, email, mobile, phone, address, designation };

        Axios.put(`/api/${id}/`, UpdateRecord)
            .then(res => {
                console.log('record Updaated Successfully', res.data)
                navigate('/');
            })
            .catch((err) => {
                console.log('Error while updating Record', err);
            })
    };

    return (
        <div className="main-update">
            {/* <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <input type="text" name="roll" value={roll} onChange={(e) => setRoll(e.target.value)} /><br />
                <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} /><br />
                <button type="submit">Submit</button>
            </form> */}


            <div class="form-container">
                <div class="form">
                    <form onSubmit={handleSubmit}>
                        <span class="heading">Update User</span>
                        <input type="text" class="input" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input id="roll" type="email" class="input" name="roll" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input id="city" type="number" class="input" name="city" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        <input id="city" type="number" class="input" name="city" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <input id="city" type="text" class="input" name="city" value={address} onChange={(e) => setAddress(e.target.value)} />
                        <input id="city" type="text" class="input" name="city" value={designation} onChange={(e) => setDesignation(e.target.value)} />
                        <div class="button-container">
                            <div class="send-button">
                                <button type="submit" className='bt'>Submit</button>
                            </div>
                            <div class="reset-button-container">
                                <div id="reset-btn" class="reset-button">Reset</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateData