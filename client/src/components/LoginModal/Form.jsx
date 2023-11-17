import React, { useState } from 'react';

function Form() {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({email: '', password: ''});

    const handleInputChange = event => {
        setForm({...form, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        //handle form submission here. will transfer from signup/login page
    };

    return (
        <div className='modal-dialog'>
            

            {isLogin ? (
                <div>
                    <button onClick={() => setIsLogin(false)}>Signup</button>
                    <div className='modal-header'>Login</div>
                    <form onSubmit={handleSubmit}>
                        <input name='username' type="text" placeholder='Username' onChange={handleInputChange} />
                        <input name='password' type="password" placeholder='Password' onChange={handleInputChange} />
                        <button type='submit'>Login</button>
                    </form>
                </div>
            ) : (
                <div>
                    <button onClick={() => setIsLogin(true)}>Login</button>
                    <div className='modal-header'>Signup</div>
                    <form onSubmit={handleSubmit}>
                        <input name='firstname' type="text" placeholder='First Name' onChange={handleInputChange} />
                        <input name='lastname' type="text" placeholder='Last Name' onChange={handleInputChange} />
                        <input name='username' type="text" placeholder='Username' onChange={handleInputChange} />
                        <input name='email' type="email" placeholder='Email' onChange={handleInputChange} />
                        <input name='password' type="password" placeholder='Password' onChange={handleInputChange} />
                        <button type='submit'>Signup</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Form;