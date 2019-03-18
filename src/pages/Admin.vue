<template>
  <div class="admin-wrap">
    <Header></Header>
    <Menu></Menu>
    <div class="page-content">
      <div>
        <template>
          <el-input v-model="value9" style="width:40%"></el-input>

          <!-- <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>   , value 
          </el-select>-->
          <el-button @click="checkInfo(value9)">查询</el-button>
        </template>
      </div>
      <div>
        <template>
          <el-table style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="所属店铺">
                    <span>{{ props.row.shop }}</span>
                  </el-form-item>
                  <el-form-item label="商品 ID">
                    <span>{{ props.row.id }}</span>
                  </el-form-item>
                  <el-form-item label="店铺 ID">
                    <span>{{ props.row.shopId }}</span>
                  </el-form-item>
                  <el-form-item label="商品分类">
                    <span>{{ props.row.category }}</span>
                  </el-form-item>
                  <el-form-item label="店铺地址">
                    <span>{{ props.row.address }}</span>
                  </el-form-item>
                  <el-form-item label="商品描述">
                    <span>{{ props.row.desc }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="用户ID" prop="id" width="120px"></el-table-column>
            <el-table-column label="用户名" prop="name" width="200px"></el-table-column>
            <el-table-column label="描述" prop="desc"></el-table-column>
          </el-table>
        </template>
      </div>
      <!-- <Pagination :pageSize="2" :total="20" :currentPage="1" @onPressButton="handlePageClick"></Pagination> -->
    </div>
  </div>
</template>

<script src="@/js/admin.js"></script>
  
<style src="@/styles/admin.less" lang="less"></style>
