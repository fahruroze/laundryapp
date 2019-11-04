<script>

    import { mapState, mapMutations } from 'vuex'

export default {
    name: 'FormOutlets',
    computed: {
        ...mapState(['errors']), //ambil State Error
        ...mapState('outlet', {
            outlet: state => state.outlet //ambil State OUTLET
        })
    },
    methods: {
        ...mapMutations('outlet', [CLEAR_FORM]), //panggil mutation CLEAR_FORM
    },
    //KETIKA FORM DITINGGALKAN
    destroyed() {
        //FORM DIHILANGKAN
        this.CLEAR_FORM()
    }
}
</script>
