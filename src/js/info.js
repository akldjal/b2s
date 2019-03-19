import {
  Header,
  Menu
} from '@/components'

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
        }, ],
      },
      info: {},
      form: {
        tel: '',
        name: '',
        sex: '',
        password: ''
      },
    }
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      this.info = JSON.parse(localStorage.getItem('info'))
    },
    edit() {
      this.dialogA = true
      this.form.tel = this.info.tel
      this.form.name = this.info.name
      this.form.sex = this.info.sex
      this.form.password = this.info.password
    },
    toAdd() {

    },
  }
}
