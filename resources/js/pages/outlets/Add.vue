<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title"> Add New Outlet</h3>
            </div>
            <div class="card-body">
                <outlet-form></outlet-form>
                <div class="form-group">
                    <button class="btn btn-primary btn-sm" @click.prevent="submit">
                        <i class="fa fa-save"></i>Save
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
    name: 'AddOutlet',
    data() {
        return {

        }
    },
    methods: {
        ...mapActions('outlet', ['submitOutlet']), // panggil actions submitOutlet
        submit(){ //menggunakan/panggil fungsi yang sudah dibuat
            this.submitOutlet().then(() => {
                this.$router.push({name: 'outlets.data'})
            })
        }
    },
    components: {
        'outlet-form': FormOutlets
    }
}
</script>