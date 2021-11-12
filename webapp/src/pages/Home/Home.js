import React, { useEffect, useState } from 'react';
import { getUser } from '../../services/user';

const Home = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        getUser(sessionStorage.getItem('user'), setUser);
    }, {})

    return (
        <section>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.pronoun}</p>
            <p>{user.email}</p>
            <p>{user.phone_number}</p>    
        </section>
    )
}


export default Home;