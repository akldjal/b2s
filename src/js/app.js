import { Header,Menu } from '@/components'

export default {
    components: {
        Header,
        Menu,
    },
    data() {
        return {
            isLogin: false,
        }
    },
    mounted() {
        const { name } = this.$route;
        // console.log(pathname);
        if (name === 'Login') {
            this.isLogin = true;
        } else {
            this.isLogin = false;
        }
    },
    methods: {},
}
