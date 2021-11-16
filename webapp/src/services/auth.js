import api from './api'
import authHeader from './auth.header'
import jwt_decode from "jwt-decode"

export const login = async (email, password) => {
    const res = await api.post('/person/login', { email, password })
    const decoded = await jwt_decode(res.headers.authorization)
    sessionStorage.setItem('token', res.headers.authorization)
    sessionStorage.setItem('user', decoded.id)
}

export const logout = async () => {
    try {
        const res = await api.get('/person/logout', { headers: authHeader() })
        sessionStorage.removeItem('user')
        return res
    } catch (error) {
        return error.name
    }
}

export const registerUser = async (name, pronoun, phone_number, email, password) => {
    try {
        let firstName = ''
        let lastName = ''
        [firstName, lastName] = name.split(" ", 2)
        if (!lastName) {
            lastName = ' '
        }
        const res = await api.post('/person', { firstName, lastName, pronoun, phone_number, email, password })
        return res
    } catch (error) {
        return error.name
    }
}

export const updateUser = async (userid, pronoun, phone_number, password) => {
    try {
        const receivedObject = {
            ...(pronoun && { pronoun }),
            ...(phone_number && { phone_number }),
            ...(password && { password })
        }
        console.log(receivedObject)
        const res = await api.put('/person/' + userid, receivedObject, { headers: authHeader() })
        return res
    } catch (error) {
        return error.name
    }
}

export const forgotPasswordEmail = async (email) => {
    try {
        const res = await api.post('/person/password-reset/token', { email })
        return res
    } catch (error) {
        return error.name
    }
}

export const resetPassword = async (email, password, password_token) => {
    try {
        const res = await api.post('/person/password-reset', { email, password, password_token })
        return res
    } catch (error) {
        return error.name
    }
}
