import api from './api.service';

// Get teams from a certain user
export const getUserTeams = async (id, setData, token) => {
    const status = await api.get('/person/' + id + '/team', { headers: { Authorization: 'Bearer ' + token }, params: { active: true } })
        .then(res => {
            setData(res.data);
            return res.status;
        })
        .catch(err => err.message);
    return status;
}

// Get method for team information
export const getTeam = async (teamId, setData, token) => {
    const status = await api.get('/team/' + teamId, { headers: { Authorization: 'Bearer ' + token } })
        .then(res => {
            // Set state inside component with the team info
            setData(res.data[0]);
            return res.status;
        }).catch(err => err.message);
    return status;
}

// Post method to create team
export const createTeam = async (name, description, userId, token) => {
    const status = await api.post('/team', { name, description }, { headers: { Authorization: 'Bearer ' + token } })
        .then(async (res) => {
            // Makes the user that created the team its Leader
            await api.put('/person/' + userId + '/team/' + res.data.id,
                { user_active: true, leader: true },
                { headers: { Authorization: 'Bearer ' + token } });
            return res.status;
        }).catch(err => err.message);
    return status;
}

// Put method to update team
export const editTeam = async (teamId, team, token) => {
    const status = await api.put('/team/' + teamId, team, { headers: { Authorization: 'Bearer ' + token } })
        .then(res => res.status)
        .catch(err => err.message);
    return status;
}

// Put method to add a user to team
// Add relationship between user and skill
export const addUserToTeam = async (userId, teamId, token) => {
    const status = await api.put('/person/' + userId + '/team/' + teamId, { user_active: true, leader: false }, { headers: { Authorization: 'Bearer ' + token } })
        .then(res => res.status)
        .catch(err => err.message);
    return status;
}


// Delete method that removes the person from team and then deletes it
export const leaveTeam = async (teamId, userId, users, token) => {
    const requestUser = users.find(user => {
        return user.id === userId
    });
    if (requestUser.leader === 1 || users.length === 1) {
        const res = await api.delete('/person/' + userId + '/team/' + teamId, { headers: { Authorization: 'Bearer ' + token } })
            .then(async res => {
                const response = await api.delete('/team/' + teamId, { headers: { Authorization: 'Bearer ' + token } });
                return response;
            })
            .catch(err => err.message);
        return res
    } else {
        const res = await api.delete('/person/' + userId + '/team/' + teamId, { headers: { Authorization: 'Bearer ' + token } })
            .catch(err => err.message);
        return res;
    }
}