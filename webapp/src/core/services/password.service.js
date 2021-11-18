import api from './api.service';

// Post method to send pw reset token via email
export const forgotPasswordEmail = async (email) => {
    const res = await api.post('/person/password-reset/token', { email })
        .then(res => res)
        .catch(err => err.message);
    return res;
}

// Post method to change pw with token
export const resetPassword = async (email, password, password_token) => {
    const res = await api.post('/person/password-reset', { email, password, password_token })
        .then(res => res)
        .catch(err => err.message);
    return res;
}
