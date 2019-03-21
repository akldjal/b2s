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
                <el-col :span="2">商城</el-col>
                <!-- 查询 -->
                <el-col :span="8" :offset="4">
                  <el-input v-model="value" placeholder="请输入"></el-input>
                </el-col>
                <el-col :span="2">
                  <el-button @click="check">查 询</el-button>
                </el-col>
              </el-row>
            </el-header>
            <!-- 商城列表 -->
            <el-main>
              <el-table :data="datas">
                <el-table-column prop="name" label="名称"></el-table-column>
                <el-table-column prop="type" label="种类"></el-table-column>
                <el-table-column prop="intro" label="商品介绍"></el-table-column>
                <el-table-column prop="price" label="价格"></el-table-column>
                <el-table-column prop="state" label="状态"></el-table-column>
                <el-table-column prop="create" label="上架日期"></el-table-column>
                <el-table-column prop="id" label="操作">
                  <template slot-scope="scope">
                    <el-button @click="buy(scope.row)" type="text">购买</el-button>
                    <el-button @click="add(scope.row)" type="text"><i class="el-icon-plus"></i></el-button>
                  </template>
                </el-table-column>
              </el-table>
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
          name: '465',
          type: '6',
          intro: '46546513546465',
          price: '36',
          state: '0',
          create: '2018.3.6',
          id: '7987616'
        }
      ],
      value: "",
      curItem: {},
    };
  },
  methods: {
    // 注销
    logout() {
      this.$router.push("/");
    },
    // 查询
    check() {},
    // 购买
    buy() {},
    // 添加到购物车
    add() {},
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
  min-height: 400px;
}
.header {
  line-height: 40px;
}
</style>
