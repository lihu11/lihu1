<template>
  <div class="container">
    <div class="box-card">
      <el-form :inline="true" class="demo-form-inline" ref='form' :model="form">
        <el-form-item label="订单编号">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="用户姓名">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="还款日">
           <el-date-picker
                type="daterange"
                prefix-icon='el-icon-time'
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                size='mini'>
              </el-date-picker>
        </el-form-item>
        <el-form-item label="第一次执行时间">
           <el-date-picker
                type="daterange"
                prefix-icon='el-icon-time'
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                size='mini'>
              </el-date-picker>
        </el-form-item>
        <el-form-item label="第一次结果">
          <el-select  placeholder="全部" size="mini" v-model="form.a">
             <el-option label="处理失败" value="1"></el-option>
             <el-option label="待处理" value="2"></el-option>
             <el-option label="处理完成" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini"  class="searchBtn">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="count">
      <span>代扣单数：0</span>
      <span>成功单数：0</span>
      <span>代扣回收金额：0</span>
    </div>
    <div class="mytable">
      <el-table
          height="480px"
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
            label="订单编号">
          </el-table-column>
          <el-table-column
            prop="username"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="用户姓名">
          </el-table-column>
          <el-table-column
            prop="loan_day"
            label="借款金额"
           >
          </el-table-column>
          <el-table-column
            prop="order_status"
            label="还款日"
           >
          </el-table-column>
          <el-table-column
            prop="is_show"
            label="逾期天数">
          </el-table-column>
          <el-table-column
            prop="loan_money"
            label="第一次代扣执行时间">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="第一次代扣结果">
          </el-table-column>
        </el-table>
    </div>
    <div class="pageBox">
      <el-pagination
      background
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="30">
    </el-pagination>
    </div>
  </div>
</template>

<script>
  export default{
    name:'withholdingOrders',
    data(){
      return{
        form:{
          a:''
        }
      }
    }
  }

</script>

<style>
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
</style>
