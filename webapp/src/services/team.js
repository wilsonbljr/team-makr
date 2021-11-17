import api from './api';
import authHeader from './auth.header';

export const getTeam = async (teamId, setData) => {
    try {
        const res = await api.get('/team/' + teamId, { headers: authHeader() })
        setData(res.data[0])
        return res.status
    } catch (error) {
        return error
    }
}

export const createTeam = async (name, description, userId) => {
    try {
        const status = await api.post('/team', { name, description }, { headers: authHeader() }).then(async (res) => {
            await api.put('/person/' + userId + '/team/' + res.data.id,
                { user_active: true, leader: true },
                { headers: authHeader() })
            return res.status
        });
        return status;
    } catch (error) {
        return error
    }
}