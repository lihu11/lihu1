<template>
  <div>
    <div class="box-card">
      <el-row style="margin-bottom:15px;">
        <el-col :span="24" style="text-align: right;">
          <el-button size="mini" @click='handleExport'>导出Excel</el-button>
        </el-col>
      </el-row>
      <el-form :inline="true" class="demo-form-inline" ref='form' :model="form">
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
        <el-form-item label="商务名称">
          <el-input  placeholder="请输入" round size="mini"></el-input>
        </el-form-item>
        <el-button type="warning" size="mini">查询</el-button>
      </el-form>
    </div>
    <div class="text-info">
      <p>次借人数：统计第二次借款成功的人数</p>
      <p>复借人数：统计三次以及三次以上借款成功的人数，不包含词次借人数</p>
    </div>
    <div class="count">
      <span>放款单数总计：</span>
      <span>放款总额：</span>
      <span>首借人数统计：</span>
      <span>首借人数统计：</span>
      <span>次借人数总计：</span>
      <span>次借总金额：</span>
      <span>复借总金额：</span>
      <span>实际放款总额：</span>
    </div>
    <div class="order-table">
          <el-table
              height="480px"
              size='mini'
              border
              style="width: 100%"
              :data="LoanList"
              >
              <el-table-column
                type="index"
                label="序号"
                width="60"
               >
              </el-table-column>
              <el-table-column
                prop="datetime"
                label="日期">
              </el-table-column>
              <el-table-column
                prop="channelSources"
                label="渠道名称">
              </el-table-column>
              <el-table-column
                prop="countNumber"
                width="118"
                label="放款单数">
              </el-table-column>
              <el-table-column
                prop="sun"
                label="放款总数">
              </el-table-column>
              <el-table-column
                prop="firstnum"
                label="首借人数"
               >
              </el-table-column>
              <el-table-column
                prop="firstsum"
                label="首借总额">
              </el-table-column>
              <el-table-column
                prop="secondnum"
                width="118"
                label="次借人数">
              </el-table-column>
              <el-table-column
                prop="secondsum"
                width="118"
                label="次借总额">
              </el-table-column>
              <el-table-column
                prop="morenum"
                width="118"
                label="复借人数">
              </el-table-column>
              <el-table-column
                prop="moresum"
                width="118"
                label="复借总额">
              </el-table-column>
              <el-table-column
                prop="sjsun"
                width="118"
                label="实际放款总额">
              </el-table-column>
              <el-table-column
                prop="businessAffairs"
                width="118"
                label="所属商务"
               >
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
  import { dateTimeFormat } from '@/utils/dateFormat.js'
  export default{
    name:'dayLoanCount',
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
        LoanList:[],
        //页面条数
        pageSize:10,
        //当前页
        currentPage:1,
        //总条数
        total:0

      }
    },
    mounted() {
      this.HandleGetLoanCount(1,10);
    },
    methods:{
		//导出数据
		handleExport:function(){
		  window.open('./execl/EveryDailyLend.do');
		},
      //获取数据请求
      HandleGetLoanCount:function(currentPage,pageSize){
        this.HandleGetMaxNum()
        Vue.http.get('./channel/getDailyLend.do?page=' + currentPage + '&num='+ pageSize).then((res)=>{
          this.LoanList = res.data;
        })
      },
      HandleGetMaxNum:function(){
        Vue.http.get('./channel/getDailyLendnum.do').then((res)=>{
          //console.log(res)
          this.total = res.data
        })
      },
      //页码切换
      handleCurrentChange: function (currentPage) {
        // console.log(curren - tpage);
        this.currentPage = currentPage;
        this.HandleGetLoanCount(currentPage,this.pageSize);
        this.currentChangePage(this.list, currentPage);
        // console.log(currentPage);
      },
      //分页处理
      currentChangePage: function (list, currentPage) {
          var from = (currentPage - 1) * this.pageSize;
          var to = currentPage * this.pageSize;
          console.log(to)
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
        this.HandleGetLoanCount(this.currentPage,pageSize);
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
