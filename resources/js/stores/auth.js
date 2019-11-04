import $axios from '../api.js'

const state = () => ({

})

const mutations = {

}

const actions = {
    submit({ commit }, payload){
        localStorage.setItem('token', null) //Reset local storage menjadi null
        commit('SET_TOKEN', null, {root:true}) //reset State token menjadi NULL
        //KARENA mutations SET_TOKEN berada pada root STORIES maka ditambahkan parameter
        //{root: true}

        // menggunakan promis agar fungsi selanjutnya berjalan ketika fungsi ini selesai
        return new Promise((resolve, reject) => {
            //mengirim request ke server dengan URI/login
            //payload adalah data yang dikirimkan dari COMPONENT login.vue
            $axios.post('/login', payload)
            .then((response) => {
                //jika responsenya sukses
                if(response.data.status == 'success'){
                    
                    //LOCAL STORAGE dan STATE_TOKEN di SET menggunakan API dari SERVER_RESPONSE
                    localStorage.setItem('token', response.data.data)
                    commit('SET_TOKEN', response.data.data, { root:true })

                } else{ 
                    commit('SET_ERRORS', {invalid: 'Email/Password Salah!'}, {root:true})

                }
                //Resolve agar proses selesai
                resolve(response.data)
            })
            .catch((error) =>{
                if(error.response.status == 442) {
                    commit('SET_ERRORS', error.response.data.errors, { root:true })
                }
            })
        })
    }
}


export default {
    namespaced: true,
    state,
    actions,
    mutations
}
