import axios from 'axios';

axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

const Login = {

    initiate(email, password){
        return axios.get('/sanctum/csrf-cookie').then(() => {
            return axios.post('/login', { email: email, password: password });      
        });
    },

}

export default Login;