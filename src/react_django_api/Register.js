import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';



const Register = () => {

    const navigate = useNavigate()
    // const url = "http://localhost:7000/register/"

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:7000/register/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password,
            })
        });

        console.log('Response status:', response.status);

        if (response.ok) {
            alert('User created successfully.');
            // Registration successful, redirect or perform other actions
            setRedirect(true);
        } else {
            // Handle registration error, including email already exists
            const errorData = await response.json();
            if (errorData.email) {
                // Email already exists, display an error message to the user
                alert(errorData.email);
            } else {
                // Handle other registration errors
                console.error('Registration failed:', errorData);
            }
        }
    }

    if (redirect) {
        return navigate('/');
    }

    // const signUp = () => {
    //     Axios.post(url, {
    //         name: data.name,
    //         email: data.email,
    //         password: data.password
    //     })
    //         .then(res => {
    //             console.log(res.data)
    //             navigate('/');
    //         })

    //         .catch(err => {
    //             console.log('Error Occur Submiting data', err)
    //         })
    // }

    // const [data, setData] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    // })

    return (
        <section className="vh-90 mt-5">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="img-fluid" alt="Phone pic"/>
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={submit}>
                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-4">
                                <input type="TEXT" className="form-control form-control-lg" name="name" placeholder="Enter Name" 
                                    onChange={(e) => setName(e.target.value)} />
                                <label className="form-label">Enter Name</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="email" className="form-control form-control-lg" name="email" onChange={(e) => setEmail(e.target.value)} />
                                <label className="form-label">Email address</label>
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-4">
                                <input type="password" className="form-control form-control-lg" name="password" onChange={(e) => setPassword(e.target.value)} />
                                <label className="form-label">Password</label>
                            </div>

                            {/* <!-- Submit button --> */}
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

                            {/* <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                            </div>

                            <Link className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "3b5998"}} to="#!"
                                role="button">
                                <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
                            </Link>
                            <Link className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#55acee"}} to="#!"
                                role="button">
                                <i className="fab fa-twitter me-2"></i>Continue with Twitter</Link> */}

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;