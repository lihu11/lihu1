<template>
  <div class="container">
    <div class="box-card">
      <el-row style="margin-bottom: 15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button size="mini">导出Excel</el-button>
        </el-col>
      </el-row>
      <el-form :inline="true" class="demo-form-inline" ref='form' :model="form">
        <el-form-item label="订单编号">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="三方订单编号">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="用户姓名">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="还款方式" >
          <el-select  placeholder="全部" size="mini" v-model="form.a">
             <el-option label="线上" value="1"></el-option>
             <el-option label="线下" value="2"></el-option>
             <el-option label="代扣" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="新老客">
          <el-select  placeholder="全部" size="mini" v-model="form.b">
             <el-option label="新客" value="1"></el-option>
             <el-option label="老客" value="2"></el-option>
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
        <el-form-item label="原到期时间">
           <el-date-picker
                type="daterange"
                prefix-icon='el-icon-time'
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                size='mini'>
              </el-date-picker>
        </el-form-item>
        <el-form-item label="展期结束时间">
           <el-date-picker
                type="daterange"
                prefix-icon='el-icon-time'
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                size='mini'>
              </el-date-picker>
        </el-form-item>
        <el-form-item label="预期天数">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="至">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="支付结果">
          <el-select  placeholder="全部" size="mini" v-model="form.c">
             <el-option label="支付成功" value="1"></el-option>
             <el-option label="支付中" value="2"></el-option>
             <el-option label="支付失败" value="3"></el-option>
          </el-select>
        </el-form-item>
       <el-form-item label="催收人员">
         <el-select  placeholder="全部" size="mini" v-model="form.d">
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
         <el-select  placeholder="全部" size="mini" v-model="form.e">
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
       <el-form-item label="订单状态">
         <el-select  placeholder="全部" size="mini" v-model="form.f">
            <el-option label="未还款" value="1"></el-option>
            <el-option label="已还款" value="2"></el-option>
            <el-option label="逾期中" value="3"></el-option>
         </el-select>
       </el-form-item>
        <el-form-item label="展期费用">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini"  class="searchBtn">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="count">
      <span>展期收款金额：0</span>
      <span>展期订单数：0</span>
    </div>
    <div class="mytable">
      <el-table
          height="480px"
          size='mini'
          border
          style="width: 100%"
          >
          <el-table-column
            prop="id"
            label="序号"
           >
          </el-table-column>
          <el-table-column
            prop="order-id"
            label="订单编号">
          </el-table-column>
          <el-table-column
            prop="username"
            label="三方订单号">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="loan_day"
            label="用户姓名">
          </el-table-column>
          <el-table-column
            prop="order_status"
            label="新老客"
           >
          </el-table-column>
          <el-table-column
            prop="is_show"
            label="展期天数">
          </el-table-column>
          <el-table-column
            prop="loan_money"
            width="100"
            label="逾期展期天数">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="展期费用">
          </el-table-column>
          <el-table-column
            prop="service_charge"
            label="订单状态">
          </el-table-column>
          <el-table-column
            prop="days_overdue"
            label="还款方式">
          </el-table-column>
          <el-table-column
            prop="money_overdue"
            label="原到期时间">
          </el-table-column>
          <el-table-column
            prop="should_amount"
            label="展期结束时间"
            width="100"
           >
          </el-table-column>
          <el-table-column
            prop="name"
            label="申请时间">
          </el-table-column>
          <el-table-column
            prop="punishment"
            label="支付结果">
          </el-table-column>
          <el-table-column
            prop="apply_time"
            label="催收人员">
          </el-table-column>
          <el-table-column
            prop="arr_time"
            label="支付时间">
          </el-table-column>
          <el-table-column
            prop="s_time"
            label="错误描述">
          </el-table-column>
          <el-table-column
            prop="s_time"
            label="渠道来源">
          </el-table-column>
        </el-table>
    </div>
    <div class="pageBox">
      <el-pagination
      background
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="40">
    </el-pagination>
    </div>
  </div>
</template>

<script>
export default{
  name:'rollOverTheOrder',
  data(){
    return{
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
