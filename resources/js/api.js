import axios from 'axios';

const $axios = axios.create({
    baseURL: '/api', //konfigurasi global menggunakan prefik /api -> /api/login
    headers:{  //kirim Authorization berdasarkan token dari local_storage dengan Type JSON
        Authorization: localStorage.getItem('token') != 'null' ? 'Bearer ' + localStorage.getItem('token'):'',
        'Content-Type' : 'application/json'
    }
});

export default $axios;