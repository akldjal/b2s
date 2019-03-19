<template>
  <div class="pagination-wrap">
    <el-pagination
      layout="prev, pager, next"
      :current-page="currentPage"
      :page-size="pageSize"
      :total="total"
      @current-change="handleCureentClick"
    ></el-pagination>
  </div>
</template>
<script src="./index.js"></script>

<style lang="less" src="./index.less"></style>
