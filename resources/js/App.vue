<template>
    <div class="wrapper">
        <app-header v-if="isAuth"/>
        <app-sidebar v-if="isAuth"/>
            <div class="content-wrapper">
                <router-view></router-view> 
            </div>
            <app-footer v-if="isAuth"/>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'  
    import Header from './components/Header.vue' //import file header.vue
    import Sidebar from './components/Sidebar.vue'  //import file Footer.vue
    import Footer from './components/Footer.vue' //import file Footer.vue

export default {
    computed: {
        ...mapState(['token']),
        ...mapGetters(['isAuth'])
    },

    components:{
        'app-header': Header, // custom-tag dari component Header
        'app-sidebar': Sidebar, //custom-tag dari component Sidebar
        'app-footer': Footer //custom-tag dari component Footer
        

        //akan dirender jika "isAuth" bernilai TRUE
    }
}

</script>