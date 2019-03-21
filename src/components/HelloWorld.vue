<template>
  <div class="hello">
    <el-container class="all">

        <!-- 顶部栏 -->
        <el-header class="header">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">{{arr}}</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4">
              <a href="https://www.ele.me" target="_blank">订单管理</a>
            </el-menu-item>
          </el-menu>
        </el-header>

        <!-- 显示区 -->
        <el-main class="content"></el-main>
      </el-container>
    <!-- </el-container> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      isCollapse: true,
      activeIndex: "1",
      arr: [1],
      stringTest: ""
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      // console.log(key);
      // console.log(keyPath);
      // this.stringTest = key;
      this.arr = key;
      // this.arr = JSON.stringify(this.arr);
      // console.log(this.stringTest, "stringTest");
    }
  }
};
</script>
<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100px;
    min-height: 400px;
  }
</style>
