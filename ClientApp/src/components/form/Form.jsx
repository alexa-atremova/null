import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import "./style.css";

const LoginForm = () => {

    const [apiData, setApiData] = useState("");

    useEffect(() => {
        // Вы можете менять путь в соответствии с вашими маршрутами API
        axios.get('https://localhost:44402/api/Api/data')
            .then(response => {
                setApiData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="login-form">
            <h2 className="form-title">Welcome {apiData}</h2>
            <div className="form-container">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="login-button">Log In</button>
                <button className="google-login-button">Log In with Google</button>
            </div>
        </div>
    );
};

export default LoginForm;






