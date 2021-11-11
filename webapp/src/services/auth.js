import api from './api'

const login = (email, password) => {
    api.post('/person/login', {email, password})
    .then(res => {
        localStorage.setItem("token", res.headers.authorization)
        console.log(res.headers.authorization)
    })
}

export default login;

