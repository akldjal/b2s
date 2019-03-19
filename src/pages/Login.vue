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

<script src="@/js/login.js"></script>
  
<style src="@/styles/login.less" lang="less"></style>
