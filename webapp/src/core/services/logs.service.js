import api from './api.service';

// Get logs
export const getLogs = async (setData, token) => {
    await api.get('/log', { headers: { Authorization: 'Bearer ' + token } })
        .then(res => {
            setData(res.data);
        })
        .catch(err => err.message);
}