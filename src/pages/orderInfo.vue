<template>
  <div class="orderInfo-wrap">
    <Header></Header>
    <Menu></Menu>
    <div class="page-content">
      <!-- 搜索 -->
      <div>
        <template>
          <el-input v-model="value9" style="width:40%"></el-input>
          <el-button @click="checkInfo(value9)">查询</el-button>
          <el-button @click="addUser">新增</el-button>
        </template>
      </div>
      <!-- 用户看订单列表 -->
      <div>
        <template>
          <el-table style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="订单编码">
                    <span>{{ props.row.ordersCode }}</span>
                  </el-form-item>
                  <el-form-item label="订单状态">
                    <span>{{ props.row.orderState }}</span>
                  </el-form-item>
                  <el-form-item label="商品名称">
                    <span>{{ props.row.goodsId }}</span>
                  </el-form-item>
                  <el-form-item label="订单数量">
                    <span>{{ props.row.ordersQuantity }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="订单ID" prop="ordersId" width="200px"></el-table-column>
            <el-table-column label="用户ID" prop="userID" width="200px"></el-table-column>
            <el-table-column label="创建时间" prop="ordersdate" width="120px"></el-table-column>
            <el-table-column label="总价" prop="totalPrice"></el-table-column>

            <el-table-column prop="id" fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button @click="deleteInfo(scope.row.id)" type="text" size="small">删除</el-button>
                <el-button @click="openEdit(scope.row)" type="text" size="small">编辑</el-button>
                <el-button
                  @click="blockInfo(scope.row.id, scope.row.state)"
                  type="text"
                  size="small"
                >启/禁</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
  </div>
</template>
<script src="@/js/orderInfo.js"></script>
  
<style src="@/styles/orderInfo.less" lang="less"></style>
