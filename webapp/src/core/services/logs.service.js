import api from './api.service';

// Get logs
export const getLogs = async (after, before, setData, token) => {
    const params = {
        ...(after && { after }),
        ...(before && { before })
    };

    const status = await api.get('/log', { headers: { Authorization: 'Bearer ' + token }, params })
        .then(res => {
            setData(res.data);
            return res.status;
        })
        .catch(err => err.message);
        
    return status;
}