export default {
    data() {
        return {
            role: '',
        }
    },
    mounted(){
        this.getRole()
    },
    methods: {
        getRole(){
            this.role = JSON.parse(localStorage.getItem('userInfo'))
        },
        customer(){
            this.$router.push('/customer')
        },
        orderInfo(){
            this.$router.push('/orderInfo')
        },
        productInfo(){
            this.$router.push('/productInfo')
        },
        shopping(){
            this.$router.push('/shopping')
        },
        info(){
            this.$router.push('/info')
        },
        user(){
            this.$router.push('/admin')
        }
    }
}