<template>
  <div>
    <el-container>
      <!-- 侧边栏 -->
      <aside>
        <el-row class="menu">
          <el-col :span="24">
            <!-- <el-menu class="el-menu-vertical-demo">
              <el-menu-item disabled>
                <i class="el-icon-info"></i>
              </el-menu-item>
              <el-menu-item index="1">
                <i class="el-icon-document"></i>
                <span slot="title">用户列表</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-document"></i>
                <span slot="title">商品列表</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">订单列表</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-document"></i>
                <span slot="title">客户列表</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-goods"></i>
                <span slot="title">我的购物车</span>
              </el-menu-item>
              <el-menu-item index="6">
                <i class="el-icon-document"></i>
                <span slot="title">我的订单</span>
              </el-menu-item>
              <el-menu-item index="7">
                <i class="el-icon-document"></i>
                <span slot="title">个人信息</span>
              </el-menu-item>
              <el-menu-item index="8">
                <i class="el-icon-menu"></i>
                <span slot="title">商城</span>
              </el-menu-item>
            </el-menu> -->
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
              <el-button @click="logout">注 销</el-button>
            </el-col>
          </el-row>
        </el-header>
        <!-- 内容显示 -->
        <el-main>
          <el-container>
            <el-header class="header2">
              <el-row>
                <el-col :span="2">用户列表</el-col>
                <!-- 查询 -->
                <el-col :span="8" :offset="4">
                  <el-input v-model="value" placeholder="请输入"></el-input>
                </el-col>
                <el-col :span="2">
                  <el-button @click="check">查 询</el-button>
                </el-col>
                <el-col :span="2" :offset="1">
                  <el-button @click="add">新 增</el-button>
                </el-col>
              </el-row>
              <!-- 新增弹窗 -->
              <el-dialog title="新增用户" :visible.sync="dialogC" width="400px" center>
                <el-form :model="formA" label-width="30%">
                  <el-form-item prop="name" label="姓名">
                    <el-input v-model="formA.name"></el-input>
                  </el-form-item>
                  <el-form-item prop="tel" label="手机号">
                    <el-input v-model="formA.tel"></el-input>
                  </el-form-item>
                  <el-form-item prop="sex" label="性别">
                    <el-select v-model="formA.sex" placeholder="请选择性别">
                      <el-option label="男" value="男"></el-option>
                      <el-option label="女" value="女"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item prop="age" label="年龄">
                    <el-input v-model="formA.age"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer">
                  <el-button @click="dialogC = false">取 消</el-button>
                  <el-button type="primary" @click="toAdd">确 定</el-button>
                </div>
              </el-dialog>
            </el-header>
            <!-- 用户列表 -->
            <el-main>
              <el-table :data="datas">
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="tel" label="手机号"></el-table-column>
                <el-table-column prop="sex" label="性别"></el-table-column>
                <el-table-column prop="age" label="年龄"></el-table-column>
                <el-table-column prop="role" label="角色"></el-table-column>
                <el-table-column prop="state" label="状态"></el-table-column>
                <el-table-column prop="create" label="注册日期"></el-table-column>
                <el-table-column prop="id" label="操作">
                  <template slot-scope="scope">
                    <el-button @click="remove(scope.row)" type="text">删 除</el-button>
                    <el-button @click="block(scope.row)" type="text">启/停</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <!-- 删除提示 -->
              <el-dialog title="提示" :visible.sync="dialogA" width="300px" center>
                <span>是否删除</span>
                <span slot="footer">
                  <el-button @click="dialogA = false">取 消</el-button>
                  <el-button type="primary" @click="toDelete">确 定</el-button>
                </span>
              </el-dialog>
              <!-- 锁定提示 -->
              <el-dialog title="提示" :visible.sync="dialogB" width="300px" center>
                <span>是否启/停</span>
                <span slot="footer">
                  <el-button @click="dialogB = false">取 消</el-button>
                  <el-button type="primary" @click="toBlock">确 定</el-button>
                </span>
              </el-dialog>
            </el-main>
            <el-footer class="footer"></el-footer>
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
      datas: [
        {
          // code: '',
          // customerNumber: '',
          name: "jk",
          tel: "132456",
          sex: "1",
          age: "56",
          role: "1",
          state: "1",
          create: "2019.3.31"
        }
      ],
      value: "",
      dialogA: false,
      dialogB: false,
      dialogC: false,
      curItem: {},
      formA: {
        name: '',
        tel: '',
        sex: '',
        age: '',
      }
    };
  },
  methods: {
    // 注销
    logout() {
      this.$router.push("/");
    },
    // 查询
    check() {},
    // 新增    add新增弹窗 toAdd新增确认
    add() {
      this.dialogC = true;
    },
    toAdd() {
      this.dialogC = false;
    },
    // 删除    remove弹窗确认 toDelete确认删除
    remove(item) {
      this.dialogA = true;
      // 将数据保存到curItem
      this.curItem = item;
    },
    toDelete() {
      this.dialogA = false;
      // 要到curItem取数据
    },
    // 启/停    block弹窗确认 toBlock确认
    block(item) {
      this.dialogB = true;
      // 将数据保存到curItem
      this.curItem = item;
    },
    toBlock() {
      this.dialogB = false;
      // 要到curItem取数据
    }
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
