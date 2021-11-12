import api from './api';
import authHeader from './auth.header';

export const getUser = async (id, setDado) => {
    const res = await api.get('/person/' + id, { headers: authHeader() });
    setDado(res.data[0]);
}

export const getUserSkills = async (id) => {
    await api.get('/person/' + id + '/skill', { headers: authHeader() })
}

export const getUserTeams = async (id) => {
    await api.get('/person/' + id + '/team', { headers: authHeader() })
}