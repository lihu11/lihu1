<template>
  <!-- <div>这是订单列表</div>-->
  <div>
    <div class="box-card">
      <el-row style="margin-bottom:15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button size="mini">导出Excel</el-button>
        </el-col>
      </el-row>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="订单编号">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="用户姓名">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select  placeholder="全部" size="mini">
             <el-option label="区域一" value="shanghai"></el-option>
             <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="现催收员" >
          <el-select  placeholder="全部" size="mini">
             <el-option label="区域一" value="shanghai"></el-option>
             <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审核员">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="逾期天数">
           <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="至">
           <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="跟进类型">
          <el-select  placeholder="全部" size="mini">
             <el-option label="区域一" value="shanghai"></el-option>
             <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渠道来源">
          <el-select  placeholder="全部" size="mini">
             <el-option label="区域一" value="shanghai"></el-option>
             <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="还款时间">
           <el-date-picker
                type="daterange"
                prefix-icon='el-icon-time'
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                size='mini'>
              </el-date-picker>
        </el-form-item>
        <el-form-item label="到账时间">
           <el-date-picker
                type="daterange"
                prefix-icon='el-icon-time'
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                size='mini'>
              </el-date-picker>
        </el-form-item>
        <el-form-item label="最新跟进时间">
           <el-date-picker
                type="daterange"
                prefix-icon='el-icon-time'
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                size='mini'>
              </el-date-picker>
        </el-form-item>
        <el-form-item label="新老客">
          <el-select  placeholder="全部" size="mini">
             <el-option label="是" value="shi"></el-option>
             <el-option label="否" value="fou"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini"  class="searchBtn">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="count">
      <span>当日分配订单数：</span>
      <span>分配金额：</span>
      <span>回收订单数：</span>
      <span>回收金额：</span>
      <span>展期单数：</span>
      <span>展期费用：</span>
      <span>回收总金额：</span>
    </div>
    <div class="order-table">
      <el-table
          height="480px"
          size='mini'
          border
          style="width: 100%"
          >
          <el-table-column
                type="selection"
                width="55">
              </el-table-column>
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
            label="用户姓名">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机编号">
          </el-table-column>
          <el-table-column
            prop="loan_day"
            label="到账时间"
>
          </el-table-column>
          <el-table-column
            prop="order_status"
            label="借款天数"
           >
          </el-table-column>
          <el-table-column
            prop="is_show"
            label="逾期天数">
          </el-table-column>
          <el-table-column
            prop="loan_money"
            label="借款金额">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="应还金额">
          </el-table-column>
          <el-table-column
            prop="service_charge"
            label="已还金额">
          </el-table-column>
          <el-table-column
            prop="days_overdue"
            label="逾期费">
          </el-table-column>
          <el-table-column
            prop="money_overdue"
            width="94"
            label="实际还款时间">
          </el-table-column>
          <el-table-column
            prop="should_amount"
            label="订单状态"
           >
          </el-table-column>
          <el-table-column
            prop="name"
            label="应用名">
          </el-table-column>
          <el-table-column
            prop="punishment"
            label="现催收员">
          </el-table-column>
          <el-table-column
            prop="apply_time"
            label="原催收员">
          </el-table-column>
          <el-table-column
            prop="arr_time"
            label="渠道来源">
          </el-table-column>
          <el-table-column
            prop="s_time"
            label="跟进类型">
          </el-table-column>
          <el-table-column
            prop="ss_time"
            width="96"
            label="最新跟进信息">
          </el-table-column>
          <el-table-column
            prop="status"
            width="96"
            label="最新跟进时间">
          </el-table-column>
          <el-table-column
            prop="source_for"
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
  export default{
  name:'collectionOrder',
  data() {
    return {
    }
  }
  }
</script>

<style scoped>
  .box-card{
    width: 100%;
    background-color: #f3f3f3;
    padding:20px 20px 0;
  }
  .searchBtn{
    border: none;
    outline: none;
    background-color: #eda323
  }
  .order-table{
    margin-top:15px;
    width: 100%;
    overflow: auto;
  }
</style>
