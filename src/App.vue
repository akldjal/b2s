<template>
  <div id="app">
    <div v-if="!isLogin">
      <Header></Header>
      <Menu></Menu>
    </div>
    <div :class="isLogin ? '' : 'page-content'">
      <router-view/>
    </div>
  </div>
</template>

<script src="./js/app.js"></script>

<style lang="less" src="./styles/app.less"></style>
