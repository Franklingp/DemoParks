import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
    const [userName, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = e => {
        switch(e.target.name){
            case("userName"):
                setUser(e.target.value);
                break;
            case("password"):
                setPassword(e.target.value);
                break;
            default:
                alert("Error en el formulario");
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(userName, password);
    }

    return (
        <section>
            <h1> Login </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userName" value={userName} onChange={handleChange} placeholder="Username"/>
                <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password"/>
                <input type="submit" value="Submit" disabled={!userName || !password}/>
            </form>

        </section>
    )
}

export default withRouter(Login)
