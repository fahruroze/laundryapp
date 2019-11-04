import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue' // import file dashboard
import Login from './pages/Login.vue' //import file login
import store from './store.js'
import IndexOutlet from './pages/outlets/Index.vue'
import DataOutlet from './pages/outlets/Outlet.vue'
import AddOutlet from './pages/outlets/Add.vue'
import EditOutlet from './pages/outlets/Edit.vue'

Vue.use(Router)

// Definisi Router -> mengontrol alur aplikasi seperti route laravel (WEB.php)

const router =  new Router({

    mode: 'history',
    routes: [
        
        {
            path: '/', //definisi path route home
            name: 'home', //definisi home
            component: Home, //definisi home
            meta: {requiresAuth: true } // merequire authentikasi
        },
        {
            path: '/login',  //definisi route login 
            name: 'login',   // nama login
            component: Login 
        },
        {
            path: '/outlets',
            component: IndexOutlet,
            children:[
                {
                    path: '',
                    name: 'outlets.data',
                    component: DataOutlet,
                    meta: { title: 'Manage Outlets' }
                },
                {
                    path: 'add',
                    name: 'outlets.add',
                    component: AddOutlet,
                    meta: { title: 'Add New Outlet'}
                },
                {
                    path: 'edit/:id',
                    name: 'outlets.edit',
                    component: EditOutlet,
                    meta: { title: 'Edit Outlet'}
                }
            ]
        }
    ]

});

// Navigation

//mengecek jika route tersebut membutuhkan proses otentikasi untuk mengakses page-nya,
// maka dibutuhkan pengecekan lebih lanjut apakah user sudah login atau belum,
// jika belum secara otomatis akan di-direct ke route dengan name login,
// apabila sebaliknya maka akan diteruskan kehalaman yang diinginkan.

router.beforeEach((to, from, next) => {
    store.commit('CLEAR_ERRORS')
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let auth = store.getters.isAuth
        
        if(!auth){
            next({name : 'login' })
        }else{
            next()
        }    
    } else {
        next()
        
    }
})

export default router