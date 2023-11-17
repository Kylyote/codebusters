import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER, LOGIN } from '../../utils/mutations';

function Form() {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({email: '', password: ''});
    const [addUser] = useMutation(ADD_USER);
    const [login, { error }] = useMutation(LOGIN)

    const handleInputChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        //handle form submission here. will transfer from signup/login page
        try {
            const mutationResponse = await login ({
                variables: {
                    email: form.email,
                    password: form.password
                }
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token)
        } catch (e) {
            console.log(e)
        }
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
        <div className='modal-content'>
            {isLogin ? (
                <>
                <div>
                    <h2 className='modal-header'>Login</h2>
                    <hr />
                    <form style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} onSubmit={handleLoginSubmit}>
                        <div className='modal-form'>
                            <label htmlFor="email">Email:</label>
                            <input
                                name='email'
                                type='email'
                                id='email'
                                placeholder='Email'
                                onChange={handleInputChange} />
                        </div>
                        <div className='modal-form'>
                            <label htmlFor="password">Password:</label>
                            <input
                                name='password'
                                type='password'
                                id='password'
                                placeholder='Password'
                                onChange={handleInputChange} />
                            </div>
                            {error ? (
                                <div className='error-text-div'>
                                  <p className="error-text">The provided credentials are incorrect</p>
                                </div>
                            ) : null}
                        <button type='submit'>Login</button>
                    </form>
                </div>
                <div>
                    <button className='form-change' onClick={() => setIsLogin(false)}>Don't have an account? Signup here!</button>
                </div>
                </>
            ) : (
                <>
                <div>
                    <h2 className='modal-header'>Signup</h2>
                    <hr />
                    <form style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} onSubmit={handleSignupSubmit}>
                        <div className='modal-form'>
                            <label htmlFor="firstName">First Name:</label>
                            <input 
                                name='firstName'
                                type='firstName'
                                id='firstName'
                                placeholder='First Name'
                                onChange={handleInputChange} />
                        </div>
                        <div className='modal-form'>
                            <label htmlFor="lastName">Last Name:</label>
                            <input 
                                name='lastName'
                                type='lastName'
                                id='lastName'
                                placeholder='Last Name'
                                onChange={handleInputChange} />
                        </div>
                        <div className='modal-form'>
                            <label htmlFor="username">Username:</label>
                            <input 
                                name='username'
                                type='username'
                                id='username'
                                placeholder='Username'
                                onChange={handleInputChange} />
                        </div>
                        <div className='modal-form'>
                            <label htmlFor="email">Email:</label>
                            <input 
                                name='email'
                                type='email'
                                id='email'
                                placeholder='Email'
                                onChange={handleInputChange} />
                        </div>
                        <div className='modal-form'>
                            <label htmlFor="password">Password:</label>
                            <input 
                                name='password'
                                type='password'
                                id='password'
                                placeholder='Password'
                                onChange={handleInputChange} />
                        </div>
                        
                        <button type='submit'>Signup</button>
                    </form>
                </div>
                <button className='form-change' onClick={() => setIsLogin(true)}>Already have an account? Login here</button>
                </>
            )}
        </div>
    )
}

export default Form;