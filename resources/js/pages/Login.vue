<template>
    <div class="container">
        <div class="login-box">
            <div class="login-logo">
                <router-link :to="{name: 'home'}"><b>LaundryApp</b></router-link>
            </div>
            <div class="login-box-body">
                <p class="login-box-msg">Sign in to start your session</p>
                <div class="form-group has-feedback" :class="{'has-error': errors.email}">
                    <input type="email" class="form-control" placeholder="Email" v-model="data.email">
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    <p class="text-danger" v-if="errors.email">{{errors.email[0]}}</p>
                </div>

                <div class="form-group has-feedback" :class="{'has-error': errors.password}">
                    <input type="password" class="form-control" placeholder="Password" v-model="data.password">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    <p class="text-danger" v-if="errors.password">{{errors.password[0]}}</p>
                </div>
                <div class="alert alert-danger" v-if="errors.invalid">{{errors.invalid}}</div>
                <div class="row">
                    <div class="col-xs-8">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" v-model="data.remember_me">Remember Me
                            </label>
                        </div>
                    </div>
                    <div class="col-xs-4">
                        <button type="submit" class="btn btn-primary btn-block btn-falt" @click.prevent="postLogin">Login</button>
                    </div>
                </div>
                <a href="#">I forgot my password</a><br>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';

    export default {
        data() {
            return {
                // get data dari v-model
                data: {
                    email: '',
                    password: '',
                    remember_me: false
                }
            }
        },

        //sebelum component dirender
        created() {
            //melakukan pengecekan jika sudah login dimana value isAuth benilai "true"
            if (this.isAuth) {
                //maka diredirect ke route HOME
                this.$router.push({ name:'home' })
            }
        },

        computed: {
            ...mapGetters(['isAuth']), //mengambil getters isAuth dari Vuex
            ...mapState(['errors'])
        },

        methods: {
            ...mapActions('auth', ['submit']), //mengisi fungsi submit() dari VUEX agar dapat digunakan pada component terkait.
            ...mapMutations(['CLEAR_ERRORS']), // submit() berasal dari action pada folder STORES/auth.js
        
            //Ketika tombol login ditekan maka akan memicu method postLogin()
            postLogin() {
                //menjalankan fungsi submit() dengan mirimkan data yang dibutuhkan
                this.submit(this.data).then(() => {
                    //cek value isAuth
                    if (this.isAuth) {
                        this.CLEAR_ERRORS()
                        // jika bnar ->redirect to route 'home'

                        this.$router.push({ name:'home' })
                    }
                })
            }
        }
        
    }
</script>