import api from './api.service';
import authHeader from '../../auth/auth.header';
import jwt_decode from 'jwt-decode';

// Post method for login
export const loginService = async (email, password) => {
    const token = await api.post('/person/login', { email, password })
        .then(res => {
            if (res.status !== 204) {
                throw Error("Can't login, please try again")
            };
            return res.headers.authorization;
        })
        .catch(err => err.message);
    // Decodes JWT Token to get paylod: user id
    const decoded = await jwt_decode(token);
    return { token, userId: decoded.id };
}

// Get method for logout
export const logoutService = async () => {
    const res = await api.get('/person/logout', { headers: authHeader() })
        .then(res => {
            if (res.status !== 204) {
                throw Error("Can't logout, please try again");
            };
            return res;
        })
        .catch(err => err.message);
    return res;
}