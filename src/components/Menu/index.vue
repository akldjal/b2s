<template>
  <!-- 菜单 -->
  <div class="menu-wrap">
    <div @click="info">个人信息</div>
    <div @click="user">用户信息管理</div>
    <div @click="customer">客户信息管理</div>
    <div @click="productInfo">商品列表</div>
    <div @click="shopping">我的购物车</div>
    <div @click="orderInfo">我的订单</div>
  </div>
</template>
<script src="./index.js"></script>

<style lang="less" src="./index.less"></style>
