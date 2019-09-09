<template>
  <div class="container">
    <div class="box-card">
      <el-row style="margin-bottom: 15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button size="mini">导出Excel</el-button>
        </el-col>
      </el-row>
      <el-form :inline="true" class="demo-form-inline" ref='form' :model="form">
        <el-form-item label="日期">
           <el-date-picker
                type="daterange"
                prefix-icon='el-icon-time'
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                size='mini'>
              </el-date-picker>
        </el-form-item>
        <el-form-item label="订单号">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
       <el-form-item label="姓名">
         <el-input  placeholder="请输入" round size="mini"></el-input>
       </el-form-item>
       <el-form-item label="催收人员">
         <el-select  placeholder="全部" size="mini" v-model="form.d">
            <el-option label="居杰涛" value="1"></el-option>
            <el-option label="齐康星" value="2"></el-option>
            <el-option label="汪武新" value="3"></el-option>
            <el-option label="姜元全" value="4"></el-option>
            <el-option label="陈栋" value="5"></el-option>
            <el-option label="彭彬" value="6"></el-option>
            <el-option label="赵启" value="7"></el-option>
            <el-option label="居强军" value="8"></el-option>
         </el-select>
       </el-form-item>
       <el-form-item label="订单状态">
         <el-select  placeholder="全部" size="mini" v-model="form.f">
            <el-option label="未还款" value="1"></el-option>
            <el-option label="已还款" value="2"></el-option>
            <el-option label="逾期中" value="3"></el-option>
         </el-select>
       </el-form-item>
       <el-form-item label="收款订单号">
         <el-input  placeholder="请输入" round size="mini"></el-input>
       </el-form-item>
       <el-form-item label="收款渠道">
         <el-select  placeholder="全部" size="mini" v-model="form.c">
            <el-option label="微信" value="1"></el-option>
            <el-option label="支付宝" value="2"></el-option>
         </el-select>
       </el-form-item>
       <el-form-item label="申请费用类型">
         <el-select  placeholder="全部" size="mini" v-model="form.a" >
            <el-option label="续期" value="1"></el-option>
            <el-option label="还款" value="2"></el-option>
            <el-option label="部分还款" value="3"></el-option>
         </el-select>
       </el-form-item>
       <el-form-item label="审核状态">
         <el-select  placeholder="全部" size="mini" v-model="form.b">
            <el-option label="未审核" value="1"></el-option>
             <el-option label="审核通过" value="2"></el-option>
            <el-option label="审核不通过" value="3"></el-option>
         </el-select>
       </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini"  class="searchBtn">查询</el-button>
        </el-form-item>
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
            label="申请时间">
          </el-table-column>
          <el-table-column
            prop="username"
            label="订单号">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="loan_day"
            label="姓名"
           >
          </el-table-column>
          <el-table-column
            prop="order_status"
            label="催收人员"
           >
          </el-table-column>
          <el-table-column
            prop="is_show"
            label="订单状态">
          </el-table-column>
          <el-table-column
            prop="loan_money"
            label="应还金额">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="实还金额">
          </el-table-column>
          <el-table-column
            prop="loan_money"
            label="减免金额">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="收款渠道">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="收款订单号">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="申请费用类型">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="审核人">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="时间">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="审核状态">
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
  </div>
</template>

<script>
  export default{
     name:'offlinePayment',
    data(){
      return{
        //form
        form:{
          a:'',
          b:'',
          c:'',
          d:'',
          e:'',
          f:'',
          g:''
        },
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
    margin-bottom: 15px;
  }
  .searchBtn {
    border: none;
    outline: none;
    background-color: #eda323
  }
</style>
