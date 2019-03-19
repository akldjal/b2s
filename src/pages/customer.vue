<template>
  <div class="customer-wrap">
    <!-- 客户管理 -->
    <Header></Header>
    <Menu></Menu>
    <div class="page-content">
      <!-- 搜索 -->
      <div>
        <template>
          <el-input v-model="value9" style="width:40%"></el-input>
          <el-button @click="checkInfo(value9)">查询</el-button>
          <el-button @click="addUser">新增</el-button>
        </template>
      </div>
<!-- 新增 -->
      <el-dialog title="新增人员" :visible.sync="dialogA" width="300px">
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
<!-- 用户列表 -->
      <div>
        <template>
          <el-table style="width: 100%" :data="datas">

            <el-table-column label="用户ID" prop="userID" width="120px"></el-table-column>
            <el-table-column label="用户名" prop="userName" width="200px"></el-table-column>
            <el-table-column label="手机号" prop="tel" width="120px"></el-table-column>
            <el-table-column label="性别" prop="sex" width="120px"></el-table-column>
            <el-table-column label="角色" prop="role" width="120px"></el-table-column>
            <el-table-column label="创建时间" prop="ugmtCreate" width="120px"></el-table-column>
            <el-table-column label="状态" prop="state"></el-table-column>
<!-- 操作 -->
            <el-table-column prop="userID" fixed="right">
              <template slot-scope="scope">
                <el-button @click="delete(scope.row.userID)" type="text" size="small">删除</el-button>
                <el-button
                  @click="block(scope.row.id, scope.row.state)"
                  type="text"
                  size="small"
                >启/停</el-button>
              </template>
            </el-table-column>

          </el-table>
        </template>
      </div>
    </div>
  </div>
</template>
<script src="@/js/customer.js"></script>
  
<style src="@/styles/customer.less" lang="less"></style>
