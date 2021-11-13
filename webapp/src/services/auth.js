import api from './api'
import authHeader from './auth.header';
import jwt_decode from "jwt-decode";

export const login = async (email, password) => {
    const res = await api.post('/person/login', { email, password })
    const decoded = await jwt_decode(res.headers.authorization)
    sessionStorage.setItem('token', res.headers.authorization)
    sessionStorage.setItem('user', decoded.id)
};

export const logout = async () => {
    await api.get('/person/logout', { headers: authHeader() });
    sessionStorage.removeItem('user');
}

export const registerUser = async (name, pronoun, phone_number, email, password) => {
    try {
        let firstName = '';
        let lastName = '';
        [firstName, lastName] = name.split(" ", 2);
        if (!lastName) {
            lastName = ' ';
        }
        const res = await api.post('/person', { firstName, lastName, pronoun, phone_number, email, password });
        return res;
    } catch (error) {
        return error.name;
    }
};

