<template>
  <!-- <div>这是订单列表</div>-->
  <div>
    <div class="box-card">
      <el-row style="margin-bottom:15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button size="mini">导出Excel</el-button>
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
         <el-select  placeholder="全部" size="mini" v-model="form.f">
            <el-option label="未还款" value="1"></el-option>
            <el-option label="已还款" value="2"></el-option>
            <el-option label="逾期中" value="3"></el-option>
         </el-select>
        </el-form-item>
        <el-form-item label="现催收员" >
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
        <el-form-item label="审核员">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="逾期天数">
           <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="至">
           <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-form-item label="跟进类型">
          <el-select  placeholder="全部" size="mini" v-model="form.a">
             <el-option label="无人接听" value="1"></el-option>
             <el-option label="无法接通" value="2"></el-option>
             <el-option label="第三方转告" value="3"></el-option>
             <el-option label="谈判" value="4"></el-option>
             <el-option label="返款意愿低" value="5"></el-option>
             <el-option label="无偿还能力" value="6"></el-option>
             <el-option label="谈判-部分还款" value="7"></el-option>
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
        <el-form-item label="最新跟进时间">
           <el-date-picker
                type="daterange"
                prefix-icon='el-icon-time'
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                size='mini'>
              </el-date-picker>
        </el-form-item>
        <el-form-item label="新老客">
         <el-select  placeholder="全部" size="mini" v-model="form.e">
            <el-option label="新客" value="1"></el-option>
            <el-option label="老客" value="2"></el-option>
         </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini"  class="searchBtn">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="count">
      <span>当日分配订单数：</span>
      <span>分配金额：</span>
      <span>回收订单数：</span>
      <span>回收金额：</span>
      <span>展期单数：</span>
      <span>展期费用：</span>
      <span>回收总金额：</span>
    </div>
	<div>
		<el-button type="primary" size="mini" @click="dialogFormVisible = true">批量转单</el-button>
	</div>
    <div class="order-table">
      <el-table
          height="480px"
          size='mini'
          border
          style="width: 100%"
          >
          <el-table-column
                type="selection"
                width="55">
              </el-table-column>
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
            label="用户姓名">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机编号">
          </el-table-column>
          <el-table-column
            prop="loan_day"
            label="到账时间"
>
          </el-table-column>
          <el-table-column
            prop="order_status"
            label="借款天数"
           >
          </el-table-column>
          <el-table-column
            prop="is_show"
            label="逾期天数">
          </el-table-column>
          <el-table-column
            prop="loan_money"
            label="借款金额">
          </el-table-column>
          <el-table-column
            prop="arrival_amount"
            label="应还金额">
          </el-table-column>
          <el-table-column
            prop="service_charge"
            label="已还金额">
          </el-table-column>
          <el-table-column
            prop="days_overdue"
            label="逾期费">
          </el-table-column>
          <el-table-column
            prop="money_overdue"
            width="94"
            label="实际还款时间">
          </el-table-column>
          <el-table-column
            prop="should_amount"
            label="订单状态"
           >
          </el-table-column>
          <el-table-column
            prop="name"
            label="应用名">
          </el-table-column>
          <el-table-column
            prop="punishment"
            label="现催收员">
          </el-table-column>
          <el-table-column
            prop="apply_time"
            label="原催收员">
          </el-table-column>
          <el-table-column
            prop="arr_time"
            label="渠道来源">
          </el-table-column>
          <el-table-column
            prop="s_time"
            label="跟进类型">
          </el-table-column>
          <el-table-column
            prop="ss_time"
            width="96"
            label="最新跟进信息">
          </el-table-column>
          <el-table-column
            prop="status"
            width="96"
            label="最新跟进时间">
          </el-table-column>
          <el-table-column
            prop="source_for"
            label="操作">
          </el-table-column>
        </el-table>
    </div>
    <div class="pageBox">
      <el-pagination
      background
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="0">
    </el-pagination>
    </div>
    <!-- 模态框设置 -->
    <el-dialog title="批量订单转移" :visible.sync="dialogFormVisible" width=22%>
      <el-form :model="form1">
        <el-form-item label="订单编号" label-width="140px">
         <el-select  placeholder="请选择文章标签" disabled size="mini" v-model="form.e">
            <el-option label="居杰涛" value="1"></el-option>
            <el-option label="姜元全" value="2"></el-option>
         </el-select>
        </el-form-item>
        <el-form-item label="目标催收员" label-width="140px">
          <el-select  placeholder="全部" size="mini" v-model="form.e">
             <el-option label="居杰涛" value="1"></el-option>
             <el-option label="姜元全" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="warning" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default{
     name:'collectionOrder',
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
        form1:{
          name:'',
          region:'',
          delivery:false
        },
        dialogFormVisible:false
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
