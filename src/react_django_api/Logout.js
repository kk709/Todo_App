import React from "react";
import Axios from "axios";
import './Login.css';


const Logout = () => {

    // const navigate = useNavigate()
    const url = "http://localhost:7000/logout/"

    const handleLogout = async () => {
        try {
            // Send a POST request to your Django API's logout endpoint
            const response = await Axios.post(url);

            // Clear the JWT token from localStorage (or sessionStorage if preferred)
            localStorage.removeItem('jwt');
            window.location.href = '/';
            // Redirect to the login page or update the UI as needed
        } catch (error) {
            // Handle logout error (e.g., network error)
            console.error('Logout failed:', error);
        }
    };

    return (
        <main>

            <div className="auth-form Box p-4 mt-3">
                <form data-turbo="false" onSubmit={handleLogout} accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="DHl_VqkDPRBMH7NvIuPoSOKI2mEu9SULyRWO98AQPj3rfKxs7rccVJqJ29ZVgvbfvTHo6dfQorhLZNbx8o9zYA" />
                    <h1 className="f2-light text-center" id="logout">Are you sure you want to sign out?</h1>
                    <input type="submit" value="Sign out" className="btn btn-block f4 py-3 mt-5" />
                </form>
            </div>

        </main>
    );
};

export default Logout;