import React, { useContext } from 'react';
import './Header.css'
import Logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () =>{
        logOut()
        .then(result =>{})
        .catch(error =>{
            console.log(error);
        })
    }


    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>

                {
                    user && <span className='user'>Wellcome {user.email} <button onClick={handleLogOut} className='sign-out'>Sign Out</button></span>
                }
            </div>
        </div>
    );
};

export default Header;