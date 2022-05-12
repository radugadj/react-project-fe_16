import React from 'react';
import {Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { useAuth } from '../hooks/use-auth';
import {removeUser} from '../redux/slice/userSlice';

const HomePage = () => {
    const dispatch = useDispatch();

    const {isAuth, email} = useAuth();

    return (isAuth ? (
        <div>
            <h3>Привет</h3>

            <button
                onClick={()=> dispatch(removeUser())}
            >Выход{email}</button>
        </div>
    ) : (
        <Redirect to="/" />
    ))
}

export default HomePage