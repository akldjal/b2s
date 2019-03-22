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
              <el-button @click="logout">注 销</el-button>
            </el-col>
          </el-row>
        </el-header>
        <!-- 内容显示 -->
        <el-main>
          <el-container>
            <el-header class="header2">
              <el-row>
                <el-col :span="2">我的订单</el-col>
                <!-- 查询 -->
                <el-col :span="8" :offset="4">
                  <el-input v-model="value" placeholder="请输入"></el-input>
                </el-col>
                <el-col :span="2">
                  <el-button @click="check">查 询</el-button>
                </el-col>
              </el-row>
            </el-header>
            <!-- 我的订单 -->
            <el-main>
              <el-table :data="datas">
                <el-table-column prop="code" label="订单号"></el-table-column>
                <el-table-column prop="create" label="生成时间"></el-table-column>
                <el-table-column prop="payment" label="付款金额"></el-table-column>
                <el-table-column prop="state" label="状态"></el-table-column>
                <el-table-column prop="id" label="操作">
                  <template slot-scope="scope">
                    <el-button @click="details(scope.row)" type="text">详情</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <!-- 订单详情 -->
              <el-dialog title="订单详情" :visible.sync="dialogA" width="600px" center>
                <el-table :data="datas2">
                  <el-table-column prop="name" label="商品名称"></el-table-column>
                  <el-table-column prop="amount" label="数量"></el-table-column>
                  <el-table-column prop="unitPrice" label="单价"></el-table-column>
                  <el-table-column prop="totalPrice" label="总价"></el-table-column>
                </el-table>
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
          code: '78765413',
          payment: '235',
          state: "1",
          create: "2019.3.31",
          id: '46'
        }
      ],
      value: "",
      dialogA: false,
      datas2: [{
        name: '笋干',
        amount: '3',
        unitPrice: '10',
        totalPrice: '30'
      },{
        name: '辣条',
        amount: '100',
        unitPrice: '5',
        totalPrice: '500'
      }],
    };
  },
  methods: {
    // 注销
    logout() {
      this.$router.push("/");
    },
    // 查询
    check() {},
    // 订单详情
    details(item) {
      this.dialogA = true;
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
