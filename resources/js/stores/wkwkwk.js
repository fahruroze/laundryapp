
import $axios from '../api.js'

const state = () => ({
    outlets: [],
    //menampung data outlet yang didapat dari database

    //state digunakan pada form ADD OUTLET 
    outlet: {
        code: '',
        name: '',
        status: false,
        address: '',
        phone: ''
    },
    page: 1
    //page paginate yang diakses
})

const mutations = {
    //masukkan data ke state outlets
    ASSIGN_DATA(state, payload){
        state.outlets = payload
    },

    SET_PAGE(state, payload) {
        state.page = payload
    },

    ASSIGN_FORM(state, payload) {
        state.outlet = {
            code: payload.code,
            name: payload.name,
            status: payload.status,
            address: payload.address,
            phone: payload.phone
        }
    },

    CLEAR_FORM(state){
        state.outlet = {
            code: '',
            name: '',
            status: false,
            address: '',
            phone: ''
        }
    }
}

const actions = {
    //fungsi untuk melakukan request data outlet dari server
    getOutlets({ commit, state}, payload) {
        //mengecek payload ada atau tidak
        let search = typeof payload != 'undefined' ? payload: ''
        return new Promise((resolve, reject) => {
            //request data dengan endpoint
            $axios.get(`/oulets?page=${state.page}&q=${search}`)
            .then((response) => {
                //simpan data ke state melalui mutations
                commit('ASSIGN_DATA', response.data)
                resolve(response.data)
            })
        })
    },

    //fungsi menambahkan data baru
    submitOutlet({ dispatch, commit, state}){
        return new Promise((resolve,reject) => {
            //Send request to server and get data
            $axios.post(`/outlets`, state.outlet)
            .then((response) => {
                //jika berhasil maka lakukan response lagi
                dispatch('getOutlets').then(() => {
                    resolve(response.data)
                })
            })
            .catch((error) => {
                //jika eror validasi code 422
                if(error.response.status == 422){
                    //maka list error akan diassign ke state errors
                    commit('SET_ERRORS', error.response.data.error, { root:true })
                }
            })
        })
    },
    //mengambil single data dari server bedasarkan code outlet
    editOutlet({commit}, payload) {
        return new Promise((resolve, reject) => {
            $axios.get(`outlets/${payload}/edit`)
            .then((response) => {
                //apabila berhasil assign ke form
                commit('ASSIGN_FORM', response.data.data)
                resolve(response.data)
            })
        })
    },

    //untuk mengupdate data berdasarkan code yang sedang diedit
    updateOutlet({state, commit}, payload) {
        return new Promise((resolve, reject) => {
            //REQUEST dengan mengirimkan code URL
            //DAN MENGIRIMKAN DATA TERBARU yang telah diedit
            $axios.put(`/outlets/${payload}`, state.outlet)
            .then((response) => {
                //form dibersihkan 
                commit('CLEAR_FORM')
                resolve(response.data)
            })
        })
    },

    removeOutlet({ dispatch}, payload) {
        return new Promise((resolve, reject) => {
            //mengirim permintaan ke server untuk menghapus data
            //dengan method delete dan ID pada URL
            $axios.delete(`outlets/${payload}`)
            .then((response) => {
                //apabila berhasil, fetch data terbaru dari server
                dispatch('getOutlets').then(() => resolve())
            })
        })
    }

}

export default {
    namespace: true,
    state,
    actions,
    mutations
}