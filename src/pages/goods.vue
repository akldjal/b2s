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
                <el-col :span="2">商品列表</el-col>
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
              <!-- 新增商品 -->
              <el-dialog title="新增商品" :visible.sync="dialogC" width="400px" center>
                <el-form :model="formA" label-width="30%">
                  <el-form-item prop="name" label="商品名称">
                    <el-input v-model="formA.name"></el-input>
                  </el-form-item>
                  <el-form-item prop="type" label="种类">
                    <el-input v-model="formA.type"></el-input>
                  </el-form-item>
                  <el-form-item prop="intro" label="介绍">
                    <el-input v-model="formA.intro"></el-input>
                  </el-form-item>
                  <el-form-item prop="price" label="价格">
                    <el-input v-model="formA.price"></el-input>
                  </el-form-item>
                  <el-form-item prop="state" label="状态">
                    <el-select v-model="formA.state" placeholder="请选择">
                      <el-option label="发售中" value="发售中"></el-option>
                      <el-option label="预售" value="预售"></el-option>
                      <el-option label="已下架" value="已下架"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item prop="create" label="上架日期">
                    <el-input v-model="formA.create"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer">
                  <el-button @click="dialogC = false">取 消</el-button>
                  <el-button type="primary" @click="toAdd">确 定</el-button>
                </div>
              </el-dialog>
            </el-header>
            <!-- 商品列表 -->
            <el-main>
              <el-table :data="datas">
                <el-table-column prop="name" label="商品名称"></el-table-column>
                <el-table-column prop="type" label="种类"></el-table-column>
                <el-table-column prop="intro" label="介绍"></el-table-column>
                <el-table-column prop="price" label="价格"></el-table-column>
                <el-table-column prop="state" label="状态"></el-table-column>
                <el-table-column prop="create" label="上架日期"></el-table-column>
                <el-table-column prop="id" label="操作">
                  <template slot-scope="scope">
                    <el-button @click="remove(scope.row)" type="text">删除</el-button>
                    <el-button @click="edit(scope.row)" type="text">编辑</el-button>
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
              <!-- 编辑弹窗 -->
              <el-dialog title="商品编辑" :visible.sync="dialogB" width="300px" center>
                <el-form :model="form" label-width="30%">
                  <el-form-item prop="name" label="商品名称">{{ form.name }}</el-form-item>
                  <el-form-item prop="type" label="种类">{{ form.type }}</el-form-item>
                  <el-form-item prop="intro" label="介绍">
                    <el-input v-model="form.intro"></el-input>
                  </el-form-item>
                  <el-form-item prop="price" label="价格">
                    <el-input v-model="form.price"></el-input>
                  </el-form-item>
                  <el-form-item prop="state" label="状态">
                    <el-select v-model="form.state" placeholder="请选择状态">
                      <el-option label="发售中" value="发售中"></el-option>
                      <el-option label="已下架" value="已下架"></el-option>
                      <el-option label="预售" value="预售"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item prop="create" label="上架日期">{{ form.create }}</el-form-item>
                  <el-form-item prop="id"></el-form-item>
                </el-form>
                <div slot="footer">
                  <el-button @click="dialogB = false">取 消</el-button>
                  <el-button type="primary" @click="toEdit">确 定</el-button>
                </div>
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
          name: "jk",
          type: "3",
          intro: "ahjjhkjh",
          price: "89",
          state: "1",
          create: "2019.3.31",
          id: "12"
        }
      ],
      value: "",
      dialogA: false,
      dialogB: false,
      dialogC: false,
      curItem: {},
      formA: {
        name: "",
        type: "",
        intro: "",
        price: "",
        state: "",
        create: ""
      },
      form: {
        name: '',
        type: '',
        intro: '',
        price: '',
        state: '',
        create: '',
        id: ''
      },
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
    // 编辑    edit编辑弹窗 toEdit编辑确认
    edit(kl) {
      this.dialogB = true;
      this.form.name = kl.name;
      this.form.type = kl.type;
      this.form.intro = kl.intro;
      this.form.price = kl.price;
      this.form.state = kl.state;
      this.form.create = kl.create;
      this.form.id = kl.id;
    },
    toEdit() {
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
