<template>
  <!-- <div>这是订单列表</div>-->
  <div>
    <el-card class="box-card">
      <el-row>
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
        <el-form-item label="渠道来源" >
          <el-select  placeholder="全部" size="mini">
             <el-option label="区域一" value="shanghai"></el-option>
             <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审核员">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="先催收员">
          <el-select  placeholder="全部" size="mini">
             <el-option label="区域一" value="shanghai"></el-option>
             <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户状态">
          <el-select  placeholder="全部" size="mini">
             <el-option label="区域一" value="shanghai"></el-option>
             <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请时间">
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
        <el-form-item label="应还时间">
           <el-date-picker
                type="daterange"
                prefix-icon='el-icon-time'
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                size='mini'>
              </el-date-picker>
        </el-form-item>
        <el-form-item label="实际还款时间">
           <el-date-picker
                type="daterange"
                prefix-icon='el-icon-time'
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                size='mini'>
              </el-date-picker>
        </el-form-item>
        <el-form-item label="逾期天数筛选">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="是否展期">
          <el-select  placeholder="全部" size="mini">
             <el-option label="是" value="shi"></el-option>
             <el-option label="否" value="fou"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini"  class="searchBtn">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <div class="order-table">
      <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="id"
            label="序号"
            width="180">
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
            label="借款期限(天)">
          </el-table-column>
          <el-table-column
            prop="order_status"
            label="订单状态"
            width="180">
          </el-table-column>
          <el-table-column
            prop="is_show"
            label="是否展期">
          </el-table-column>
          <el-table-column
            prop="loan_money"
            label="借款金额">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="到账金额">
          </el-table-column>
          <el-table-column
            prop="service_charge"
            label="服务费">
          </el-table-column>
          <el-table-column
            prop="days_overdue"
            label="逾期天数">
          </el-table-column>
          <el-table-column
            prop="money_overdue"
            label="逾期费用">
          </el-table-column>
          <el-table-column
            prop="should_amount"
            label="应还金额"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="已还金额">
          </el-table-column>
          <el-table-column
            prop="punishment"

            label="还款减免金额">
          </el-table-column>
          <el-table-column
            prop="apply_time"

            label="申请时间">
          </el-table-column>
          <el-table-column
            prop="arr_time"

            label="到账时间">
          </el-table-column>
          <el-table-column
            prop="s_time"

            label="应还日期">
          </el-table-column>
          <el-table-column
            prop="ss_time"

            label="实际还款日期">
          </el-table-column>
          <el-table-column
            prop="status"

            label="客户状态">
          </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
  export default{
  name: 'orderList',
  data() {
    return {
      tableData:[
        {
          id: '1',
          order_id: '110011',
          username: '张三',
          phone: '15070634344',
          loan_day: 7,
          order_status: '风控不通过',
          is_show: '否',
          loan_money: '5000',
          arrival_amount: '4200',
          service_charge: '800',
          days_overdue: 0,
          money_overdue:0,
          should_amount:'5000',
          punishment:'0',
          apply_time:'2019-08-30 10:04:37',
          arr_time: '',
          s_time: '',
          ss_time:'',
          status:'老客'
        }
      ]
    }
  }
  }
</script>

<style>
  .box-card{
    width: 100%;
    background-color: #f3f3f3;
  }
  .searchBtn{
    border: none;
    outline: none;
    background-color: #eda323
  }
  .el-input--mini .el-input__inner{
    border-radius: 14px;
  }
  .el-range-editor--mini.el-input__inner {
    border-radius: 14px;
  }
  .el-form-item {
    margin-bottom: 4px;
  }
</style>
