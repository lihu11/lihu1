<template>
  <div>
    <div class="box-card">
      <el-row style="margin-bottom:15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button size="mini" @click='handleExport'>导出Excel</el-button>
        </el-col>
      </el-row>
      <el-form :inline="true" class="demo-form-inline" ref='form' :model="form">
        <el-form-item label="渠道名称">
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
        <el-form-item label="日期">
           <el-date-picker
                type="daterange"
                prefix-icon='el-icon-time'
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                size='mini'>
              </el-date-picker>
        </el-form-item>
        <el-button type="warning" size="mini">查询</el-button>
      </el-form>
    </div>
    <div class="text-info">
      <p>黑名单命中率 = 黑名单用户/注册用户 金额首逾率 = 未还金额 / 放款金额 订单首逾率 = 未还订单 / 应还订单 下款率 = 借款人数 / 渠道注册用户数</p>
      <p>只记录渠道当日注册当日下款情况</p>
      <p>如果渠道黑名单命中率超过15%建议停止投放</p>
      <p>每5分钟刷新一次</p>
    </div>
    <div class="order-table">
          <el-table
              height="480px"
              size='mini'
              border
              style="width: 100%"
              :data='c_list'
              >
              <el-table-column
                type="index"
                label="序号"
                width="60"
               >
              </el-table-column>
              <el-table-column
                prop="createTime"
                label="注册日期">
              </el-table-column>
              <el-table-column
                prop="channelName"
                label="商务名称">
              </el-table-column>
              <el-table-column
                prop="n_blackHitRate"
                width="118"
                label="黑名单命中率">
              </el-table-column>
              <el-table-column
                prop="channelType"
                label="渠道名称">
              </el-table-column>
              <el-table-column
                prop="pv"
                label="落地页PV"
               >
              </el-table-column>
              <el-table-column
                prop="uv"
                label="落地页UV">
              </el-table-column>
              <el-table-column
                prop="landPageClick"
                width="118"
                label="落地页下载点击数">
              </el-table-column>
              <el-table-column
                prop="registNum"
                width="118"
                label="渠道注册用户数">
              </el-table-column>
              <el-table-column
                prop="activationNum"
                width="118"
                label="渠道激活用户数">
              </el-table-column>
              <el-table-column
                prop="authenticationNum"
                width="118"
                label="渠道认证用户数">
              </el-table-column>
              <el-table-column
                prop="extractNum"
                width="118"
                label="渠道提件用户数">
              </el-table-column>
              <el-table-column
                prop="leanNum"
                width="118"
                label="渠道借款用户数"
               >
              </el-table-column>
              <el-table-column
                prop="firstNum"
                label="首借人数">
              </el-table-column>
              <el-table-column
                prop="lateNum"
                label="首逾人数">
              </el-table-column>
              <el-table-column
                prop="n_latePercentage"
                label="金额首逾率">
              </el-table-column>
              <el-table-column
                prop="n_orderPercentage"
                label="订单首逾率">
              </el-table-column>
              <el-table-column
                prop="n_subscriptionRate"
                width="60"
                label="下单率">
              </el-table-column>
            </el-table>
        </div>
        <div class="pageBox">
          <el-pagination
          background
          @size-change="handleChangepageSize"
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
  export default{
   name:'dayChannelCount',
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
        c_list:[],
        total:0,
        currentPage:1,
        pageSize:10
      }
    },
    mounted() {
      this.handleGetList(1,10)
    },
    methods:{
      //导出数据
      handleExport:function(){
        window.open('./execl/EveryChannel.do');
      },
      //获取数据
      handleGetList:function(currentPage,pageSize){
        this.handleGetMax()
        Vue.http.get('./channel/getChannel.do?page='+ currentPage +'&num='+pageSize).then(
          (res)=>{
            res.data.forEach((item) => {
              item.n_blackHitRate = (item.blackHitRate * 100).toFixed(2) + '%';
              item.n_latePercentage = (item.latePercentage * 100).toFixed(2) +'%';
              item.n_orderPercentage = (item.orderPercentage * 100).toFixed(2) + '%';
              item.n_subscriptionRate = (item.subscriptionRate * 100).toFixed(2) +'%';
            })
            this.c_list = res.data
          }
        )
      },
      //获取最大条数
      handleGetMax:function(){
        Vue.http.get('./channel/getChannelNum.do').then(
          (res) => {
            this.total = res.data
          }
        )
      },
     //页码切换
     handleCurrentChange: function (currentPage) {
       // console.log(curren - tpage);
       this.currentPage = currentPage;
       this.handleGetList(currentPage,this.pageSize);
       this.currentChangePage(this.list, currentPage);
       // console.log(currentPage);
     },
     //分页处理
     currentChangePage: function (list, currentPage) {
         var from = (currentPage - 1) * this.pageSize;
         var to = currentPage * this.pageSize;
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
       this.handleGetList(this.currentPage,pageSize);
       this.currentChangePage(this.list,this.currentPage);
     }
    }
  }
</script>

<style scoped>
  .text-info{
    color: #ec1a37;
    font-size: 16px;
    margin: 15px 0;
  }
  .text-info p{
    margin: 0 0 10px 0!important;
  }
</style>
