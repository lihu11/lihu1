<template>
<div>
  <form class="selectBox">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input size="mini" v-model="formInline.approver" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input size="mini" v-model="formInline.mobile" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="订单状态">
        <el-select size="mini" v-model="formInline.shiming" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="渠道来源">
        <el-select size="mini" v-model="formInline.shiming" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="新老客">
        <el-select size="mini" v-model="formInline.shiming" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="审核员">
        <el-input size="mini" v-model="formInline.mobile" placeholder="请输入"></el-input>
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
        <el-input size="mini" v-model="formInline.mobile" placeholder="请输入"></el-input>
      </el-form-item>
       <el-form-item label="订单号取单">
        <el-input size="mini" v-model="formInline.mobile" placeholder="请输入"></el-input>
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
          <tr>
            <td>1</td>
            <td>1654165132165416565135135</td>
            <td>测试宋</td>
            <td>13735643811</td>
            <td>7</td>
            <td>风控不通过</td>
            <td>3</td>
            <td>2.7</td>
            <!-- <td>0.3</td> -->
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
                <!-- <el-button type="warning">删除</el-button> -->
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
            <!-- <td>0.3</td> -->
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
                <!-- <el-button type="warning">删除</el-button> -->
              </div>
            </td>
          </tr>
           <tr >
            <td class="noData" colspan="16">暂无数据</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pageBox">
      <el-pagination
      background
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
