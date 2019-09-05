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
      <p>次借人数：统计第二次借款成功的人数</p>
      <p>复借人数：统计三次以及三次以上借款成功的人数，不包含词次借人数</p>
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
                label="日期">
              </el-table-column>
              <el-table-column
                prop="username"
                label="渠道名称">
              </el-table-column>
              <el-table-column
                prop="phone"
                width="118"
                label="放款单数">
              </el-table-column>
              <el-table-column
                prop="loan_day"
                label="放款总数">
              </el-table-column>
              <el-table-column
                prop="order_status"
                label="首借人数"
               >
              </el-table-column>
              <el-table-column
                prop="is_show"
                label="首借总额">
              </el-table-column>
              <el-table-column
                prop="loan_money"
                width="118"
                label="次借人数">
              </el-table-column>
              <el-table-column
                prop="arrival_amount"
                width="118"
                label="次借总额">
              </el-table-column>
              <el-table-column
                prop="service_charge"
                width="118"
                label="复借人数">
              </el-table-column>
              <el-table-column
                prop="days_overdue"
                width="118"
                label="复借总额">
              </el-table-column>
              <el-table-column
                prop="money_overdue"
                width="118"
                label="实际放款总额">
              </el-table-column>
              <el-table-column
                prop="should_amount"
                width="118"
                label="所属商务"
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
    font-size: 16px;
    margin: 15px 0;
  }
  .text-info p{
    margin: 0 0 10px 0!important;
  }
</style>
