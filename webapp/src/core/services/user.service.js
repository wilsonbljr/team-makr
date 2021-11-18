import api from './api.service';

// Get user info
export const getUser = async (id, setData, token) => {
    const status = await api.get('/person/' + id, { headers: { Authorization: 'Bearer ' + token } })
        .then(res => {
            setData(res.data[0]);
            return res.status;
        })
        .catch(err => err.message);
    return status;
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
