<template>
  <div class="productInfo-wrap">
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
      <!-- 用户看商品列表 -->
      <div>
        <template>
          <el-table style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="商品ID">
                    <span>{{ props.row.goodsId }}</span>
                  </el-form-item>
                  <el-form-item label="商品描述">
                    <span>{{ props.row.goodsDescribe }}</span>
                  </el-form-item>
                  <el-form-item label="商品状态">
                    <span>{{ props.row.goodsState }}</span>
                  </el-form-item>
                  <el-form-item label="创建时间">
                    <span>{{ props.row.ggmtCreate }}</span>
                  </el-form-item>
                  <el-form-item label="修改时间">
                    <span>{{ props.row.ggmtModifeid }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="商品图片" prop="picture" width="200px"></el-table-column>
            <el-table-column label="商品名称" prop="goodsName" width="200px"></el-table-column>
            <el-table-column label="商品种类" prop="catalogId" width="120px"></el-table-column>
            <el-table-column label="商品价格" prop="price"></el-table-column>
            <!-- 操作 -->
            <el-table-column prop="userID" fixed="right">
              <template slot-scope="scope">
                <el-button @click="delete(scope.row.userID)" type="text" size="small">删除</el-button>
                <el-button
                  @click="block(scope.row.id, scope.row.state)"
                  type="text"
                  size="small"
                >启/停</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
  </div>
</template>
<script src="@/js/productInfo.js"></script>
  
<style src="@/styles/productInfo.less" lang="less"></style>
