import React, {  useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

function Adminsignup() {
    const [input, setInput] = useState({
        'name': '',
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
        try {
            const res = await axios.post('http://localhost:5000/signup', input)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <div>
            <h1>Admin Signup</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                    />
                </label><br />
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
                <button type="submit">Admin Signup</button>
            </form>
            <Link to='/adminlogin'><button >
                Already have an account? Login
            </button></Link>
        </div>
    );
}

export default Adminsignup;
