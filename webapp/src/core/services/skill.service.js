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
    console.log(user)
    console.log(skillId)
    console.log(level)
    console.log(token)
    const status = await api.put('/person/' + user + '/skill/' + skillId, { level }, { headers: { Authorization: 'Bearer ' + token } })
        .then(res => res.status)
        .catch(err => err.message);
    console.log(status);
    return status;
}