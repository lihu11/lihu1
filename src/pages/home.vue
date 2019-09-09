<template>
  <div class="container">
    <!-- <div class="diaoqian">掉签App下载</div> -->
    <div class="exportBox">
      <el-button size="mini" round style="background:#ffffff">掉签App下载</el-button>
    </div>
    <el-form ref="form" :model="sizeForm"  size="mini">
      <el-form-item label="日期">
        <el-date-picker
        v-model="timeRange"
        type="date"
        placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <div class="DataB">
      <div class="dataTilleBox">
        平台数据 
        <em class="tips">（平台数据5分钟刷新一次）</em>
      </div>
      <ul class="ulBox">
        <li class="listItem">
          <img src="../assets/img/bg01.png" alt="" class="bgImg">
          <div class="dataContent">
            <div class="line flex">
              <em class="circle circle1"></em>
              <span class="listTitle">总放款单数（单）</span>
            </div>
            <div class="num" v-text="dataOne"></div>
          </div>
        </li>
         <li class="listItem">
          <img src="../assets/img/bg02.png" alt="" class="bgImg">
          <div class="dataContent">
            <div class="line flex">
              <em class="circle circle2"></em>
              <span class="listTitle">总还款单数（单）</span>
            </div>
            <div class="num" v-text="dataTwo"></div>
          </div>
        </li>
         <li class="listItem">
          <img src="../assets/img/bg03.png" alt="" class="bgImg">
          <div class="dataContent">
            <div class="line flex">
              <em class="circle circle3"></em>
              <span class="listTitle">总老客订单数（单）</span>
            </div>
            <div class="num" v-text="dataThree"></div>
          </div>
        </li>
         <li class="listItem">
          <img src="../assets/img/bg04.png" alt="" class="bgImg">
          <div class="dataContent">
            <div class="line flex">
              <em class="circle circle4"></em>
              <span class="listTitle">总逾期单数（单）</span>
            </div>
            <div class="num" v-text="dataFour"></div>
          </div>
        </li>
         <li class="listItem">
          <img src="../assets/img/bg05.png" alt="" class="bgImg">
          <div class="dataContent">
            <div class="line flex">
              <em class="circle circle5"></em>
              <span class="listTitle">总放款金额（元）</span>
            </div>
            <div class="num" v-text="dataFive"></div>
          </div>
        </li>
         <li class="listItem">
          <img src="../assets/img/bg06.png" alt="" class="bgImg">
          <div class="dataContent">
            <div class="line flex">
              <em class="circle circle6"></em>
              <span class="listTitle">总还款金额（元）</span>
            </div>
            <div class="num" v-text="dataSix"></div>
          </div>
        </li>
         <li class="listItem">
          <img src="../assets/img/bg07.png" alt="" class="bgImg">
          <div class="dataContent">
            <div class="line flex">
              <em class="circle circle7"></em>
              <span class="listTitle">总老客还单数（单）</span>
            </div>
            <div class="num" v-text="dataSeven"></div>
          </div>
        </li>
         <li class="listItem">
          <img src="../assets/img/bg08.png" alt="" class="bgImg">
          <div class="dataContent">
            <div class="line flex">
              <em class="circle circle8"></em>
              <span class="listTitle">总逾期订单金额（元）</span>
            </div>
            <div class="num" v-text="dataEight"></div>
          </div>
        </li>
         <li class="listItem">
          <img src="../assets/img/bg09.png" alt="" class="bgImg">
          <div class="dataContent">
            <div class="line flex">
              <em class="circle circle9"></em>
              <span class="listTitle">总展期订单数（单）</span>
            </div>
            <div class="num" v-text="dataNine"></div>
          </div>
        </li>
         <li class="listItem">
          <img src="../assets/img/bg10.png" alt="" class="bgImg">
          <div class="dataContent">
            <div class="line flex">
              <em class="circle circle10"></em>
              <span class="listTitle">展期总收款金额（元）</span>
            </div>
            <div class="num" v-text="dataTen"></div>
          </div>
        </li>
         <li class="listItem">
          <img src="../assets/img/bg11.png" alt="" class="bgImg">
          <div class="dataContent">
            <div class="line flex">
              <em class="circle circle11"></em>
              <span class="listTitle">即将逾期订单数（单）</span>
            </div>
            <div class="num" v-text="dataEleven"></div>
          </div>
        </li>
         <li class="listItem">
          <img src="../assets/img/bg12.png" alt="" class="bgImg">
          <div class="dataContent">
            <div class="line flex">
              <em class="circle circle12"></em>
              <span class="listTitle">即将逾期总金额（元）</span>
            </div>
            <div class="num" v-text="dataTwelve"></div>
          </div>
        </li>
         <li class="listItem">
          <img src="../assets/img/bg13.png" alt="" class="bgImg">
          <div class="dataContent">
            <div class="line flex">
              <em class="circle circle13"></em>
              <span class="listTitle">在贷金额（元）</span>
            </div>
            <div class="num" v-text="dataThirteen"></div>
          </div>
        </li>
      </ul>
    </div>
    
  </div>
  
</template>
<script type="text/javascript">
import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
        timeRange:'',
        dataOne:'',
        dataTwo:'',
        dataThree:'',
        dataFour:'',
        dataFive:'',
        dataSix:'',
        dataSeven:'',
        dataEight:'',
        dataNine:'',
        dataTen:'',
        dataEleven:'',
        dataTwelve:'',
        dataThirteen:''
    }
  },
  methods:{
    getOne:function () {
      var self = this;
      axios.get('/hxy/shouye/getone').then(function (res) {
        console.log(res);
        self.dataOne = res;
      })
      .catch(function (error) { 
        console.log(error);
      });
    },
    getTwo:function () {
      var self = this;
      axios.get('/hxy/shouye/gettwo').then(function (res) {
        console.log(res);
        self.dataTwo = res;
      })
      .catch(function (error) { 
        console.log(error);
      });
    },
    getThree:function () {
      var self = this;
      axios.get('/hxy/shouye/gettherr').then(function (res) {
        console.log(res);
        self.dataThree = res;
      })
      .catch(function (error) { 
        console.log(error);
      });
    },
    getFour:function () {
      var self = this;
      axios.get('/hxy/shouye/getfour').then(function (res) {
        console.log(res);
        self.dataFour = res;
      })
      .catch(function (error) { 
        console.log(error);
      });
    },
    getFive:function () {
      var self = this;
      axios.get('/hxy/shouye/getfive').then(function (res) {
        console.log(res);
        self.dataFive = res;
      })
      .catch(function (error) { 
        console.log(error);
      });
    },
    getSix:function () {
      var self = this;
      axios.get('/hxy/shouye/getsix').then(function (res) {
        console.log(res);
        self.dataSix = res;
      })
      .catch(function (error) { 
        console.log(error);
      });
    },
    getSeven:function () {
      var self = this;
      axios.get('/hxy/shouye/getseven').then(function (res) {
        console.log(res);
        self.dataSeven = res;
      })
      .catch(function (error) { 
        console.log(error);
      });
    },
    getEight:function () {
      var self = this;
      axios.get('/hxy/shouye/geteight').then(function (res) {
        console.log(res);
        self.dataEight = res;
      })
      .catch(function (error) { 
        console.log(error);
      });
    },
    getNine:function () {
      var self = this;
      axios.get('/hxy/shouye/getnine').then(function (res) {
        console.log(res);
        self.dataNine = res;
      })
      .catch(function (error) { 
        console.log(error);
      });
    },
    getTen:function () {
      var self = this;
      axios.get('/hxy/shouye/getten').then(function (res) {
        console.log(res);
        self.dataTen = res;
      })
      .catch(function (error) { 
        console.log(error);
      });
    },
    getEleven:function () {
      var self = this;
      axios.get('/hxy/shouye/geteleven').then(function (res) {
        console.log(res);
        self.dataEleven = res;
      })
      .catch(function (error) { 
        console.log(error);
      });
    },
    getTwelve:function () {
      var self = this;
      axios.get('/hxy/shouye/gettwelve').then(function (res) {
        console.log(res);
        self.dataTwelve = res;
      })
      .catch(function (error) { 
        console.log(error);
      });
    },
    getThirteen:function () {
      var self = this;
      axios.get('/hxy/shouye/getthirteen').then(function (res) {
        console.log(res);
        self.dataThirteen = res;
      })
      .catch(function (error) { 
        console.log(error);
      });
    },
  },
  mounted: function () {
    var self = this;
    self.getOne();
    self.getTwo();
    self.getThree();
    self.getFour();
    self.getFive();
    self.getSix();
    self.getSeven();
    self.getEight();
    self.getNine();
    self.getTen();
    self.getEleven();
    self.getTwelve();
    self.getThirteen();
  },
  created:function () {

  }
}
</script>
<style scoped>
  .el-button--mini, .el-button--mini.is-round{
    padding: 0 15px;
  }
  .flex{
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }
  .container{
    background-color: #f2f2f2;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  .el-date-editor{
    background-color: #ffffff;
    border-radius: 14px;
  }
  .diaoqian{
    text-align: right;
  }
  .test{
    height: 40px;
    background: #ccc;
    margin-bottom: 15px;
  }
  .dataTilleBox{
    font-size: 20px;
    font-weight: bold;
    padding: 10px 0;
    margin: 12px 0;
    color: #000000;
  }
  .tips{
    color: rgb(221, 97, 97);
    font-size: 14px;
    font-style: normal;
  }
   .listItem{
     background-repeat: no-repeat;
    list-style: none;
     display: inline-block;
     margin-bottom: 10px;
     position: relative;
     width: 270px;
     height: 140px;
     color: #ffffff;
     font-size: 0;
   }
   .bgImg{
     width: 100%;
     height: 100%;
     position: absolute;
     top: 0;
     left: 0;
   }
   .ulBox{
     width: 1100px;
   }
   .dataContent{
     /* position: absolute;
     left: 10%;
     bottom: 8%; */ 
   }
   .line{
     position: absolute;
     bottom: 45%;
     left: 10%;
   }
   .num{
     position: absolute;
     bottom: 8%;
     left: 10%;
   }
   .circle{
     content: "";
     display: inline-block;
     width: 4px;
     height: 4px;
     border-radius: 50%;
     margin-right: 7px;
   }
   .circle1{
     background-color: #49b1ff;
   }
   .circle2{
     background-color: #49b1ff;
   }
   .circle3{
     background-color: #ffc535;
   }
   .circle4{
     background-color: #2ec4a0;
   }
   .circle5{
     background-color: #ffc535;
   }
   .circle6{
     background-color: #8888f7;
   }
  .circle7{
    background-color: #8888f7;
   }
   .circle8{
     background-color: #2ec4a0;
   }
   .circle9{
     background-color: #ffc535;
   }
   .circle10{
     background-color: #ffc535;
   }
   .circle11{
     background-color: #ffc535;
   }
   .circle12{
     background-color: #ffc535;
   }
   .circle13{
     background-color: #ffc535;
   }
   .listTitle{
     font-size: 14px;
   }
   .num{
     font-size: 42px;
   }
</style>
