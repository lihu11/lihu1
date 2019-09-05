<template>
  <!-- <div>这是订单列表</div>-->
  <div>
    <div class="box-card">
      <el-row style="margin-bottom:15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button size="mini" @click='HandleExportDate'>导出Excel</el-button>
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
    </div>
    <div class="order-table">
      <el-table
          height="480px"
          size='mini'
          :data="orderList"
          border
          style="width: 100%"
          >
          <el-table-column
            prop="id"
            label="序号"
           >
          </el-table-column>
          <el-table-column
            prop="applicationNumber"
            label="订单编号">
          </el-table-column>
          <el-table-column
            prop="userName"
            label="用户姓名">
          </el-table-column>
          <el-table-column
            prop="phoneNumber"
            label="手机编号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="loanDay"
            label="借款期限(天)"
            width="80">
          </el-table-column>
          <el-table-column
            prop="loanStatus"
            label="订单状态"
            width="100"
           >
          </el-table-column>
          <el-table-column
            prop="isPostphone"
            label="是否展期">
          </el-table-column>
          <el-table-column
            prop="loanMoney"
            label="借款金额">
          </el-table-column>
          <el-table-column
            prop="accountMoney"
            label="到账金额">
          </el-table-column>
          <el-table-column
            prop="serviceMoney"
            label="服务费">
          </el-table-column>
          <el-table-column
            prop="lateDay"
            label="逾期天数">
          </el-table-column>
          <el-table-column
            prop="lateMoney"
            label="逾期费用">
          </el-table-column>
          <el-table-column
            prop="shouldReturnMoney"
            label="应还金额"
           >
          </el-table-column>
          <el-table-column
            prop="alreadyRepaidMoney"
            label="已还金额">
          </el-table-column>
          <el-table-column
            width="110"
            label="还款减免金额">
          </el-table-column>
          <el-table-column
            prop="f_createTime"
            width="140"
            label="申请时间">
          </el-table-column>
          <el-table-column
            prop="f_paymentDate"
            width="140"
            label="到账时间">
          </el-table-column>
          <el-table-column
            prop="f_shouldReturnDate"
            width="140"
            label="应还日期">
          </el-table-column>
          <el-table-column
            prop="f_alreadyRepaidDate"
            width="140"
            label="实际还款日期">
          </el-table-column>
          <el-table-column
            prop="userStatus"
            label="客户状态">
          </el-table-column>
          <el-table-column
            prop="channelSources"
            label="渠道来源">
          </el-table-column>
          <el-table-column
            prop="auditor"

            label="审核员">
          </el-table-column>
          <el-table-column
            prop="receiver"
            label="催收员">
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
  import Vue from 'vue'
  import { dateTimeFormat } from '@/utils/dateFormat.js'
  export default{
  name: 'orderList',
  data () {
    return {
      orderList:[],
    }
  },
  created() {
     this.HandleGetOrderList();
  },
    methods: {
      //获取数据请求
      HandleGetOrderList:function() {
        Vue.http.get('/hxy/loanAllService').then((res)=>{

          res.list.forEach(function(item){
            item.f_createTime = dateTimeFormat(item.createTime);
            item.f_paymentDate = dateTimeFormat(item.paymentDate);
            item.f_shouldReturnDate = dateTimeFormat(item.shouldReturnDate);
            item.f_alreadyRepaidDate = dateTimeFormat(item.alreadyRepaidDate);
          })
          this.orderList = res.list
          //console.log(this.orderList)
        })
      },
      //导出数据
      HandleExportDate:function(){
        window.open('http://localhost:8080/hxy/execl/LoanAllexport.do')
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
