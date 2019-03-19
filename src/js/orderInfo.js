import { Header, Menu} from '@/components'

export default {
  components: {
    Header,
    Menu
  },
  data() {
    return {
      dialogA: false,
      value9: '',
      form: {
        tel: '',
        name: '',
        sex: '',
        
      }
    }
  },
  mounted() {},
  methods: {
    addUser(){
      this.dialogA = true
    }
  }
}
