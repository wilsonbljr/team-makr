import api from './api.service';

// Get skills from a certain user
export const getUserSkills = async (id, setData, token) => {
    await api.get('/person/' + id + '/skill', { headers: { Authorization: 'Bearer ' + token } })
        .then(res => {
            setData(res.data);
        })
        .catch(err => err.message);
}

// Get all skills in database for autocomplete
export const getAllSkills = async (setData, token) => {
    await api.get('/skill', { headers: { Authorization: 'Bearer ' + token } })
        .then(res => {
            setData(res.data);
        })
        .catch(err => err.message);
}

// Add relationship between user and skill
export const addUserToSkill = async (user, skillId, level, token) => {
    const status = await api.put('/person/' + user + '/skill/' + skillId, { level }, { headers: { Authorization: 'Bearer ' + token } })
        .then(res => res.status)
        .catch(err => err.message);
    return status;
}

// Removes relationship between user and skill
export const removeUserToSkill = async (user, skillId, token) => {
    const status = await api.delete('/person/' + user + '/skill/' + skillId, { headers: { Authorization: 'Bearer ' + token } })
        .then(res => res.status)
        .catch(err => err.message);
    return status;
}

// Admin methods
// Add new skill
export const addSkill = async (skill, token) => {
    const status = await api.post('/skill', skill, { headers: { Authorization: 'Bearer ' + token } })
        .then(res => res.status)
        .catch(err => err.message);
    return status;
}

// Edit skill
export const editSkill = async (skillId, skill, token) => {
    const status = await api.put('/skill/' + skillId, skill, { headers: { Authorization: 'Bearer ' + token } })
        .then(res => res.status)
        .catch(err => err.message);
    return status;
}

// Remove skill
export const deleteSkill = async (skillId, token) => {
    const status = await api.delete('/skill/' + skillId, { headers: { Authorization: 'Bearer ' + token } })
        .then(res => res.status)
        .catch(err => err.message);
    return status;
}