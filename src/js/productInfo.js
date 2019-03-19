import { Header, Menu} from '@/components'

export default {
  components: {
    Header,
    Menu
  },
  data() {
    return {
      dialogA: false,
      dialogE: false,
      value9: '',
      form: {
        goodsName: '',
        catalogId: '',
        goodsState: '',
        price: '',
        goodsDescribe: '',
      },
      form2: {
        goodsName: '',
        catalogId: '',
        goodsState: '',
        price: '',
        goodsDescribe: '',
      },
    }
  },
  mounted() {},
  methods: {
    addUser(){
      this.dialogA = true
    },
    toAdd(){},
    delete(){},
    block(){},
    editInfo(){},
    checkInfo(value9){},
  }
}
