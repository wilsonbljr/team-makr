import api from './api.service';

// Get skills from a certain user
export const getUserSkills = async (id, setData, token) => {
    await api.get('/person/' + id + '/skill', { headers: { Authorization: 'Bearer ' + token } })
        .then(res => {
            setData(res.data);
        })
        .catch(err => err.message);
}