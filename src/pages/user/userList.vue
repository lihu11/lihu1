<template>
<div>
  <form class="selectBox">
    <div class="exportBox">
      <div class="exportBtn">导出Excel</div>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input size="mini" v-model="formInline.approver" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input size="mini" v-model="formInline.mobile" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="实名认证">
        <el-select size="mini" v-model="formInline.shiming" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
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
        <el-select size="mini" v-model="formInline.channelSources" placeholder="全部">
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
          <tr>
            <td>1</td>
            <td>测试宋</td>
            <td>13735643811</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>quasi</td>
            <td></td>
            <td>否</td>
            <td></td>
            <td>
                 <span class="userState normal">灰名单</span>
              <span class="userState blackList">黑名单</span>
              <span class="userState greyList">灰名单</span>
            </td>
            <td>2019-09-04 10:34:39</td>
            <td>2019-09-04 10:34:39</td>
            <td>
              <div class="btnBox">
                <el-button type="warning">查看</el-button>
                <el-button type="warning">加入黑名单</el-button>
                <el-button type="warning">删除</el-button>
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>测试宋</td>
            <td>13735643811</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>quasi</td>
            <td></td>
            <td>否</td>
            <td></td>
            <td class="userStateBox">
              <span class="userState normal">普通</span>
            </td>
            <td>2019-09-04 10:34:39</td>
            <td>2019-09-04 10:34:39</td>
            <td>
              <div class="btnBox">
                <el-button type="warning">查看</el-button>
                <el-button type="warning">加入黑名单</el-button>
                <el-button type="warning">删除</el-button>
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>测试宋</td>
            <td>13735643811</td>
            <td class="certified">已认证</td>
            <td class="renzhengfailure">认证失效</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>quasi</td>
            <td>
              <div class="stateBox">
                <span class="noPass">风控不通过</span>
              </div>
            </td>
            <td>否</td>
            <td></td>
            <td>
               <span class="userState normal">灰名单</span>
              <span class="userState blackList">黑名单</span>
              <span class="userState greyList">灰名单</span>
            </td>

            <td>2019-09-04 10:34:39</td>
            <td>2019-09-04 10:34:39</td>
            <td>
              <div class="btnBox">
                <el-button type="warning">查看</el-button>
                <el-button type="warning">加入黑名单</el-button>
                <el-button type="warning">删除</el-button>
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>测试宋</td>
            <td>13735643811</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>quasi</td>
            <td></td>
            <td>否</td>
            <td></td>
            <td>普通</td>
            <td>2019-09-04 10:34:39</td>
            <td>2019-09-04 10:34:39</td>
            <td>
              <div class="btnBox">
                <el-button type="warning">查看</el-button>
                <el-button type="warning">加入黑名单</el-button>
                <el-button type="warning">删除</el-button>
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>测试宋</td>
            <td>13735643811</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>未认证</td>
            <td>quasi</td>
            <td></td>
            <td>否</td>
            <td></td>
            <td>
              <span class="userState blackList">黑名单</span>
            </td>
            <td>2019-09-04 10:34:39</td>
            <td>2019-09-04 10:34:39</td>
            <td>
              <div class="btnBox">
                <el-button type="warning">查看</el-button>
                <el-button type="warning">加入黑名单</el-button>
                <el-button type="warning">删除</el-button>
              </div>
            </td>
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
