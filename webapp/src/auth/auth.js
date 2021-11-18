import { loginService, logoutService } from '../core/services/login.service';

export const login = async (email, password) => {
    await loginService(email, password)
        .then(({ token, userId }) => {
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('userId', userId);
        })
        .catch(err => err.message)
}

export const logout = async () => {
    await logoutService()
        .then(() => {
            sessionStorage.removeItem('user');
        })
        .catch(err => err.message);
}