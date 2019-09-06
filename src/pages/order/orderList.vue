<template>
  <!-- <div>这是订单列表</div>-->
  <div>
    <div class="box-card">
      <el-row style="margin-bottom:15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button size="mini" @click='HandleExportDate'>导出Excel</el-button>
        </el-col>
      </el-row>
      <el-form :inline="true" class="demo-form-inline" ref='form' :model="form">
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
          <el-select  placeholder="全部" size="mini" v-model="form.a">
             <el-option label="未还款" value="1"></el-option>
             <el-option label="已还款" value="2"></el-option>
             <el-option label="逾期中" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渠道来源" >
          <el-select  placeholder="全部" size="mini" v-model="form.b">
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
        <el-form-item label="审核员">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="现催收员">
          <el-select  placeholder="全部" size="mini" v-model="form.c">
             <el-option label="居杰涛" value="1"></el-option>
             <el-option label="齐康星" value="2"></el-option>
             <el-option label="汪武新" value="3"></el-option>
             <el-option label="姜元全" value="4"></el-option>
             <el-option label="陈栋" value="5"></el-option>
             <el-option label="彭彬" value="6"></el-option>
             <el-option label="赵启" value="7"></el-option>
             <el-option label="居强军" value="8"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户状态">
          <el-select  placeholder="全部" size="mini" v-model="form.d">
             <el-option label="普通" value="1"></el-option>
             <el-option label="黑名单" value="2"></el-option>
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
          <el-select  placeholder="全部" size="mini" v-model="form.e">
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
  name: 'orderList',
  data () {
    return {
	  //form
	  form:{
		  a:'',
		  b:'',
		  c:'',
		  d:'',
		  e:'',
		  f:''
	  },
      //订单列表数据
      orderList:[],
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
  created() {
     this.HandleGetOrderList(1,10);
  },
    methods: {
      //获取数据请求
      HandleGetOrderList:function(currentPage,pageSize) {
        console.log(currentPage)
        Vue.http.get('/hxy/loanAllService?currentPage=' + currentPage + '&pageSize='+pageSize).then((res)=>{
          this.total = res.totalCount;
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
      },
      //页码切换
      handleCurrentChange: function (currentPage) {
        // console.log(curren - tpage);
        this.currentPage = currentPage;
        this.HandleGetOrderList(currentPage,this.pageSize);
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
        this.HandleGetOrderList(this.currentPage,pageSize);
        this.currentChangePage(this.list,this.currentPage);
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
