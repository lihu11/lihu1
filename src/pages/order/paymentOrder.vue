<template>
  <div class="container">
    <div class="box-card">
      <el-row style="margin-bottom: 15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button size="mini" @click='HandleExportDate'>导出Excel</el-button>
        </el-col>
      </el-row>
      <el-form :inline="true" class="demo-form-inline" ref='form' :model="form">
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
        <el-form-item label="到期时间">
           <el-date-picker
                type="daterange"
                prefix-icon='el-icon-time'
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                size='mini'>
              </el-date-picker>
        </el-form-item>
        <el-form-item label="借款人姓名">
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
        <el-form-item label="订单状态" >
          <el-select  placeholder="全部" size="mini" v-model="form.a">
             <el-option label="未还款" value="1"></el-option>
             <el-option label="已还款" value="2"></el-option>
             <el-option label="逾期中" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="还款方式">
          <el-select  placeholder="全部" size="mini" v-model="form.b">
             <el-option label="线上" value="1"></el-option>
             <el-option label="线下" value="2"></el-option>
             <el-option label="代扣" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收款渠道">
          <el-select  placeholder="全部" size="mini" v-model="form.c">
             <el-option label="微信" value="1"></el-option>
             <el-option label="支付宝" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="还款银行">
          <el-select  placeholder="全部" size="mini" v-model="form.d">
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
        <el-form-item label="催收人员">
          <el-select  placeholder="全部" size="mini" v-model="form.e">
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
        <el-form-item label="渠道来源">
          <el-select  placeholder="全部" size="mini" v-model="form.f">
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
        <el-form-item label="还款次数">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="是否复借">
          <el-select  placeholder="全部" size="mini" v-model="form.g">
             <el-option label="是" value="1"></el-option>
             <el-option label="否" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini"  class="searchBtn">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="count">
      <span>已还款总额：0</span>
      <span>已还单数：0</span>
    </div>
    <div class="mytable">
      <el-table
          height="480px"
          size='mini'
          :data="payList"
          border
          style="width: 100%"
          class="tableBox">
          <el-table-column
           type="index"
            label="序号"
           >
          </el-table-column>
          <el-table-column
            prop="applicationNumber"
            width="140"
            label="订单号">
          </el-table-column>
          <el-table-column
            prop="userName"
            width="100"
            label="借款人姓名">
          </el-table-column>
          <el-table-column
            prop="phoneNumber"
            label="电话"
            width="100">
          </el-table-column>
          <el-table-column
            prop="loanMoney"
            label="借款金额">
          </el-table-column>
          <el-table-column
            label="滞纳金"
           >
          </el-table-column>
          <el-table-column
            prop="loanAllId"
            label="减免金额">
          </el-table-column>
          <el-table-column
            prop="alreadyRepaidMoney"
            label="还款金额">
          </el-table-column>
          <el-table-column
            prop="returnType"
            label="还款类型">
            全部还款
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
            prop="f_shouldReturnDate"
            label="到期时间"
            width="140"
           >
          </el-table-column>
          <el-table-column
            prop="f_alreadyRepaidDate"
            width="140"
            label="还款时间">
          </el-table-column>
          <el-table-column
            prop="loseType"
            width="110"
            label="失败原因">
          </el-table-column>
          <el-table-column
            prop="returnChannel"
            width="140"
            label="还款方式">
          </el-table-column>
          <el-table-column
            prop="receivingChannel"
            label="收款渠道">
          </el-table-column>
          <el-table-column
            prop="returnBank"
            label="还款银行">
          </el-table-column>
          <el-table-column
            prop="receiver"
            width="100"
            label="催收人员">
          </el-table-column>
          <el-table-column
            prop="channelSources"
            label="渠道来源">
          </el-table-column>
          <el-table-column
            prop="otherId"
            width="140"
            label="三方订单">
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
      @size-change='handleChangepageSize'
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
    name:'paymentOrder',
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
        //获取到的数据
        payList:[],
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
      this.HandleGetPayList(1,10)
    },
    methods:{
      //获取还款数据
      HandleGetPayList:function(currentPage,pageSize){
        Vue.http.get('/hxy/loanReturnService?currentPage=' + currentPage + '&pageSize='+pageSize).then((res)=>{
          this.total = res.totalCount;
          res.list.forEach(function(item){
            item.f_shouldReturnDate = dateTimeFormat(item.shouldReturnDate);
            item.f_alreadyRepaidDate = dateTimeFormat(item.alreadyRepaidDate);
          })
          this.payList = res.list
        })
      },
      //导出还款数据
      HandleExportDate:function(){
        window.open('http://localhost:8080/hxy/execl/LoanReturnexport.do')
      },
      //页码切换
      handleCurrentChange: function (currentPage) {
        // console.log(curren - tpage);
        this.currentPage = currentPage;
        this.HandleGetPayList(currentPage,this.pageSize);
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
        this.HandleGetPayList(this.currentPage,pageSize);
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
