import React, {useState} from 'react';
import { useUser } from '../contexts/UserContext';

const NavBar = () => {
    const {user} = useUser();
    return (
        <div className='navbar d-flex flex-row justify-content-between mx-4 rounded' >
            <h4 className='navbar-brand'>Edvora</h4>
            <div className='d-flex flex-row justify-content-around align-items-center'>
                <h5 className='fs-6'>{user.name}</h5>
                <img src={user.url} className="img-fluid profile mx-3" />
            </div>
        </div>
    )
}

export default NavBar