<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Edit Outlet</h3>
            </div>
            <div class="card-body">
                <outlet-form></outlet-form>
                <div class="form-group" style="padding-left:50%;">
                    <button style="padding-left:50%;" class="btn btn-primary btn-sm btn-pull-left" @click.prevent="submit">
                        <i class="fa fa-edit"></i> Update
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import FormOutlets from './Form.vue'
    export default {
        name: 'EditOutlet',
        created() {
            //SEBELUM COMPONENT DI-RENDER KITA MELAKUKAN REQUEST KESERVER
            //BERDASARKAN CODE YANG ADA DI URL
            this.editOutlet(this.$route.params.id)
        },
        methods: {
            ...mapActions('outlet', ['editOutlet', 'updateOutlet']),
            submit() {
                //KETIKA TOMBOL UPDATE DI MAKA AKAN MENGIRIMKAN PERMINTAAN
                //UNTUK MENGUBAH DATA BERDASARKAN CODE YANG DIKIRIMKAN
                this.updateOutlet(this.$route.params.id).then(() => {
                    //APABILA BERHASIL MAKA AKAN DI-DIRECT KEMBALI
                    //KE HALAMAN /outlets
                    this.$router.push({ name: 'outlets.data' })
                })
            }
        },
        components: {
            'outlet-form': FormOutlets
        },
    }
</script>
