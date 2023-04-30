import React, { createContext, useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';




const SignUp = () => {

    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);


    const handleSignUp = (event) => {
        setError('')
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirm.value;
        console.log(email, password, confirmPass);

        if(password !== confirmPass){
            setError('Your password did not match')
            return;
        }
        else if(password.length < 6){
            setError('Password must be 6 charecter or longer')
            return;
        }

        createUser(email, password)
        .then(result => {
            const loggedUaer = result.user;
            console.log(loggedUaer);
            form.reset();
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
    }



    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form action="" onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' required placeholder='Your Email' />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' required placeholder='Your Password' />
                </div>
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name='confirm' required placeholder='Your Password' />
                </div>

                <p className='text-error'>{error}</p>

                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p className='re-directs'><small>Already have an account? <Link to="/login">Login</Link>   </small></p>
        </div>
    );
};

export default SignUp;