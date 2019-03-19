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
      <!-- 新增 -->
      <el-dialog title="新增订单" :visible.sync="dialogA" width="300px">
        <el-form :model="form" label-width="80px">
          <el-form-item label="手机号" prop="tel">
            <el-input v-model.number="form.tel"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="userName">
            <el-input v-model="form.userName"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-select v-model="form.sex" placeholder="请选择性别">
              <el-option label="男" :value="1"></el-option>
              <el-option label="女" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="密码确认" prop="passwordAgain">
            <el-input type="password" v-model="form.passwordAgain"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogA = false">取 消</el-button>
          <el-button type="primary" @click="toAdd">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 订单列表 -->
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

<!-- 编辑 -->
        <el-dialog title="编辑" :visible.sync="dialogE" width="300px">
            <el-form :model="form2" label-width="80px">
              <el-form-item prop="id" v-model="form2.id"></el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-select v-model="form2.sex" placeholder="请选择性别">
                  <el-option label="男" :value="1"></el-option>
                  <el-option label="女" :value="0"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="手机号" prop="tel">
                <div>{{ form2.tel }}</div>
              </el-form-item>
              <el-form-item label="姓名" prop="name">
                <el-input type="text" v-model="form2.name"></el-input>
              </el-form-item>
              <el-form-item label="年龄" prop="age">
                <el-input v-model="form2.age"></el-input>
              </el-form-item>
              <el-form-item label="角色" prop="role">
                <el-select v-model="form2.role" placeholder="请选择角色">
                  <el-option label="管理员" :value="1"></el-option>
                  <el-option label="普通人员" :value="0"></el-option>
                </el-select>
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
<script src="@/js/orderInfo.js"></script>
  
<style src="@/styles/orderInfo.less" lang="less"></style>
