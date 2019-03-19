<template>
  <div class="info-wrap">
    <!-- 客户个人信息 -->
    <Header></Header>
    <Menu></Menu>
    <div class="page-content">
      <div class="infotable">
        <el-form label-width="80px">
        <el-form-item label="姓名">
          <div>{{ info.userName }}</div>
        </el-form-item>
        <el-form-item label="手机号">
          <div>{{ info.tel }}</div>
        </el-form-item>
        <el-form-item label="性别">
          <div>{{ info.sex }}</div>
        </el-form-item>
        <el-form-item label="创建时间">
          <div>{{ info.ugmtCreate }}</div>
        </el-form-item>
        <el-form-item label="修改时间">
          <div>{{ ugmtModifeid }}</div>
        </el-form-item>
        <el-form-item>
          <el-button @click="edit">编辑</el-button>
        </el-form-item>
      </el-form>
      </div>
      <!-- 新增 -->
      <el-dialog title="编辑" :visible.sync="dialogA" width="300px">
        <el-form :model="form" :rules="rules" label-width="80px">
          <el-form-item label="手机号" prop="tel">
            <el-input v-model.number="form.tel"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="userName">
            <el-input v-model="form.userName"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-select v-model="form.sex" placeholder="请选择性别">
              <el-option label="男" :value="1"></el-option>
              <el-option label="女" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="密码确认" prop="passwordAgain">
            <el-input type="password" v-model="form.passwordAgain"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogA = false">取 消</el-button>
          <el-button type="primary" @click="toAdd">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script src="@/js/info.js"></script>
  
<style src="@/styles/info.less" lang="less"></style>
