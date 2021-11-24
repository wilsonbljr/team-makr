import api from './api.service';

// Get users based on name and skill, used for search
export const searchUsers = async (firstName, lastName, skillId, token) => {
    // Makes the object with only the received info
    const params = {
        ...(firstName && { firstName }),
        ...(lastName && { lastName }),
        ...(skillId && { skillId })
    };
    const res = await api.get('/person', { headers: { Authorization: 'Bearer ' + token }, params })
        .then(res => res)
        .catch(err => err.message);
    return res.data;
}

// Get user info for authentication
export const getUser = async (id, token) => {
    const data = await api.get('/person/' + id, { headers: { Authorization: 'Bearer ' + token } })
        .then(res => {
            return res.data[0];
        })
        .catch(err => err.message);
    return data;
}

// Get user info for profile page
export const getUserProfile = async (id, setData, token) => {
    await api.get('/person/' + id, { headers: { Authorization: 'Bearer ' + token } })
        .then(res => {
            setData(res.data[0]);
        })
        .catch(err => err.message);
}

// Register a new user
export const registerUser = async (name, pronoun, phone_number, email, password) => {
    const splitName = name.split(' ', 2);
    let firstName = splitName[0];
    let lastName = splitName[1];
    const res = await api.post('/person', { firstName, lastName, pronoun, phone_number, email, password })
        .then(res => res)
        .catch(err => err.message);
    return res;
}

// Update user
export const updateUser = async (userid, pronoun, phone_number, password, token) => {
    // Makes the object with only the received info
    const receivedObject = {
        ...(pronoun && { pronoun }),
        ...(phone_number && { phone_number }),
        ...(password && { password })
    };
    const res = await api.put('/person/' + userid, receivedObject, { headers: { Authorization: 'Bearer ' + token } })
        .then(res => res)
        .catch(err => err.message);
    return res;
}
