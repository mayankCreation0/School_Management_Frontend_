import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

function Signup() {
    const [input, setInput] = useState({
        'name':'',
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
        const res = await axios.post('http://localhost:5000/teachersignup', input)
        console.log(res)
    };
    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                    />
                </label><br/>
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
                <button type="submit">Signup</button>
            </form>
            <Link to='/'><button >
                Already have an account? Login
            </button></Link>
        </div>
    );
}

export default Signup;
