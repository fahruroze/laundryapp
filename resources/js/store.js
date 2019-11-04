import Vue from 'vue'
import Vuex from 'vuex'

//import MODUL Section
import auth from './stores/auth.js'  //Management state dari proses otentikasi akan kita tempatkan didalam file auth.js
import outlet from './stores/outlet.js' 

//metode untuk meminimalisir menumpuknya sebuah code didalam file yang sama
//menggunakan sistem modules dari Vuex

Vue.use(Vuex)

//Define root STORE
const store = new Vuex.Store({
    //Modul yang dibuat ditaruh disini dan di dipisah dengan kome(,)
    modules: {
        auth,
        outlet
    },
    //State sama dengan property data() namun Global
    state: {
        token: localStorage.getItem('token'), //token akan digunakan pada semua bagian yang membutuhkan otentikasi
        errors: []
    },

    getters: {
        //membuat getter dengan nama isAuth
        //dinamis getter bernilai TRUE/FALSE berdasarkan kondisi token
        isAuth: state => {
            return state.token != "null" && state.token != null
        }
    },

    mutations: {
        //Mutation berfungsi untuk memanipulasi value dari STATE token
        
        SET_TOKEN(state, payload) {
            state.token = payload
        },
        SET_ERRORS(state, payload){
            state.errors = payload
        },
        CLEAR_ERRORS(state){
            state.errors = []
        }
    }

})

export default store