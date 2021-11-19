import api from '../core/services/api.service';
import jwt_decode from 'jwt-decode';

export const login = async (email, password) => {
    const res = await api.post('/person/login', { email, password })
        .then(res => {
            if (res.status !== 204) {
                throw Error("Can't login, please try again")
            };
            return res;
        })
        .catch(err => err.message);
    // Decodes JWT Token to get paylod: user id
    const decoded = await jwt_decode(res.headers.authorization);
    return { token: res.headers.authorization, userId: decoded.id, status: res.status};
}

export const logout = async (token) => {
    const res = await api.get('/person/logout', { headers: { Authorization: 'Bearer ' + token } })
        .then(res => {
            if (res.status !== 204) {
                throw Error("Can't logout, please try again");
            };
            return res;
        })
        .catch(err => err.message);
    return res;
}