webpackJsonp([15],{JgZ8:function(e,t){},OuNA:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("7+uW"),r=l("6bRL"),o={name:"orderList",data:function(){return{form:{a:"",b:"",c:"",d:"",e:"",f:""},orderList:[],total:0,currentPage:1,pageSize:10,list:{},tempList:[]}},created:function(){this.HandleGetOrderList(1,10)},methods:{HandleGetOrderList:function(e,t){var l=this;console.log(e),a.default.http.get("/hxy/loanAllService?currentPage="+e+"&pageSize="+t).then(function(e){l.total=e.totalCount,e.list.forEach(function(e){e.f_createTime=Object(r.a)(e.createTime),e.f_paymentDate=Object(r.a)(e.paymentDate),e.f_shouldReturnDate=Object(r.a)(e.shouldReturnDate),e.f_alreadyRepaidDate=Object(r.a)(e.alreadyRepaidDate)}),l.orderList=e.list})},HandleExportDate:function(){window.open("http://localhost:8080/hxy/execl/LoanAllexport.do")},handleCurrentChange:function(e){this.currentPage=e,this.HandleGetOrderList(e,this.pageSize),this.currentChangePage(this.list,e)},currentChangePage:function(e,t){var l=(t-1)*this.pageSize,a=t*this.pageSize;for(console.log(a),this.tempList=[];l<a;l++)e[l]&&this.tempList.push(e[l])},handleChangepageSize:function(e){this.pageSize=e,this.HandleGetOrderList(this.currentPage,e),this.currentChangePage(this.list,this.currentPage)}}},i={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"box-card"},[l("el-row",{staticStyle:{"margin-bottom":"15px"}},[l("el-col",{staticStyle:{"text-align":"right"},attrs:{span:24}},[l("el-button",{attrs:{size:"mini"},on:{click:e.HandleExportDate}},[e._v("导出Excel")])],1)],1),e._v(" "),l("el-form",{ref:"form",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[l("el-form-item",{attrs:{label:"订单编号"}},[l("el-input",{attrs:{placeholder:"请输入",round:"",size:"mini"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"用户姓名"}},[l("el-input",{attrs:{placeholder:"请输入",round:"",size:"mini"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"手机号码"}},[l("el-input",{attrs:{placeholder:"请输入",round:"",size:"mini"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"订单状态"}},[l("el-select",{attrs:{placeholder:"全部",size:"mini"},model:{value:e.form.a,callback:function(t){e.$set(e.form,"a",t)},expression:"form.a"}},[l("el-option",{attrs:{label:"未还款",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"已还款",value:"2"}}),e._v(" "),l("el-option",{attrs:{label:"逾期中",value:"3"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"渠道来源"}},[l("el-select",{attrs:{placeholder:"全部",size:"mini"},model:{value:e.form.b,callback:function(t){e.$set(e.form,"b",t)},expression:"form.b"}},[l("el-option",{attrs:{label:"牛牛借",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"轻松借",value:"2"}}),e._v(" "),l("el-option",{attrs:{label:"月花花",value:"3"}}),e._v(" "),l("el-option",{attrs:{label:"vuq5",value:"4"}}),e._v(" "),l("el-option",{attrs:{label:"vur6",value:"5"}}),e._v(" "),l("el-option",{attrs:{label:"awu3",value:"6"}}),e._v(" "),l("el-option",{attrs:{label:"ivq4",value:"7"}}),e._v(" "),l("el-option",{attrs:{label:"kkfc",value:"8"}}),e._v(" "),l("el-option",{attrs:{label:"liga",value:"9"}}),e._v(" "),l("el-option",{attrs:{label:"fess",value:"10"}}),e._v(" "),l("el-option",{attrs:{label:"bsff",value:"11"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"审核员"}},[l("el-input",{attrs:{placeholder:"请输入",round:"",size:"mini"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"现催收员"}},[l("el-select",{attrs:{placeholder:"全部",size:"mini"},model:{value:e.form.c,callback:function(t){e.$set(e.form,"c",t)},expression:"form.c"}},[l("el-option",{attrs:{label:"居杰涛",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"齐康星",value:"2"}}),e._v(" "),l("el-option",{attrs:{label:"汪武新",value:"3"}}),e._v(" "),l("el-option",{attrs:{label:"姜元全",value:"4"}}),e._v(" "),l("el-option",{attrs:{label:"陈栋",value:"5"}}),e._v(" "),l("el-option",{attrs:{label:"彭彬",value:"6"}}),e._v(" "),l("el-option",{attrs:{label:"赵启",value:"7"}}),e._v(" "),l("el-option",{attrs:{label:"居强军",value:"8"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"客户状态"}},[l("el-select",{attrs:{placeholder:"全部",size:"mini"},model:{value:e.form.d,callback:function(t){e.$set(e.form,"d",t)},expression:"form.d"}},[l("el-option",{attrs:{label:"普通",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"黑名单",value:"2"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"申请时间"}},[l("el-date-picker",{attrs:{type:"daterange","prefix-icon":"el-icon-time","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间",size:"mini"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"到账时间"}},[l("el-date-picker",{attrs:{type:"daterange","prefix-icon":"el-icon-time","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间",size:"mini"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"应还时间"}},[l("el-date-picker",{attrs:{type:"daterange","prefix-icon":"el-icon-time","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间",size:"mini"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"实际还款时间"}},[l("el-date-picker",{attrs:{type:"daterange","prefix-icon":"el-icon-time","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间",size:"mini"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"逾期天数筛选"}},[l("el-input",{attrs:{placeholder:"请输入",round:"",size:"mini"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"是否展期"}},[l("el-select",{attrs:{placeholder:"全部",size:"mini"},model:{value:e.form.e,callback:function(t){e.$set(e.form,"e",t)},expression:"form.e"}},[l("el-option",{attrs:{label:"是",value:"shi"}}),e._v(" "),l("el-option",{attrs:{label:"否",value:"fou"}})],1)],1),e._v(" "),l("el-form-item",[l("el-button",{staticClass:"searchBtn",attrs:{type:"primary",size:"mini"}},[e._v("查询")])],1)],1)],1),e._v(" "),l("div",{staticClass:"order-table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{height:"480px",size:"mini",data:e.orderList,border:""}},[l("el-table-column",{attrs:{prop:"id",label:"序号"}}),e._v(" "),l("el-table-column",{attrs:{prop:"applicationNumber",label:"订单编号"}}),e._v(" "),l("el-table-column",{attrs:{prop:"userName",label:"用户姓名"}}),e._v(" "),l("el-table-column",{attrs:{prop:"phoneNumber",label:"手机编号",width:"100"}}),e._v(" "),l("el-table-column",{attrs:{prop:"loanDay",label:"借款期限(天)",width:"80"}}),e._v(" "),l("el-table-column",{attrs:{prop:"loanStatus",label:"订单状态",width:"100"}}),e._v(" "),l("el-table-column",{attrs:{prop:"isPostphone",label:"是否展期"}}),e._v(" "),l("el-table-column",{attrs:{prop:"loanMoney",label:"借款金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"accountMoney",label:"到账金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"serviceMoney",label:"服务费"}}),e._v(" "),l("el-table-column",{attrs:{prop:"lateDay",label:"逾期天数"}}),e._v(" "),l("el-table-column",{attrs:{prop:"lateMoney",label:"逾期费用"}}),e._v(" "),l("el-table-column",{attrs:{prop:"shouldReturnMoney",label:"应还金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"alreadyRepaidMoney",label:"已还金额"}}),e._v(" "),l("el-table-column",{attrs:{width:"110",label:"还款减免金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"f_createTime",width:"140",label:"申请时间"}}),e._v(" "),l("el-table-column",{attrs:{prop:"f_paymentDate",width:"140",label:"到账时间"}}),e._v(" "),l("el-table-column",{attrs:{prop:"f_shouldReturnDate",width:"140",label:"应还日期"}}),e._v(" "),l("el-table-column",{attrs:{prop:"f_alreadyRepaidDate",width:"140",label:"实际还款日期"}}),e._v(" "),l("el-table-column",{attrs:{prop:"userStatus",label:"客户状态"}}),e._v(" "),l("el-table-column",{attrs:{prop:"channelSources",label:"渠道来源"}}),e._v(" "),l("el-table-column",{attrs:{prop:"auditor",label:"审核员"}}),e._v(" "),l("el-table-column",{attrs:{prop:"receiver",label:"催收员"}}),e._v(" "),l("el-table-column",{attrs:{prop:"operation",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"warning",size:"mini"}},[e._v("详情")])]}}])})],1)],1),e._v(" "),l("div",{staticClass:"pageBox"},[l("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleChangepageSize,"current-change":e.handleCurrentChange}})],1)])},staticRenderFns:[]};var n=l("VU/8")(o,i,!1,function(e){l("JgZ8")},"data-v-5117d4b4",null);t.default=n.exports}});
//# sourceMappingURL=15.f357e6039c13453e3daa.js.map