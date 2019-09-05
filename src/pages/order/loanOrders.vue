<template>
  <div class="container">
    <div class="box-card">
      <el-row style="margin-bottom: 15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button size="mini" @click='HandleExportDate'>导出Excel</el-button>
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
          :data="loanList"
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
            prop="f_createTime"
            width="140"
            label="订单创建时间">
          </el-table-column>
          <el-table-column
            prop="applicationNumber"
            label="订单号">
          </el-table-column>
          <el-table-column
            prop="userName"
            label="借款人姓名"
            width="100">
          </el-table-column>
          <el-table-column
            prop="phoneNumber"
            label="电话"
            width="100">
          </el-table-column>
          <el-table-column
            prop="windControlScore"
            label="风控分数"
            width="100"
           >
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
            prop="loanDay"
            label="期限(天)">
          </el-table-column>
          <el-table-column
            prop="loanTimes"
            label="借款次数">
          </el-table-column>
          <el-table-column
            prop="returnTimes"
            label="还款次数">
          </el-table-column>
          <el-table-column
            prop="loanStatus"
            label="订单状态">
          </el-table-column>
          <el-table-column
            prop="loseType"
            label="失败原因"
           >
          </el-table-column>
          <el-table-column
            prop="loanBank"
            label="放款银行">
          </el-table-column>
          <el-table-column
            prop="f_accountDate"
            width="140"
            label="到账时间">
          </el-table-column>
          <el-table-column
            prop="channelSources"
            label="渠道来源">
          </el-table-column>
          <el-table-column
            prop="userStatus"
            label="新老客">
          </el-table-column>
          <el-table-column
            prop="otherId"
            width="90"
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
  import Vue from 'vue'
  import { dateTimeFormat } from '@/utils/dateFormat.js'
  export default{
    name:'loanOrders',
    data(){
      return {
        loanList:[]
      }
    },
    mounted() {
      this.HandleGetLoanList()
    },
    methods:{
      //获取放款订单数据
      HandleGetLoanList:function(){
        Vue.http.get('/hxy/loanStartService').then((res)=>{
          res.list.forEach(function(item){
            item.f_createTime = dateTimeFormat(item.createTime);
            item.f_accountDate = dateTimeFormat(item.accountDate);
          })
          this.loanList = res.list
          //console.log(this.orderList)
        })
      },
      //导出放款订单数据
      HandleExportDate:function(){
        window.open('http://localhost:8080/hxy/execl/LoanStartexport.do')
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
