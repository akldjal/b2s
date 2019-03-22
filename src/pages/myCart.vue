<template>
  <div>
    <el-container>
      <!-- 侧边栏 -->
      <aside>
        <el-row class="menu">
          <el-col :span="24">
            <el-menu :default-active="this.$route.path" router class="el-menu-vertical-demo">
              <!-- logo -->
              <el-menu-item disabled>
                <i class="el-icon-info"></i>
              </el-menu-item>
              <!-- 主菜单 -->
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
              <el-table
                :data="datas"
                @selection-change="handleSelectionChange"
                highlight-current-row
              >
                <el-table-column width="40px" type="selection"></el-table-column>
                <el-table-column prop="name" label="商品名称"></el-table-column>
                <el-table-column prop="unitPrice" label="单价"></el-table-column>
                <!-- 商品数量变化 -->
                <el-table-column label="数量" min-width="120px">
                  <template slot-scope="scope">
                    <el-input-number
                      v-model="scope.row.amount"
                      controls-position="right"
                      :min="1"
                      :max="scope.row.number"
                    ></el-input-number>
                  </template>
                </el-table-column>
                <el-table-column label="金额">
                  <template slot-scope="scopeA">
                    <div>{{ scopeA.row.amount*scopeA.row.unitPrice }}</div>
                  </template>
                </el-table-column>
                <el-table-column prop="id" label="操作">
                  <template slot-scope="scopeB">
                    <el-button @click="remove(scopeB.row)" type="text">删 除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <!-- 底部栏 -->
              <el-row style="margin-top:20px;line-height:40px">
                <el-col :span="4">
                  <el-button @click="toggleSelection()">取消选择</el-button>
                  <el-button>清空</el-button>
                </el-col>
                <el-col :span="4" :offset="2">已选择{{ sum }}件</el-col>
                <el-col :span="4">合计:{{ mum }}元</el-col>
                <el-col :span="2">
                  <el-button @click="pay">付款</el-button>
                </el-col>
              </el-row>
              <!-- 付款提示 -->
              <el-dialog title="提示" :visible.sync="dialogB" width="400px" center>
                <el-table :data="multipleSelection">
                  <el-table-column prop="name" label="商品名称"></el-table-column>
                  <el-table-column prop="unitPrice" label="单价"></el-table-column>
                  <el-table-column prop="amount" label="数量"></el-table-column>
                  <el-table-column label="金额">
                    <template slot-scope="scopeC">
                      <div>{{ scopeC.row.amount*scopeC.row.unitPrice }}</div>
                    </template>
                  </el-table-column>
                </el-table>
                <el-row style="line-height:60px">
                  <el-col :span="6" :offset="8">合计：{{ money }}元</el-col>
                </el-row>
                <div slot="footer">
                  <el-button @click="dialogB = false">取 消</el-button>
                  <el-button type="primary" @click="toPay">确 定</el-button>
                </div>
              </el-dialog>
              <!-- 删除提示 -->
              <el-dialog title="提示" :visible.sync="dialogA" width="300px" center>
                <span>是否删除此件商品？</span>
                <span slot="footer">
                  <el-button @click="dialogA = false" type="text">取 消</el-button>
                  <el-button type="primary" @click="toDelete">确 定</el-button>
                </span>
              </el-dialog>
            </el-main>
            <el-footer class="footer"></el-footer>
          </el-container>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: "0",
      num: "0",
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
          name: "大白菜",
          amount: "2",
          unitPrice: "12",
          totalPrice: "",
          id: "5"
        },
        {
          name: "卷心菜",
          amount: "2",
          unitPrice: "12",
          totalPrice: "",
          id: "3"
        }
      ],
      multipleSelection: [],
      value: "",
      dialogA: false,
      dialogB: false,
      curItem: {},
    };
  },
  computed: {
    // 求购买商品总数量num
    sum: function() {
      var a = 0;
      for (let i = 0; i < this.multipleSelection.length; i++) {
        a += this.multipleSelection[i].amount;
      }
      this.num = a;
      return this.num;
    },
    // 求商品总价格money
    mum: function() {
      var b = 0;
      for (let i = 0; i < this.multipleSelection.length; i++) {
        b +=
          this.multipleSelection[i].amount *
          this.multipleSelection[i].unitPrice;
      }
      this.money = b;
      return this.money;
    }
  },
  mounted() {},
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
      // 因为@click="toggleSelection()"表示toggleSelection已调用，所以打印为空，undefined
      // @click="toggleSelection"表示引用toggleSelection，所以打印不为空
      // console.log(rows);
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
      console.log(this.multipleSelection);
      // console.log(this.multipleSelection)不报错，console.log(multipleSelection)报错
    },
    // 付款    pay付款弹窗 toPay付款确认
    pay() {
      this.dialogB = true;
    },
    toPay() {
      this.dialogB = false;
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
