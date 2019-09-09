<template>
<div>
  <form class="selectBox">
    <div class="exportBox">
      <el-button type="warning">添加黑名单</el-button>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="用户姓名">
        <el-input size="mini" v-model="formInline.approver" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input size="mini" v-model="formInline.mobile" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="用户类型">
        <el-select size="mini" v-model="formInline.shiming" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
     
      <el-form-item label="拉黑时间">
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
          <tr >
            <td>序号</td>
            <td>用户姓名</td>
            <td>手机号码</td>
            <td>身份证号</td>
            <td>用户类型</td>
            <td>标签</td>
            <td>备注</td>
            <td>拉黑时间</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in dataList.list">
            <td v-text="index"></td>
            <td v-text="item.userName"></td>
            <td v-text="item.phoneNumber"></td>
            <td v-text="item.idCard"></td>
            <td v-text="item.userStatus"></td>
            <td></td>
            <td></td>
            <td v-text="item.f_dark_time"></td>
            <td>
              <div class="btnBox">
                <el-button type="warning">查看</el-button>
                <el-button type="warning">删除</el-button>
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
        currentPage:1,
        pageSize:10,
        total:0,
        formInline: {
          approver:'',
          mobile:'',
          shiming:'',
          bankCard:'',
          face:'',
          mailList:'',
          operator:'',
          userState:'',
          channelSources:'',
          orderState:'',
          borrow:'',
          bill:''
        }
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
      HandleGetList:function (currentPage,pageSize) {
        var self = this;
        axios.get('/hxy/getHeiMinDan?currentPage=' + currentPage + '&pageSize=' + pageSize).then(function (res) {
          self.dataList = res
          res.list.forEach(function (item){
            item.f_dark_time = dateTimeFormat(item.dark_time)
          })
        }).catch(function (error) { 
          console.log(error);
        });
      }
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
