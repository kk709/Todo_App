import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './UpdateData.css';

const UpdateData = () => {

    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const [city, setCity] = useState("");

    const { id } = useParams();

    useEffect(() => {
        Axios.get(`/api/${id}//`)
            .then((res) => {
                const data = res.data;
                setName(data.name);
                setRoll(data.roll);
                setCity(data.city);
            })
            .catch((err) => {
                console.log('Error While fetching Data', err);
            })
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const UpdateRecord = { name, roll, city };

        Axios.put(`/api/${id}/`, UpdateRecord)
            .then(res => {
                console.log('record Updaated Successfully', res.data)
                window.location.href = "/";
            })
            .catch((err) => {
                console.log('Error while updating Record', err);
            })
    };

    return (
        <>
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
                        <input id="roll" type="number" class="input" name="roll" value={roll} onChange={(e) => setRoll(e.target.value)} />
                        <input id="city" type="text" class="input" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
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
        </>
    )
}

export default UpdateData