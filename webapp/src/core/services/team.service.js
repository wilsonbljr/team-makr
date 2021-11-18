import api from './api.service';
import authHeader from '../../auth/auth.header';

// Get teams from a certain user
export const getUserTeams = async (id, setData) => {
    const status = await api.get('/person/' + id + '/team', { headers: authHeader() })
        .then(res => {
            setData(res.data);
            return res.status;
        })
        .catch(err => err.message);
    return status;
}

// Get method for team information
export const getTeam = async (teamId, setData) => {
    const status = await api.get('/team/' + teamId, { headers: authHeader() })
        .then(res => {
            // Set state inside component with the team info
            setData(res.data[0]);
            return res.status;
        }).catch(err => err.message);
    return status;
}

// Post method to create team
export const createTeam = async (name, description, userId) => {
    const status = await api.post('/team', { name, description }, { headers: authHeader() })
        .then(async (res) => {
            // Makes the user that created the team its Leader
            await api.put('/person/' + userId + '/team/' + res.data.id,
                { user_active: true, leader: true },
                { headers: authHeader() });
            return res.status;
        }).catch(err => err.message);
    return status;
}