import api from './api.service';
import authHeader from '../../auth/auth.header';

// Get skills from a certain user
export const getUserSkills = async (id, setData) => {
    await api.get('/person/' + id + '/skill', { headers: authHeader() })
        .then(res => {
            setData(res.data);
        })
        .catch(err => err.message);
}