<template>
  <div class="container">
    <div class="box-card">
      <el-row style="margin-bottom: 15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button size="mini">导出Excel</el-button>
        </el-col>
      </el-row>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="订单号">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="三方订单号">
          <el-select  placeholder="全部" size="mini">
             <el-option label="区域一" value="shanghai"></el-option>
             <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="期限" >
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
        <el-form-item label="放款银行">
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
        <el-form-item label="新老客">
          <el-select  placeholder="全部" size="mini">
             <el-option label="区域一" value="shanghai"></el-option>
             <el-option label="区域二" value="beijing"></el-option>
          </el-select>
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
       <el-form-item label="订单创建时间">
          <el-date-picker
               type="daterange"
               prefix-icon='el-icon-time'
               range-separator="-"
               start-placeholder="开始时间"
               end-placeholder="结束时间"
               size='mini'>
             </el-date-picker>
       </el-form-item>
        <el-form-item label="还款次数">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini"  class="searchBtn">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="count">
      <span>放款金额：0</span>
      <span>放款单数：0</span>
    </div>
    <div class="mytable">
      <el-table
          height="480px"
          size='mini'
          :data="tableData"
          border
          style="width: 100%"
          class="tableBox">
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
            width="100"
            label="订单创建时间">
          </el-table-column>
          <el-table-column
            prop="username"
            label="订单号">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="借款人姓名"
            width="100">
          </el-table-column>
          <el-table-column
            prop="loan_day"
            label="电话"
            width="100">
          </el-table-column>
          <el-table-column
            prop="order_status"
            label="风控分数"
            width="100"
           >
          </el-table-column>
          <el-table-column
            prop="is_show"
            label="借款金额">
          </el-table-column>
          <el-table-column
            prop="loan_money"
            label="到账金额">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="期限(天)">
          </el-table-column>
          <el-table-column
            prop="service_charge"
            label="借款次数">
          </el-table-column>
          <el-table-column
            prop="days_overdue"
            label="还款次数">
          </el-table-column>
          <el-table-column
            prop="money_overdue"
            label="订单状态">
          </el-table-column>
          <el-table-column
            prop="should_amount"
            label="失败原因"
           >
          </el-table-column>
          <el-table-column
            prop="name"
            label="放款银行">
          </el-table-column>
          <el-table-column
            prop="punishment"
            width="110"
            label="到账时间">
          </el-table-column>
          <el-table-column
            prop="apply_time"
            width="140"
            label="渠道来源">
          </el-table-column>
          <el-table-column
            prop="arr_time"
            label="新老客">
          </el-table-column>
          <el-table-column
            prop="s_time"
            width="100"
            label="三方订单号">
          </el-table-column>
          <el-table-column
            prop="operation"
            label="操作">
            <template slot-scope="scope">
                <el-button type="warning" size="mini">详情</el-button>
            </template>
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
  name:'loanOrders'
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
