import React, { useEffect, useState } from 'react';
import login from '../../services/auth';

const Home = () => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const token = login("sana@gmail.com", "minatozaki")
        return token
    });

    return (
        <section>
            <p>Home</p>
            <button onClick={() => setToken(login("sana@gmail.com","minatozaki"))} >aaaa</button>
        </section>
    )
}


export default Home;