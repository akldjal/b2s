import { Header, Menu} from '@/components'
import { Z_BLOCK } from 'zlib';

export default {
  components: {
    Header,
    Menu
  },
  data() {
    var phoneCheck = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('手机号不应为空'));
      } else if (!Number.isInteger(value)) {
        return callback(new Error('手机号应为纯数字'));
      } else {
        const reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error('手机号错误'));
        }
      }
    };
    var passCheck = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('密码不应为空'));
      } else {
        if (this.form.passwordAgain !== '') {
          this.$refs.form.validateField('passwordAgain');
        }
        callback();
      }
    };
    var checkAgain = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致！'));
      } else {
        callback();
      }
    };
    return {
      datas: [],
      dialogA: false,
      value9: '',
      rules: {
        tel: [{
          validator: phoneCheck,
          trigger: 'blur'
        }, ],
        passwordAgain: [{
          validator: checkAgain,
          trigger: 'blur'
        }],
        password: [{
          validator: passCheck,
          trigger: 'blur'
        }, ]
      },
      form: {
        tel: '',
        name: '',
        sex: '',
        password: '',
      }
    }
  },
  mounted() {
    this.getDatas()
  },
  methods: {
    // 获取列表数据
    getDatas(){
      this.datas
    },
    // 新增
    addUser(){
      this.dialogA = true
    },
    toAdd() {
      axios.post('', {

      })
      .then(function (res) {
        axios.get('', {

        })
      })
    },
    // 查询
    checkInfo(value9) {
      axios.get( '', {
        params: {

        }
      })
      .then(function (res) {
        console.log(res);
        
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    // 删除
    delete() {
      axios.post
    },
    // 启停
    block() {
      axios.post
    }
  }
}
