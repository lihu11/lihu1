<template>
<div>
  <form class="selectBox">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input size="mini" v-model="formInline.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input size="mini" v-model="formInline.mobile" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="订单状态">
        <el-select size="mini" v-model="formInline.orderState" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="渠道来源">
        <el-select size="mini" v-model="formInline.qudao" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="新老客">
        <el-select size="mini" v-model="formInline.customer" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="审核员">
        <el-input size="mini" v-model="formInline.auditor" placeholder="请输入"></el-input>
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
       <el-form-item label="复审单数">
        <el-input size="mini" v-model="formInline.reviewTime" placeholder="请输入"></el-input>
      </el-form-item>
       <el-form-item label="订单号取单">
        <el-input size="mini" v-model="formInline.orderNum" placeholder="请输入"></el-input>
      </el-form-item>
         <el-button type="warning">查询</el-button>
    </el-form>
  </form>
  <div class="tipsBox flex">
    <div class="tipsItem">可取单数：<span class="kequNum">0</span>单</div>
    <div class="tipsItem">已领取：<span class="kequNum">0</span>单</div>
    <div class="tipsItem tipsBlue">已审核：<span class="kequNum">0</span>单</div>
    <div class="tipsItem tipsGreen">可领取风控通过：<span class="kequNum">0</span>条</div>
    <div class="tipsItem tipsOrange">风控不通过：<span class="kequNum">0</span>条</div>
  </div>
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
            <!-- <td>服务费（元）</td> -->
            <td>申请时间</td>
            <td>新老客</td>
            <td>用户状态</td>
            <td>渠道来源</td>
            <td>风控结果</td>
            <td>风控分数</td>
            <td>审核员</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>1</td>
            <td>1654165132165416565135135</td>
            <td>测试宋</td>
            <td>13735643811</td>
            <td>7</td>
            <td>风控不通过</td>
            <td>3</td>
            <td>2.7</td>
            <td>2019-09-04 10:34:39</td>
            <td>老客</td>
            <td>用户状态</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div class="btnBox">
                <el-button type="warning">详情</el-button>
          
              </div>
            </td>
          </tr>
           <tr>
            <td>1</td>
            <td>1654165132165416565135135</td>
            <td>测试宋</td>
            <td>13735643811</td>
            <td>7</td>
            <td>风控不通过</td>
            <td>3</td>
            <td>2.7</td>
            <td>2019-09-04 10:34:39</td>
            <td>老客</td>
            <td>用户状态</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div class="btnBox">
                <el-button type="warning">详情</el-button>
                
              </div>
            </td>
          </tr> -->
           <tr >
            <td class="noData" colspan="16">暂无数据</td>
          </tr>
        </tbody>
      </table>
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
</div>

</template>

<script>


   export default {
    data() {
      return {
        dataRange:"",
        formInline: {
          name:'',
          mobile:'',
          orderState:'',
          qudao:'',
          customer:'',
          auditor:'',
          dataRange:'',
          reviewTime:'',
          orderNum:'',
        }
      }
    },
    methods: {

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
.noData{
  font-size: 14px!important;
  color: #666666;
}
  .app-container .app-body{
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    padding: 25px;
  }
  .tipsItem{
    font-size: 12px;
    font-weight: bold;
    margin-right: 20px;
    color: #666666;
  }
  .tipsBox{
    height: 30px;
    background-color: #f2f2f2;
    margin-bottom: 15px;
    padding-left: 15px;
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
  .flex{
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }
  .tipsBlue{
    color: #00a9d9;
  }
  .tipsGreen{
    color: #3bcc4a;
  }
  .tipsOrange{
    color: #ea9100;
  }
</style>
