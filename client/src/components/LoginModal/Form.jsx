import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

function Form() {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({email: '', password: ''});
    const [addUser] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        //handle form submission here. will transfer from signup/login page
    };
    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        //handle form submission here. will transfer from signup/login page
        const mutationResponse = await addUser({
            variables: {
                username: form.username,
                email: form.email,
                password: form.password,
                firstName: form.firstName,
                lastName: form.lastName
            }
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    return (
        <div>
            {console.log(event.target.value)}
            {isLogin ? (
                <div>
                    <button onClick={() => setIsLogin(false)}>Signup</button>
                    <div className='modal-header'>Login</div>
                    <form onSubmit={handleLoginSubmit}>
                        <input name='username' type="text" placeholder='Username' onChange={handleInputChange} />
                        <input name='password' type="password" placeholder='Password' onChange={handleInputChange} />
                        <button type='submit'>Login</button>
                    </form>
                </div>
            ) : (
                <div>
                    <button onClick={() => setIsLogin(true)}>Login</button>
                    <div className='modal-header'>Signup</div>
                    <form onSubmit={handleSignupSubmit}>
                        <input 
                            name='firstName'
                            type='firstName'
                            id='firstName'
                            placeholder='First Name'
                            onChange={handleInputChange} />
                        <input 
                            name='lastName'
                            type='lastName'
                            id='lastName'
                            placeholder='Last Name'
                            onChange={handleInputChange} />
                        <input 
                            name='username' 
                            type='username'
                            id='username'
                            placeholder='Username' 
                            onChange={handleInputChange} />
                        <input 
                            name='email'
                            type='email'
                            id='email'
                            placeholder='Email'
                            onChange={handleInputChange} />
                        <input 
                            name='password'
                            type='password'
                            id='password'
                            placeholder='Password'
                            onChange={handleInputChange} />
                        <button type='submit'>Signup</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Form;