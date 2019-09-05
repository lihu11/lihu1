<template>
  <div class="container">
    <div class="box-card">
      <el-row style="margin-bottom: 15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button size="mini">导出Excel</el-button>
        </el-col>
      </el-row>
      <el-form :inline="true" class="demo-form-inline">
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
         <el-select  placeholder="全部" size="mini">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
         </el-select>
       </el-form-item>
       <el-form-item label="订单状态">
         <el-select  placeholder="全部" size="mini">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
         </el-select>
       </el-form-item>
       <el-form-item label="收款订单号">
         <el-select  placeholder="全部" size="mini">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
         </el-select>
       </el-form-item>
       <el-form-item label="收款渠道">
         <el-select  placeholder="全部" size="mini">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
         </el-select>
       </el-form-item>
       <el-form-item label="申请费用类型">
         <el-select  placeholder="全部" size="mini">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
         </el-select>
       </el-form-item>
       <el-form-item label="审核状态">
         <el-select  placeholder="全部" size="mini">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
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
          :data="tableData"
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
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
    </div>
  </div>
</template>

<script>
  name:'offlinePayment'
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
