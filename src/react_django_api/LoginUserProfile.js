import { React, useEffect, useState } from "react";


const Profile = () => {
    const [userData, setUserData] = useState(null); // State to store user data
    const token = localStorage.getItem('jwt');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:7000/users/?jwt=${token}`, {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data); // Store the fetched user data in state
                } else {
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error while fetching user data', error);
            }
        };

        fetchData(); // Call the async function inside useEffect
    }, [token]);

    return (
        <div>
            {userData ? (
                <div>
                    <section className="vh-100" style={{ backgroundColor: "#9de2ff" }}>
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col col-md-9 col-lg-7 col-xl-5">
                                <h1 className="d-flex justify-content-center align-items-center">User Profile</h1>
                                    <div className="card" style={{ borderRadius: "15px" }}>
                                        <div className="card-body p-4">
                                            <div className="d-flex text-black">
                                                <div className="flex-shrink-0">
                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                                        alt="Generic placeholder pic" className="img-fluid"
                                                        style={{ width: "180px", borderRadius: "10px" }} />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 className="mb-1">{userData.name}</h5>
                                                    <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>Senior Journalist</p>
                                                    <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>{userData.email}</p>
                                                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                                        style={{ backgroundColor: "#efefef" }}>
                                                        <div>
                                                            <p className="small text-muted mb-1">Articles</p>
                                                            <p className="mb-0">41</p>
                                                        </div>
                                                        <div className="px-3">
                                                            <p className="small text-muted mb-1">Followers</p>
                                                            <p className="mb-0">976</p>
                                                        </div>
                                                        <div>
                                                            <p className="small text-muted mb-1">Rating</p>
                                                            <p className="mb-0">8.5</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex pt-1">
                                                        <button type="button" className="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                                                        <button type="button" className="btn btn-primary flex-grow-1">Follow</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;