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
              <el-menu-item
                v-for="(item,index) in navList"
                :key="index"
                :index="item.name"
              >{{ item.navItem }}</el-menu-item>
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
              <el-col :span="4">我的购物车</el-col>
            </el-header>
            <!-- 购物车列表 -->
            <el-main>
              <el-table :data="datas" ref="cart" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="name" label="商品名称"></el-table-column>
                <el-table-column prop="unitPrice" label="单价"></el-table-column>
                <el-table-column prop="amount" label="数量">
                  <el-input-number v-model="num" :min="1" :max="10"></el-input-number>
                </el-table-column>
                <el-table-column prop="id" label="操作">
                  <template slot-scope="scope">
                    <el-button @click="remove(scope.row)" type="text">删 除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <!-- 取消选择 -->
              <el-row style="margin-top:20px;line-height:40px">
                <el-col :span="2"><el-button @click="toggleSelection()">取消选择</el-button></el-col>
                <el-col :span="2" :offset="10">合计:</el-col>
                <el-col :span="2">{{ 0 }}</el-col>
                <el-col :span="2"><el-button @click="pay">付款</el-button></el-col>
              </el-row>
              <!-- 付款提示 -->
              <el-dialog title="提示" :visible.sync="dialogB" width="300px" center>
                <span>确认付款</span>
                <span slot="footer">
                  <el-button @click="dialogB = false">取 消</el-button>
                  <el-button type="primary" @click="toPay">确 定</el-button>
                </span>
              </el-dialog>
              <!-- 删除提示 -->
              <el-dialog title="提示" :visible.sync="dialogA" width="300px" center>
                <span>是否删除</span>
                <span slot="footer">
                  <el-button @click="dialogA = false">取 消</el-button>
                  <el-button type="primary" @click="toDelete">确 定</el-button>
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
      num: 1,
      navList: [
        { name: "/boss", navItem: "用户列表" },
        { name: "/customer", navItem: "客户列表" },
        { name: "/order", navItem: "订单列表" },
        { name: "/goods", navItem: "商品列表" },
        { name: "/myMall", navItem: "商城" },
        { name: "/myCart", navItem: "我的购物车" },
        { name: "/myOrder", navItem: "我的订单" },
        { name: "/myInfo", navItem: "个人信息" }
      ],
      datas: [
        {
          name: "jk",
          amount: "2",
          unitPrice: "28",
          totalPrice: "56",
          id: ""
        }
      ],
      multipleSelection: [],
      value: "",
      dialogA: false,
      dialogB: false,
      curItem: {},
      formA: {
        name: "",
        tel: "",
        sex: "",
        age: ""
      }
    };
  },
  methods: {
    // 注销
    logout() {
      this.$router.push("/");
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
    // 取消选择
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.cart.toggleRowSelection(row);
        });
      } else {
        this.$refs.cart.clearSelection();
      }
    },
    // 切换选择
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 付款    pay付款弹窗 toPay付款确认
    pay() {
      this.dialogB = true;
    },
    toPay() {
      this.dialogB = false;
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
  min-height: 400px;
}
.header {
  line-height: 40px;
}
</style>
