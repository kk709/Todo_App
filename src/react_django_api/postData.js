import React, { useState } from 'react'
import Axios from 'axios';
import './postData.css';

const PostData = () => {

    const url = "/api/"

    const SubmitData = (e) => {
        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            roll: data.roll,
            city: data.city,
        })
            .then(res => {
                console.log(res.data)
                window.location.href = "/"
            })

            .catch(err => {
                console.log('Error Occur Submiting data', err)
            })
    };

    const [data, setData] = useState({
        name: '',
        roll: '',
        city: '',
    })
    // console.log(data)
    return (
        <>
            <div class="login-box">

                <form onSubmit={(e) => SubmitData(e)}>
                    <p id="heading">Add User</p>
                    <div class="user-box">
                        <input type="text"
                            id="name"
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            value={data.name}
                            name="name" />
                        <label>Name</label>
                    </div>
                    <div class="user-box">
                        <input type="number"
                            onChange={(e) => setData({ ...data, roll: e.target.value })}
                            value={data.roll}
                            name="roll" />
                        <label>Roll Number</label>
                    </div>
                    <div class="user-box">
                        <input type="text"
                            id="city"
                            onChange={(e) => setData({ ...data, city: e.target.value })}
                            value={data.city}
                            name="city" />
                        <label>City</label>
                    </div>
                    <center>
                        <button type="submit" className='bt'>
                            Submit
                            <span></span>
                        </button>
                    </center>
                </form>
            </div>
        </>
    );
}

export default PostData