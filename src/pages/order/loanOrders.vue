<template>
  <div class="container">
    <div class="box-card">
      <el-row style="margin-bottom: 15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button size="mini" @click='HandleExportDate'>导出Excel</el-button>
        </el-col>
      </el-row>
      <el-form :inline="true" class="demo-form-inline" ref='form' :model="form">
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
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="期限" >
          <el-select  placeholder="全部" size="mini" v-model="form.a">
             <el-option label="1" value="1"></el-option>
             <el-option label="2" value="2"></el-option>
             <el-option label="3" value="3"></el-option>
             <el-option label="4" value="4"></el-option>
             <el-option label="5" value="5"></el-option>
             <el-option label="6" value="6"></el-option>
             <el-option label="7" value="7"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select  placeholder="全部" size="mini" v-model="form.b">
             <el-option label="未还款" value="1"></el-option>
             <el-option label="已还款" value="2"></el-option>
             <el-option label="逾期中" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="放款银行">
          <el-select  placeholder="全部" size="mini" v-model="form.c">
             <el-option label="邮政储蓄银行" value="1"></el-option>
             <el-option label="中国工商银行" value="2"></el-option>
             <el-option label="中国农业银行" value="3"></el-option>
             <el-option label="中国建设银行" value="4"></el-option>
             <el-option label="交通银行" value="5"></el-option>
             <el-option label="中信银行" value="6"></el-option>
             <el-option label="光大银行" value="7"></el-option>
             <el-option label="民生银行" value="8"></el-option>
             <el-option label="招商银行" value="9"></el-option>
             <el-option label="兴业银行" value="10"></el-option>
             <el-option label="浦东发展银行" value="11"></el-option>
             <el-option label="上海银行" value="12"></el-option>
             <el-option label="平安银行" value="13"></el-option>
             <el-option label="北京银行" value="14"></el-option>
             <el-option label="华夏银行" value="15"></el-option>
             <el-option label="广发银行" value="16"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渠道来源">
          <el-select  placeholder="全部" size="mini" v-model="form.d">
             <el-option label="牛牛借" value="1"></el-option>
             <el-option label="轻松借" value="2"></el-option>
             <el-option label="月花花" value="3"></el-option>
             <el-option label="vuq5" value="4"></el-option>
             <el-option label="vur6" value="5"></el-option>
             <el-option label="awu3" value="6"></el-option>
             <el-option label="ivq4" value="7"></el-option>
             <el-option label="kkfc" value="8"></el-option>
             <el-option label="liga" value="9"></el-option>
             <el-option label="fess" value="10"></el-option>
             <el-option label="bsff" value="11"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="新老客">
          <el-select  placeholder="全部" size="mini" v-model="form.e">
             <el-option label="新客" value="1"></el-option>
             <el-option label="老客" value="2"></el-option>
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
            type="index"
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
      @size-change="handleChangepageSize"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
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
        loanList:[],
        //总数据条数
        total:0,
        //当前页(默认为1)
        currentPage:1,
        //页面大小
        pageSize:10,
        //list
        list:{},
        //tempList
        tempList:[]
      }
    },
    mounted() {
      this.HandleGetLoanList(1,10)
    },
    methods:{
      //获取放款订单数据
      HandleGetLoanList:function(currentPage,pageSize){
        Vue.http.get('./loanStartService?currentPage=' + currentPage + '&pageSize='+pageSize).then((res)=>{
          this.total = res.totalCount;
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
        window.open('./execl/LoanStartexport.do')
      },
      //页码切换
      handleCurrentChange: function (currentPage) {
        // console.log(curren - tpage);
        this.currentPage = currentPage;
        this.HandleGetLoanList(currentPage,this.pageSize);
        this.currentChangePage(this.list, currentPage);
        // console.log(currentPage);
      },
      //分页处理
      currentChangePage: function (list, currentPage) {
          var from = (currentPage - 1) * this.pageSize;
          var to = currentPage * this.pageSize;
          console.log(to)
          this.tempList = [];
          for (; from < to; from++) {
              if (list[from]) {
                  this.tempList.push(list[from]);
              }
          }
      },
      //改变大小
      handleChangepageSize:function(pageSize){
        this.pageSize = pageSize;
        this.HandleGetLoanList(this.currentPage,pageSize);
        this.currentChangePage(this.list,this.currentPage);
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
