import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER, LOGIN } from '../../utils/mutations';


function showPassword() {
    var element = document.getElementById('showPassword')
    if (element.type === 'password') {
        element.type = 'text';
    } else {
        element.type = 'password'
    }
}

function Form() {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({firstName: '', lastName: '', username: '', email: '', password: ''});
    const [addUser, {signuperror}] = useMutation(ADD_USER);
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
        try {
            const mutationResponse = await addUser({
                variables: {
                    firstName: form.firstName,
                    lastName: form.lastName,
                    username: form.username,
                    email: form.email,
                    password: form.password,
                }
            });
            const token = mutationResponse.data.addUser.token;
            Auth.login(token);
        } catch (e) {
            console.log(e)
        }
    };

    
    return (
        <>
        <div className='overlay'></div>
        <div className='custom-modal-content'>
            {isLogin ? (
                <>
                <h2 className='modal-header'>Login</h2>
                <hr />
                <div>
                    <form className='modal-form-main' onSubmit={handleLoginSubmit}>
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
                                id='showPassword'
                                placeholder='Password'
                                onChange={handleInputChange}
                                />
                            </div>
                            <div className='modal-form'>
                                <label htmlFor="showPassword">Show Password</label>
                                <input className='show-password' type="checkbox" onClick={showPassword} />
                            </div>
                            {error ? (
                                <div className='error-text-div'>
                                  <p className="error-text">The provided credentials are incorrect</p>
                                </div>
                            ) : null}
                        <button className='form-submit' type='submit'>Login</button>
                    </form>
                </div>
                <button className='form-change' onClick={() => setIsLogin(false)}>Don't have an account? Signup here!</button>
                </>
            ) : (
                <>
                <h2 className='modal-header'>Signup</h2>
                <hr />
                <div>
                    <form className='modal-form-main' onSubmit={handleSignupSubmit}>
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
                                id='showPassword'
                                placeholder='Password'
                                onChange={handleInputChange} />
                        </div>
                        <div className='modal-form'>
                            <label htmlFor="showPassword">Show Password</label>
                            <input className='show-password' type="checkbox" onClick={showPassword} />
                        </div>
                        {signuperror ? (
                                <div className='error-text-div'>
                                  <p className="error-text">Please fill out each field</p>
                                </div>
                            ) : null}
                        <button className='form-submit' type='submit'>Signup</button>
                    </form>
                </div>
                <button className='form-change' onClick={() => setIsLogin(true)}>Already have an account? Login here!</button>
                </>
            )}
        </div>
        </>
    )
}

export default Form;