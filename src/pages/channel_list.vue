<template>
  <div class="container">
    <div class="box-card">
      <el-row style="margin-bottom: 15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button type="warning" size="mini"  @click="dialogFormVisible = true">添加渠道</el-button>
        </el-col>
      </el-row>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="渠道名称">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="公司名称">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="商务名称">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-button type="warning" size="mini" style="float: right;">查询</el-button>
      </el-form>
    </div>
    <div class="mytable">
      <el-table
          size='mini'
          border
          style="width: 100%">
          <el-table-column
            prop="id"
            label="序号"
           >
          </el-table-column>
          <el-table-column
            prop="order-id"
            label="渠道名称">
          </el-table-column>
          <el-table-column
            prop="username"
            label="公司名称">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="登陆账号">
          </el-table-column>
          <el-table-column
            prop="loan_day"
            label="推广链接"
           >
          </el-table-column>
          <el-table-column
            prop="order_status"
            label="添加时间"
           >
          </el-table-column>
          <el-table-column
            prop="is_show"
            label="是否开启">
          </el-table-column>
          <el-table-column
            prop="loan_money"
            label="所属商务">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="是否给渠道看下款">
          </el-table-column>
          <el-table-column
            prop="loan_money"
            label="是否用户数据脱敏">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="微信QQ是否开启">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="通过分数">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="操作">
          </el-table-column>
        </el-table>
    </div>
    <div class="pageBox">
      <el-pagination
      background
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="40">
    </el-pagination>
    </div>
    <!-- 模态框设置 -->
    <el-dialog title="新增渠道" :visible.sync="dialogFormVisible" width=22%>
      <el-form :model="form">
        <el-form-item label="渠道名称" label-width="140px">
          <el-input v-model="form.name" autocomplete="off" size='mini'></el-input>
        </el-form-item>
        <el-form-item label="所属公司" label-width="140px">
          <el-input v-model="form.name" autocomplete="off" size='mini'></el-input>
        </el-form-item>
        <el-form-item label="是否给渠道看下款" label-width="140px">
          <el-switch v-model="form.delivery" size='mini'></el-switch>
        </el-form-item>
        <el-form-item label="是否用户数据脱敏" label-width="140px">
          <el-switch v-model="form.delivery" size='mini'></el-switch>
        </el-form-item>
        <el-form-item label="微信QQ是否开启" label-width="140px">
          <el-switch v-model="form.delivery" size='mini'></el-switch>
        </el-form-item>
        <el-form-item label="通过分数" label-width="140px">
          <el-input v-model="form.name" autocomplete="off" size='mini'></el-input>
          <p class="warning-p">提示：建议595分</p>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="warning" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default{
    name:'channel_list',
    data(){
      return{
        form:{
          name:'',
          region:'',
          delivery:false
        },
        dialogFormVisible:false
      }
    }
  }

</script>

<style scoped>
  .box-card{
    width: 100%;
    background-color: #f3f3f3;
    padding:20px 20px 0;
    box-sizing: border-box;
  }
  .count{
    padding:6px 20px;
    width: 100%;
    background-color: #f3f3f3;
    margin-top:15px;
    margin-bottom: 15px;
    font-size:16px;
    font-weight: 800;
    color: #666666;
  }
  .searchBtn {
    border: none;
    outline: none;
    background-color: #eda323
  }
  .warning-p{
    margin: 0;
    color: red;
  }
</style>
