<template>
<div>
  <form class="selectBox">
    <a class="exportBox" href="/hxy/execl/Userlistexport.do">
      <div class="exportBtn">导出Excel</div>
    </a>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input size="mini" v-model="formInline.approver" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input size="mini" v-model="formInline.mobile" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="实名认证">
        <el-select size="mini" v-model="formInline.shiming" placeholder="全部">
          <el-option label="已认证" value="shanghai"></el-option>
          <el-option label="未认证" value="beijing"></el-option>
          <el-option label="认证中" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="银行卡认证">
        <el-select size="mini" v-model="formInline.bankCard" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="人脸识别认证">
        <el-select size="mini" v-model="formInline.face" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="通讯录认证">
        <el-select size="mini" v-model="formInline.mailList" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="运营商认证">
        <el-select size="mini" v-model="formInline.operator" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户状态">
        <el-select size="mini" v-model="formInline.userState" placeholder="全部">
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

      <el-form-item label="订单状态">
        <el-select size="mini" v-model="formInline.orderState" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="注册时间">
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
      <el-form-item label="老客是否复借">
        <el-select size="mini" v-model="formInline.borrow" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否提单">
        <el-select size="mini" v-model="formInline.bill" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
         <el-button type="warning">查询</el-button>
      </el-form-item>
    </el-form>
  </form>
  <el-dialog
  title="手机验证码"
  :visible.sync="dialogVisible"
  width="40%"
  :before-close="handleClose">
   <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <div class="pubLine flex">
      <el-form-item label="手机号" style="margin-right:0">
        <el-input  v-model="formInline.approver" placeholder="请输入" style="width:445px;"></el-input>
    </el-form-item>
    </div>
    <div class="pubLine flex">
      <el-form-item label="验证码" style="margin-bottom:0">
        <el-input  v-model="formInline.approver" placeholder="请输入"></el-input>
      </el-form-item>
      <el-button type="warning">获取验证码</el-button>
    </div>
  </el-form>
  <span slot="footer" class="dialog-footer" style="text-align:center;">
    <el-button type="warning" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  <div class="container">
    <div class="tableContainer">
      <table class="tableBox">
        <thead>
          <tr>
            <td>序号</td>
            <td>用户姓名</td>
            <td>手机号码</td>
            <td>实名认证</td>
            <td>银行卡认证</td>
            <td>人脸识别认证</td>
            <td>通讯录认证</td>
            <td>运营商认证</td>
            <td>渠道来源</td>
            <td>订单状态</td>
            <td>老客是否复借</td>
            <td>风控结果</td>
            <td>用户状态</td>
            <td>注册时间</td>
            <td>登陆时间</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in dataList.list">
            <td v-text="index">1</td>
            <td v-text="item.userName">测试宋</td>
            <td v-text="item.phoneNumber">13735643811</td>
            <td v-text="item.realNameAuthentication" :class="item.realNameAuthentication == '未认证'?' ':' certified'" >未认证</td>
            <td v-text="item.bankCardAuthentication" :class="item.bankCardAuthentication == '未认证'?' ':' certified'">未认证</td>
            <td v-text="item.faceRecognitionAuthentication" :class="item.faceRecognitionAuthentication == '未认证'?' ':' certified'">人脸识别未认证</td>
            <td v-text="item.mailListAuthentication" >未认证</td>
            <td v-text="item.operatorsAuthentication" :class="item.operatorsAuthentication == '已认证'?' certified':item.operatorsAuthentication == '认证失效'?' renzhengfailure':''">未认证</td>
            <td v-text="item.channelSources">quasi</td>
            <td v-text="item.orderStatus" :class="item.orderStatus == '风控通过'?'':' noPass'"></td>
            <td v-text="item.isDoubleLending == 1?'是':item.isDoubleLending == 0?'否':''">否</td>
            <td v-text="item.windControlResults"></td>
            <td>
              <span :class="['userState',{'normal' : item.userStatus == '普通', 'blackList' : item.userStatus == '黑名单'}]" v-text="item.userStatus">灰名单</span>
            </td>
            <td v-text="item.f_createTime">2019-09-04 10:34:39</td>
            <td v-text="item.f_loginTime">2019-09-04 10:34:39</td>
            <td>
              <div class="btnBox">
                <el-button type="warning"  @click="dialogVisible = true">查看</el-button>
                <el-button type="warning">加入黑名单</el-button>
                <el-button type="warning">删除</el-button>
              </div>
            </td>
          </tr>
          <tr>
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
        dialogVisible: false,
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
          qudao:'',
          orderState:'',
          dataRange:"",
          borrow:'',
          bill:''
        },
        dataList:'',
        currentPage:1,
        pageSize:10,
        total:0
      }
    },
    methods: {
      ShowShandow() {

      },
      // 点击筛选页数
      handleSizeChange(pageSize) {
        this.pageSize = pageSize;
        this.HandleGetList(this.currentPage,pageSize)
      },
      // 点击下一页
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
        this.HandleGetList(currentPage,this.pageSize)
      },
      // 接口请求数据
      HandleGetList:function (currentPage,pageSize) {
        var self = this;
        axios.get('/hxy/getUserListLb?currentPage=' + currentPage + '&pageSize=' + pageSize).then(function (res) {
          self.dataList = res
          res.list.forEach(function (item){
            item.f_createTime = dateTimeFormat(item.createTime)
          })
          res.list.forEach(function (item){
            item.f_loginTime = dateTimeFormat(item.loginTime)
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
  .exportBox,.exportBtn{
    color: #606266;
  }
  .exportBtn:hover{
    background-color: #ecf5ff;
    color: #409eff;
  }



  /* 弹窗自定义 */
  .flex{
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }
  .pubLine{
    width: 500px;
    justify-content: space-between;
    /* padding-right: 15px; */
  }
</style>
