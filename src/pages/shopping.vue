<template>
  <div class="shopping-wrap">
    <Header></Header>
    <Menu></Menu>
    <div class="page-content">
      <!-- 客户购物车 -->
      <div>
        <template>
          <el-table style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="商品ID">
                    <span>{{ props.row.goodsID }}</span>
                  </el-form-item>
                  <el-form-item label="数量">
                    <span>{{ props.row.quantity }}</span>
                  </el-form-item>
                  <el-form-item label="修改时间">
                    <span>{{ props.row.cgmtModifeid }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="购物车ID" prop="cartId" width="200px"></el-table-column>
            <el-table-column label="用户ID" prop="userID" width="200px"></el-table-column>
            <el-table-column label="创建时间" prop="cartDate" width="120px"></el-table-column>
            <el-table-column label="总价" prop="allPrice"></el-table-column>
          </el-table>
        </template>
      </div>
    </div>
  </div>
</template>
<script src="@/js/shopping.js"></script>
  
<style src="@/styles/shopping.less" lang="less"></style>
