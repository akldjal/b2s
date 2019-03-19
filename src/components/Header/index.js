export default {
    data(){
        return {
            info: []
        }
    },
    mounted(){
        this.getInfo()
    },
    methods: {
        getInfo(){
            this.info = JSON.parse(localStorage.getItem('info'))
        },
        logout(){
            this.$router.push('/')
            localStorage.clear('info')
        }
    }
}