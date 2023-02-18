import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [input, setInput] = useState({
        'email': '',
        'password': ''
    });
    const handleChange = (event) => {
        setInput({
            ...input, [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post('http://localhost:5000/teacherlogin', input)
        console.log(res.status);
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
            <Link to='/signup'><button >
                Need an account? Sign Up
            </button></Link>
        </div>
    );
}

export default Login;
