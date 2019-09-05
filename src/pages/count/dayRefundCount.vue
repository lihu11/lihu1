<template>
  <div>
    <div class="box-card">
      <el-row style="margin-bottom:15px;">
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
        <el-form-item label="客户状态">
          <el-select  placeholder="全部" size="mini">
             <el-option label="区域一" value="shanghai"></el-option>
             <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渠道名称">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-button type="warning" size="mini">查询</el-button>
      </el-form>
    </div>
    <div class="text-info">
      <p>这一部分数据的统计以应还款日期为标签，比如1号应还款的订单，在以后的转化数据都加到1号的统计，展期以后，原订单增加一笔结清，展期金额会加到还款金额，新应还款日增加一笔应该，增加一笔应还款本金</p>
      <p>金额首逾率 = 未还金额 / 放款金额</p>
      <p>订单首逾率 = 未还订单 / 应还订单</p>
      <p>当前逾期率 = 未还金额 / 应还金额</p>
      <p>总实还金额 = 提前订单金额+正常订单金额+部分还款金额+逾期还款总金额-正常还款减免金额+展期金额</p>
      <p>复借率 = 今日老客放款数 / 当日还款总订单数</p>
      <p>每7分钟刷新一次</p>
    </div>
    <div class="order-table">
          <el-table
              height="480px"
              size='mini'
              border
              style="width: 100%"
              >
              <el-table-column
                prop="id"
                label="序号"
                width="60"
               >
              </el-table-column>
              <el-table-column
                prop="order-id"
                label="应还日期">
              </el-table-column>
              <el-table-column
                prop="username"
                label="应还订单数">
              </el-table-column>
              <el-table-column
                prop="phone"
                label="提前还款单数">
              </el-table-column>
              <el-table-column
                prop="loan_day"
                label="提前还款金额">
              </el-table-column>
              <el-table-column
                prop="order_status"
                label="正常还款订单数"
               >
              </el-table-column>
              <el-table-column
                prop="is_show"
                label="正常还款金额">
              </el-table-column>
              <el-table-column
                prop="loan_money"
                label="展期订单数">
              </el-table-column>
              <el-table-column
                prop="arrival_amount"
                label="逾期展期订单数">
              </el-table-column>
              <el-table-column
                prop="service_charge"
                label="逾期展期订单金额">
              </el-table-column>
              <el-table-column
                prop="days_overdue"
                label="展期金额">
              </el-table-column>
              <el-table-column
                prop="money_overdue"
                label="减免金额">
              </el-table-column>
              <el-table-column
                prop="should_amount"
                label="减免订单数"
               >
              </el-table-column>
              <el-table-column
                prop="service_charge"
                label="逾期还款订单数">
              </el-table-column>
              <el-table-column
                prop="days_overdue"
                label="逾期未还订单数">
              </el-table-column>
              <el-table-column
                prop="money_overdue"
                label="部分还款金额">
              </el-table-column>
              <el-table-column
                prop="should_amount"
                label="还款订单减免金额"
               >
              </el-table-column>
              <el-table-column
                prop="service_charge"

                label="逾期还款订单总金额">
              </el-table-column>
              <el-table-column
                prop="days_overdue"

                label="正常还款减免金额">
              </el-table-column>
              <el-table-column
                prop="money_overdue"

                label="应还金额">
              </el-table-column>
              <el-table-column
                prop="should_amount"

                label="总实还金额"
               >
              </el-table-column>
              <el-table-column
                prop="service_charge"

                label="放款成本">
              </el-table-column>
              <el-table-column
                prop="days_overdue"

                label="逾期费用">
              </el-table-column>
              <el-table-column
                prop="money_overdue"

                label="订单首逾率">
              </el-table-column>
              <el-table-column
                prop="should_amount"

                label="1日回款率(订单)"
               >
              </el-table-column>
              <el-table-column
                prop="service_charge"

                label="3日回款率(订单)">
              </el-table-column>
              <el-table-column
                prop="days_overdue"

                label="7日回款率(订单)">
              </el-table-column>
              <el-table-column
                prop="money_overdue"

                label="15日回款率(订单)">
              </el-table-column>
              <el-table-column
                prop="should_amount"
                label="当前订单逾期率"
               >
              </el-table-column>
              <el-table-column
                prop="money_overdue"
                label="复借率">
              </el-table-column>
              <el-table-column
                prop="should_amount"
                label="金额首逾"
               >
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
  name:'dayRefundCount'
</script>

<style scoped>
  .text-info{
    font-size: 12px;
    margin: 15px 0;
  }
  .text-info p{
    margin: 0 0 10px 0!important;
  }
</style>
