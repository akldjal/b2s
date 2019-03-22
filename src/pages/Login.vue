<template>
  <div class="login-wrap">
    <!-- 登录 -->
    <div class="window">
      <div class="title">欢迎</div>
      <div class="form">
        <el-form :model="user" :rules="rules" label-width="60px">
          <el-form-item label="手机号" prop="tel">
            <el-input v-model.number="user.tel"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="user.password"></el-input>
          </el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import md5 from 'blueimp-md5';

export default {
  data() {
    // 手机号校验
    var phoneCheck = (rule, value, callback) => {
      if (!value) {
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
    // 密码校验
    var passCheck = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不应为空'));
      } else {
        callback();
      }
    };
    return {
      user: {
        tel: '',
        password: '',
      },
      rules: {
        tel: [{
          validator: phoneCheck,
          trigger: 'blur'
        }, ],
        password: [{
          validator: passCheck,
          trigger: 'blur'
        }, ],
      }
    };
  },
  methods: {
    // 登录
    login() {
      let self = this;
      if (self.user.tel == '' || self.user.password == '') {
        self.$message('账号密码不能为空');
      } else {
        axios.get('http://192.168.5.56:8080/person/login', {
            params: {
              tel: self.user.tel,
              password: self.user.password
            }
          })
          .then(function (res) {
            console.log(res);
            // self.$router.push('/boss');
            // var consumer = res.data.response;
            // consumer = JSON.stringify(consumer);
            // localStorage.setItem('info', consumer);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  }
};
</script>
  
<style lang="less">
.login-wrap {
  width: 100%;
  text-align: center;

  .window {
    width: 24%;
    padding: 0 38%;
    margin-top: 300px;

    .title {
      width: 100%;
      height: 68px;
      font-size: 20px;
      line-height: 68px;
    }
  }
}
</style>
