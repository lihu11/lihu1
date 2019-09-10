<template>
<div>
  <form class="selectBox">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="订单编号">
        <el-input size="mini" v-model="formInline.orderNum" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="用户姓名">
        <el-input size="mini" v-model="formInline.userName" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input size="mini" v-model="formInline.mobile" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="订单状态">
        <el-select size="mini" v-model="formInline.orderState" placeholder="全部">
          <el-option label="未还款" value="shanghai"></el-option>
          <el-option label="已还款" value="beijing"></el-option>
           <el-option label="逾期中" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="客户状态">
        <el-select size="mini" v-model="formInline.customer" placeholder="全部">
          <el-option label="普通" value="shanghai"></el-option>
          <el-option label="黑名单" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="渠道来源">
        <el-select size="mini" v-model="formInline.qudao" placeholder="全部">
          <el-option label=牛牛借 value="shanghai"></el-option>
          <el-option label="轻松花" value="beijing"></el-option>
          <el-option label="轻松借" value="beijing"></el-option>
          <el-option label="月花花" value="beijing"></el-option>
          <el-option label="vuq5" value="beijing"></el-option>
          <el-option label="vur6" value="beijing"></el-option>
          <el-option label="awu3" value="beijing"></el-option>
          <el-option label="ivq4" value="beijing"></el-option>
          <el-option label="kkfc" value="beijing"></el-option>
          <el-option label="liga" value="beijing"></el-option>
          <el-option label="fess" value="beijing"></el-option>
          <el-option label="bsff" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="审核员">
        <el-input size="mini" v-model="formInline.userName" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="申请时间">
        <div class="block">
        <el-date-picker size="mini"
            v-model="dataRange"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            default-value="2010-10-01">
        </el-date-picker>
        </div>
      </el-form-item>
         <el-button type="warning">查询</el-button>
    </el-form>
  </form>
  <div class="container">
    <div class="tableContainer">
      <table class="tableBox">
        <thead>
          <tr>
            <td>序号</td>
            <td>订单编号</td>
            <td>用户姓名</td>
            <td>手机号码</td>
            <td>借款期限（天）</td>
            <td>订单状态</td>
            <td>借款金额（元）</td>
            <td>到账金额（元）</td>
            <td>服务费（元）</td>
            <td>申请时间</td>
            <td>客户状态</td>
            <td>渠道来源</td>
            <td>审核员</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in dataList.list">
            <td v-text="index">1</td>
            <td v-text="item.applicationNumber">1654165132165416565135135</td>
            <td v-text="item.userName">测试宋</td>
            <td v-text="item.phoneNumber">13735643811</td>
            <td v-text="item.loanDay">7</td>
            <td v-text="item.loanStatus" :class="item.loanStatus == '风控通过'?'':' noPass'">风控不通过</td>
            <td v-text="item.loanMoney">3</td>
            <td v-text="item.accountMoney">2.7</td>
            <td v-text="item.serviceMoney">0.3</td>
            <td v-text="item.f_createTime">2019-09-04 10:34:39</td>
            <td v-text="item.userStatus">老客</td>
            <td v-text="item.channelSources"></td>
            <td v-text="item.auditor"></td>
            <td>
              <div class="btnBox">
                <el-button type="warning">详情</el-button>
                <!-- <el-button type="warning">删除</el-button> -->
              </div>
            </td>
          </tr>
           <tr v-show="dataList.length <= 0">
            <td class="noData" colspan="14">暂无数据</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pageBox">
      <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="dataList.totalCount">
    </el-pagination>
    </div>

  </div>
</div>

</template>

<script>

   import axios from 'axios'
  import {dateTimeFormat} from '@/utils/dateFormat.js'
   export default {
    data() {
      return {
        dataRange:"",
        dataList:'',
        formInline: {
          orderNum:'',
          userName:'',
          mobile:'',
          orderState:'',
          customer:'',
          qudao:'',
          auditor:'',
          dataRange:'',
        },
        currentPage:1,
        pageSize:10,
        total:0
      }
    },
    methods: {
      handleSizeChange(pageSize) {
        this.pageSize = pageSize;
        this.HandleGetList(this.currentPage,pageSize)
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
        this.HandleGetList(currentPage,this.pageSize)
      },
      HandleGetList: function (currentPage,pageSize) {
        var self = this;
        axios.get('/hxy/getLoanApplyLb?currentPage=' + currentPage + '&pageSize=' + pageSize).then(function (res) {
          self.dataList = res;
          res.list.forEach(function (item) {
            item.f_createTime = dateTimeFormat(item.createTime)
          })
        }).catch(function (error) { 
          console.log(error);
        });
      }


    },
    created:function () {

    },
    mounted:function () {
      this.HandleGetList(1,10)
    }
  }
</script>

<style scoped>
*{
  font-size: 12px!important;
  box-sizing: border-box;
}
.el-main{
  width: 100%;
}
  .app-container .app-body{
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    padding: 25px;
  }
.noData{
  font-size: 14px!important;
  color: #666666;
}
  .pageBox{
    margin-top: 20px;
    text-align: right;
  }
  .certified{
    color: #3bcc4a;
  }
  .renzhengfailure{
    color: #ea9100;
  }
  .noPass{
    color: #ff0000;
  }
  .normal{
    color: #3bcc4a;
  }
  .blackList{
    color: #ff0000;
  }
  .greyList{
    color: #009fcf;
  }
</style>
