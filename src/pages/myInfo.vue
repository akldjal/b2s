<template>
  <div>
    <el-container>
      <!-- 侧边栏 -->
      <aside>
        <el-row class="menu">
          <el-col :span="24">
            <el-menu :default-active="this.$route.path" router class="el-menu-vertical-demo">
              <el-menu-item disabled>
                <i class="el-icon-info"></i>
              </el-menu-item>
              <el-menu-item v-for="(item,index) in navList" :key="index" :index="item.name">
                {{ item.navItem }}
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </aside>
      <el-container>
        <!-- 顶部栏 -->
        <el-header>
          <el-row class="header">
            <el-col :span="4" :offset="18">欢迎</el-col>
            <el-col :span="2">
              <el-button @click="logout">注销</el-button>
            </el-col>
          </el-row>
        </el-header>
        <!-- 内容显示 -->
        <el-main>
          <el-container>
            <el-header class="header2">
              <el-col :span="2">个人信息</el-col>
            </el-header>
            <!-- 个人信息表 -->
            <el-main>
              <el-form :model="form" label-width="30%">
                <el-form-item label="姓名">{{ form.name }}</el-form-item>
                <el-form-item label="手机号">{{ form.tel }}</el-form-item>
                <el-form-item label="性别">{{ form.sex }}</el-form-item>
                <el-form-item label="年龄">{{ form.age }}</el-form-item>
                <el-form-item label="角色">{{ form.role }}</el-form-item>
                <el-form-item label="状态">{{ form.state }}</el-form-item>
                <el-form-item label="注册日期">{{ form.create }}</el-form-item>
              </el-form>
            </el-main>
            <el-footer class="footer">
              <el-button @click="open(form)">编辑</el-button>
            </el-footer>
            <!-- 编辑弹窗 -->
            <el-dialog title="个人信息修改" :visible.sync="dialogA" width="400px" center>
              <el-form :model="formA" label-width="30%">
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="formA.name"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="tel">{{ formA.tel }}</el-form-item>
                <el-form-item label="性别" prop="sex">
                  <el-select v-model="formA.sex" placeholder="请选择性别">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                  <el-input v-model="formA.age"></el-input>
                </el-form-item>
                <el-form-item label="角色" prop="role">{{ formA.role }}</el-form-item>
                <el-form-item label="状态" prop="state">
                  <el-select v-model="formA.state" placeholder="请选择状态">
                    <el-option label="正在使用" value="正在使用"></el-option>
                    <el-option label="已停用" value="已停用"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="注册日期" prop="create">{{ formA.create }}</el-form-item>
              </el-form>
              <div slot="footer">
                <el-button @click="dialogA = false">取 消</el-button>
                <el-button type="primary" @click="toAdd">确 定</el-button>
              </div>
            </el-dialog>
          </el-container>
        </el-main>
        <!-- <el-footer></el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { name: '/boss', navItem: '用户列表' },
        { name: '/customer', navItem: '客户列表' },
        { name: '/order', navItem: '订单列表' },
        { name: '/goods', navItem: '商品列表' },
        { name: '/myMall', navItem: '商城' },
        { name: '/myCart', navItem: '我的购物车' },
        { name: '/myOrder', navItem: '我的订单' },
        { name: '/myInfo', navItem: '个人信息' },
      ],
      dialogA: false,
      form: {
        name: "13213",
        tel: "46546",
        sex: "男",
        age: "64",
        role: "客户",
        state: "正在使用",
        create: "2019.3.10"
      },
      formA: {
        name: "",
        sex: "",
        age: "",
        state: ""
      }
    };
  },
  methods: {
    //注销
    logout() {
      this.$router.push('/');
    },
    //个人信息编辑弹窗  open触发弹窗 toAdd确认
    open(jk) {
      this.dialogA = true;
      // this.formA = jk;会导致原表单随编辑而改动
      this.formA.name = jk.name;
      this.formA.tel = jk.tel;
      this.formA.sex = jk.sex;
      this.formA.age = jk.age;
      this.formA.role = jk.role;
      this.formA.state = jk.state;
      this.formA.create = jk.create;
    },
    toAdd() {
      this.dialogA = false;
    },
  }
};
</script>

<style lang="less">
.header2 {
  line-height: 60px;
}
.footer {
  line-height: 60px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
}
.header {
  line-height: 40px;
}
</style>
