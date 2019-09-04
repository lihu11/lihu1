<template>
  <div class="re_order">
    <el-row>
       <el-form :inline="true" class="demo-form-inline">
         <el-form-item label="订单编号">
           <el-input  placeholder="请输入" round size="mini"></el-input>
         </el-form-item>
         <el-form-item label="预期费用">
           <el-input  placeholder="请输入" round size="mini"></el-input>
         </el-form-item>
         <el-form-item>
           <el-button type="primary" size="mini"  class="searchBtn">查询</el-button>
         </el-form-item>
       </el-form>
    </el-row>
    <el-row style="margin-top:16px;">
      <span class="order_detail">订单详情：</span>
    </el-row>
    <el-row class="detail_layout">
      <div class="leftBox">
        <ul>
          <li>订单号：</li>
          <li>手机号：</li>
          <li>借款金额：</li>
          <li>滞纳金：</li>
          <li>还款期限：</li>
          <li>订单状态：</li>
        </ul>
      </div>
      <div class="rightBox">
        <ul>
          <li>姓名：</li>
          <li>借款日期：</li>
          <li>放款金额：</li>
          <li>还款金额：</li>
          <li>逾期天数：</li>
          <li>催收人员：</li>
        </ul>
      </div>
    </el-row>
  </div>
</template>

<script>
  name: 'offlinePaymentreP'
</script>

<style>
	.re_order{
		width:100%;
		border:1px solid #ebeef5;
    padding:10px 20px 0
    
    
    ;
	}
  .searchBtn {
    border: none;
    outline: none;
    background-color: #eda323
  }
  .order_detail{
    font-size: 18px;
    font-weight: 800;
  }
  .detail_layout{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left:20px;
  }
  .leftBox{
    width: 50%;
    text-align: left;
  }
  .rightBox{
    width: 50%;
    text-align: left;
  }
  .leftBox ul{
    padding: 0;
  }
  .leftBox ul li{
    list-style: none;
    height: 24px;
  }
  .rightBox ul{
    padding: 0;
  }
  .rightBox ul li{
    list-style: none;
    height: 24px;
  }
</style>
