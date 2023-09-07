import React from "react";
import './Home.scss';

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <>
            <div className="footer">
                    <p>© {year} Technical Support. All Rights Reserved | Terms Conditions </p>
            </div>
        </>
    );
}

export default Footer;