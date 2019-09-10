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
          <el-date-picker type="daterange" prefix-icon='el-icon-time' range-separator="-" start-placeholder="开始时间"
            end-placeholder="结束时间" size='mini'>
          </el-date-picker>
        </el-form-item>
        <el-form-item label="客户状态">
          <el-select placeholder="全部" size="mini" v-model="form.a">
            <el-option label="普通" value="1"></el-option>
            <el-option label="黑名单" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渠道名称">
          <el-select placeholder="全部" size="mini" v-model="form.f">
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
        <el-button type="warning" size="mini">查询</el-button>
      </el-form>
    </div>
    <div class="text-info">
      <p>这一部分数据的统计以应还款日期为标签，比如1号应还款的订单，在以后的转化数据都加到1号的统计，展期以后，原订单增加一笔结清，展期金额会加到还款金额，新应还款日增加一笔应该，增加一笔应还款本金</p>
      <p>金额首逾率 = 未还金额 / 放款金额</p>
      <p>订单首逾率 = 未还订单 / 应还订单</p>
      <p>当前逾期率 = 未还金额 / 应还金额</p>
      <p>总实还金额 = 提前订单金额+正常订单金额+部分还款金额+逾期还款总金额-正常还款减免金额+展期金额</p>
      <p>复借率 = 今日老客放款数 / 当日还款总订单数</p>
      <p>每7分钟刷新一次</p>
    </div>
    <div class="order-table">
      <el-table height="480px" size='mini' border style="width: 100%" :data="reList">
        <el-table-column type="index" label="序号" width="60">
        </el-table-column>
        <el-table-column prop="date" label="应还日期">
        </el-table-column>
        <el-table-column prop="num" label="应还订单数">
        </el-table-column>
        <el-table-column prop="befortimes" label="提前还款单数">
        </el-table-column>
        <el-table-column prop="beformoney" label="提前还款金额">
        </el-table-column>
        <el-table-column prop="nowtimes" label="正常还款订单数">
        </el-table-column>
        <el-table-column prop="nowmoney" label="正常还款金额">
        </el-table-column>
        <el-table-column prop="latetimes" label="展期订单数">
        </el-table-column>
        <el-table-column prop="latetimes" label="逾期展期订单数">
        </el-table-column>
        <el-table-column prop="latemoney" label="逾期展期订单金额">
        </el-table-column>
        <el-table-column prop="zqmoney" label="展期金额">
        </el-table-column>
        <el-table-column label="减免金额">
          0
        </el-table-column>
        <el-table-column label="减免订单数">
          0
        </el-table-column>
        <el-table-column prop="yhmoney" label="逾期还款订单数">
        </el-table-column>
        <el-table-column prop="whmoney" label="逾期未还订单数">
        </el-table-column>
        <el-table-column label="部分还款金额">
          0
        </el-table-column>
        <el-table-column label="还款订单减免金额">
          0
        </el-table-column>
        <el-table-column prop="latesunmoney" label="逾期还款订单总金额">
        </el-table-column>
        <el-table-column label="正常还款减免金额">
          0
        </el-table-column>
        <el-table-column prop="repaidmoney" label="应还金额">
        </el-table-column>
        <el-table-column prop="allnum" label="总实还金额">
        </el-table-column>
        <el-table-column prop="cost" label="放款成本">
        </el-table-column>
        <el-table-column prop="overdue" label="逾期费用">
        </el-table-column>
        <el-table-column prop="n_firstoverdue" label="订单首逾率">
        </el-table-column>
        <el-table-column label="1日回款率(订单)">
          0%
        </el-table-column>
        <el-table-column label="3日回款率(订单)">
          0%
        </el-table-column>
        <el-table-column label="7日回款率(订单)">
          0%
        </el-table-column>
        <el-table-column label="15日回款率(订单)">
          0%
        </el-table-column>
        <el-table-column prop="n_leanoverdue" label="当前订单逾期率">
          0%
        </el-table-column>
        <el-table-column prop="n_secondlean" label="复借率">
        </el-table-column>
        <el-table-column prop="n_moneyoverdue" label="金额首逾">
        </el-table-column>
      </el-table>
    </div>
    <div class="pageBox">
      <el-pagination background @size-change="handleChangepageSize" @current-change="handleCurrentChange" :current-page="currentPage"
        :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'dayRefundCount',
    data() {
      return {
        //form
        form: {
          a: '',
          b: '',
          c: '',
          d: '',
          e: '',
          f: '',
          g: ''
        },
        reList: [],
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    },
    mounted() {
      this.HandleGetList(1, 10)
    },
    methods: {
      //导出数据
      handleExport: function() {
        window.open('./execl/EveryDailyReturn.do');
      },
      HandleGetList: function(currentPage, pageSize) {
        this.HandleGetMaxNum()
        Vue.http.get('./channel/getDailyReturn.do?page=' + currentPage + '&num=' + pageSize).then(
          (res) => {
            res.data.forEach((item) => {
              item.n_firstoverdue = (item.firstoverdue * 100).toFixed(2) + '%';
              item.n_leanoverdue = (item.leanoverdue * 100).toFixed(2) + '%';
              item.n_secondlean = (item.secondlean * 100).toFixed(2) + '%';
              item.n_moneyoverdue = (item.moneyoverdue * 100).toFixed(2) + '%';
            })
            this.reList = res.data
          }
        )
      },
      HandleGetMaxNum: function() {
        Vue.http.get('./channel/getDailyReturnNum.do').then((res) => {
          //console.log(res)
          this.total = res.data
        })
      },
      //页码切换
      handleCurrentChange: function(currentPage) {
        // console.log(curren - tpage);
        this.currentPage = currentPage;
        this.HandleGetList(currentPage, this.pageSize);
        this.currentChangePage(this.list, currentPage);
        // console.log(currentPage);
      },
      //分页处理
      currentChangePage: function(list, currentPage) {
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
      handleChangepageSize: function(pageSize) {
        this.pageSize = pageSize;
        this.HandleGetList(this.currentPage, pageSize);
        this.currentChangePage(this.list, this.currentPage);
      }
    }
  }
</script>

<style scoped>
  .text-info {
    font-size: 12px;
    margin: 15px 0;
  }

  .text-info p {
    margin: 0 0 10px 0 !important;
  }
</style>
