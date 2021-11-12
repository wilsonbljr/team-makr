import api from './api';
import authHeader from './auth.header';

export const getUser = async (id, setData) => {
    const res = await api.get('/person/' + id, { headers: authHeader() });
    setData(res.data[0]);
}

export const getUserSkills = async (id, setData) => {
    const res = await api.get('/person/' + id + '/skill', { headers: authHeader() })
    setData(res.data);
}

export const getUserTeams = async (id, setData) => {
    const res = await api.get('/person/' + id + '/team', { headers: authHeader() })
    setData(res.data);
}