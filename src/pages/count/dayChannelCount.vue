<template>
  <div>
    <div class="box-card">
      <el-row style="margin-bottom:15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button size="mini">导出Excel</el-button>
        </el-col>
      </el-row>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="渠道名称">
          <el-select  placeholder="全部" size="mini">
             <el-option label="区域一" value="shanghai"></el-option>
             <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
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
        <el-button type="warning" size="mini">查询</el-button>
      </el-form>
    </div>
    <div class="text-info">
      <p>黑名单命中率 = 黑名单用户/注册用户 金额首逾率 = 未还金额 / 放款金额 订单首逾率 = 未还订单 / 应还订单 下款率 = 借款人数 / 渠道注册用户数</p>
      <p>只记录渠道当日注册当日下款情况</p>
      <p>如果渠道黑名单命中率超过15%建议停止投放</p>
      <p>每5分钟刷新一次</p>
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
                label="注册日期">
              </el-table-column>
              <el-table-column
                prop="username"
                label="商务名称">
              </el-table-column>
              <el-table-column
                prop="phone"
                width="118"
                label="黑名单命中率">
              </el-table-column>
              <el-table-column
                prop="loan_day"
                label="渠道名称">
              </el-table-column>
              <el-table-column
                prop="order_status"
                label="落地页PV"
               >
              </el-table-column>
              <el-table-column
                prop="is_show"
                label="落地页UV">
              </el-table-column>
              <el-table-column
                prop="loan_money"
                width="118"
                label="落地页下载点击数">
              </el-table-column>
              <el-table-column
                prop="arrival_amount"
                width="118"
                label="渠道注册用户数">
              </el-table-column>
              <el-table-column
                prop="service_charge"
                width="118"
                label="渠道激活用户数">
              </el-table-column>
              <el-table-column
                prop="days_overdue"
                width="118"
                label="渠道认证用户数">
              </el-table-column>
              <el-table-column
                prop="money_overdue"
                width="118"
                label="渠道提件用户数">
              </el-table-column>
              <el-table-column
                prop="should_amount"
                width="118"
                label="渠道借款用户数"
               >
              </el-table-column>
              <el-table-column
                prop="name"
                label="首借人数">
              </el-table-column>
              <el-table-column
                prop="name"
                label="首逾人数">
              </el-table-column>
              <el-table-column
                prop="punishment"
                label="金额首逾率">
              </el-table-column>
              <el-table-column
                prop="apply_time"
                label="订单首逾率">
              </el-table-column>
              <el-table-column
                prop="arr_time"
                width="60"
                label="下单率">
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
  name:'dayChannelCount'
</script>

<style scoped>
  .text-info{
    color: #ec1a37;
    font-size: 16px;
    margin: 15px 0;
  }
  .text-info p{
    margin: 0 0 10px 0!important;
  }
</style>
