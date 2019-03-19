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
      <!-- 新增 -->
      <el-dialog title="新增商品" :visible.sync="dialogA" width="300px">
        <el-form :model="form" label-width="80px">
          <el-form-item label="商品名称" prop="goodsName">
            <el-input v-model.number="form.goodsName"></el-input>
          </el-form-item>
          <el-form-item label="商品种类" prop="catalogId">
            <el-input v-model="form.catalogId"></el-input>
          </el-form-item>
          <el-form-item label="商品状态" prop="goodsState">
          </el-form-item>
          <el-form-item label="商品价格" prop="price">
            <el-input v-model="form.price"></el-input>
          </el-form-item>
          <el-form-item label="商品描述" prop="goodsDescribe">
            <el-input v-model="form.goodsDescribe"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogA = false">取 消</el-button>
          <el-button type="primary" @click="toAdd">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 商品列表 -->
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
            <el-table-column prop="goodsID" fixed="right">
              <template slot-scope="scope">
                <el-button @click="delete(scope.row.goodsID)" type="text" size="small">删除</el-button>
                <el-button
                  @click="block(scope.row.id, scope.row.goodsState)"
                  type="text"
                  size="small"
                >启/停</el-button>
              </template>
            </el-table-column>
          </el-table>

<!-- 编辑 -->
        <el-dialog title="编辑" :visible.sync="dialogE" width="300px">
            <el-form :model="form2" label-width="80px">
              <el-form-item prop="goodsId" v-model="form2.goodsId"></el-form-item>
              <el-form-item label="商品状态" prop="goodsState">
              </el-form-item>
              <el-form-item label="商品名称" prop="goodsName">
                <div>{{ form2.goodsName }}</div>
              </el-form-item>
              <el-form-item label="商品种类" prop="catalogId">
                <el-input type="text" v-model="form2.catalogId"></el-input>
              </el-form-item>
              <el-form-item label="商品价格" prop="price">
                <el-input v-model="form2.price"></el-input>
              </el-form-item>
              <el-form-item label="商品描述" prop="goodsDescribe">
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogE = false">取 消</el-button>
              <el-button type="primary" @click="editInfo">确 定</el-button>
            </div>
          </el-dialog>

        </template>
      </div>
    </div>
  </div>
</template>
<script src="@/js/productInfo.js"></script>
  
<style src="@/styles/productInfo.less" lang="less"></style>
