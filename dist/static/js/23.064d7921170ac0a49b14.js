webpackJsonp([23],{jriR:function(e,t){},pf20:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("xd7I"),n={name:"dayRefundCount",data:function(){return{form:{a:"",b:"",c:"",d:"",e:"",f:"",g:""},reList:[],currentPage:1,pageSize:10,total:0}},mounted:function(){this.HandleGetList(1,10)},methods:{handleExport:function(){window.open("./execl/EveryDailyReturn.do")},HandleGetList:function(e,t){var l=this;this.HandleGetMaxNum(),a.default.http.get("./channel/getDailyReturn.do?page="+e+"&num="+t).then(function(e){e.data.forEach(function(e){e.n_firstoverdue=(100*e.firstoverdue).toFixed(2)+"%",e.n_leanoverdue=(100*e.leanoverdue).toFixed(2)+"%",e.n_secondlean=(100*e.secondlean).toFixed(2)+"%",e.n_moneyoverdue=(100*e.moneyoverdue).toFixed(2)+"%"}),l.reList=e.data})},HandleGetMaxNum:function(){var e=this;a.default.http.get("./channel/getDailyReturnNum.do").then(function(t){e.total=t.data})},handleCurrentChange:function(e){this.currentPage=e,this.HandleGetList(e,this.pageSize),this.currentChangePage(this.list,e)},currentChangePage:function(e,t){var l=(t-1)*this.pageSize,a=t*this.pageSize;for(console.log(a),this.tempList=[];l<a;l++)e[l]&&this.tempList.push(e[l])},handleChangepageSize:function(e){this.pageSize=e,this.HandleGetList(this.currentPage,e),this.currentChangePage(this.list,this.currentPage)}}},o={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"box-card"},[l("el-row",{staticStyle:{"margin-bottom":"15px"}},[l("el-col",{staticStyle:{"text-align":"right"},attrs:{span:24}},[l("el-button",{attrs:{size:"mini"},on:{click:e.handleExport}},[e._v("导出Excel")])],1)],1),e._v(" "),l("el-form",{ref:"form",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[l("el-form-item",{attrs:{label:"日期"}},[l("el-date-picker",{attrs:{type:"daterange","prefix-icon":"el-icon-time","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间",size:"mini"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"客户状态"}},[l("el-select",{attrs:{placeholder:"全部",size:"mini"},model:{value:e.form.a,callback:function(t){e.$set(e.form,"a",t)},expression:"form.a"}},[l("el-option",{attrs:{label:"普通",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"黑名单",value:"2"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"渠道名称"}},[l("el-select",{attrs:{placeholder:"全部",size:"mini"},model:{value:e.form.f,callback:function(t){e.$set(e.form,"f",t)},expression:"form.f"}},[l("el-option",{attrs:{label:"牛牛借",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"轻松借",value:"2"}}),e._v(" "),l("el-option",{attrs:{label:"月花花",value:"3"}}),e._v(" "),l("el-option",{attrs:{label:"vuq5",value:"4"}}),e._v(" "),l("el-option",{attrs:{label:"vur6",value:"5"}}),e._v(" "),l("el-option",{attrs:{label:"awu3",value:"6"}}),e._v(" "),l("el-option",{attrs:{label:"ivq4",value:"7"}}),e._v(" "),l("el-option",{attrs:{label:"kkfc",value:"8"}}),e._v(" "),l("el-option",{attrs:{label:"liga",value:"9"}}),e._v(" "),l("el-option",{attrs:{label:"fess",value:"10"}}),e._v(" "),l("el-option",{attrs:{label:"bsff",value:"11"}})],1)],1),e._v(" "),l("el-button",{attrs:{type:"warning",size:"mini"}},[e._v("查询")])],1)],1),e._v(" "),e._m(0),e._v(" "),l("div",{staticClass:"order-table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{height:"480px",size:"mini",border:"",data:e.reList}},[l("el-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),e._v(" "),l("el-table-column",{attrs:{prop:"date",label:"应还日期"}}),e._v(" "),l("el-table-column",{attrs:{prop:"num",label:"应还订单数"}}),e._v(" "),l("el-table-column",{attrs:{prop:"befortimes",label:"提前还款单数"}}),e._v(" "),l("el-table-column",{attrs:{prop:"beformoney",label:"提前还款金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"nowtimes",label:"正常还款订单数"}}),e._v(" "),l("el-table-column",{attrs:{prop:"nowmoney",label:"正常还款金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"latetimes",label:"展期订单数"}}),e._v(" "),l("el-table-column",{attrs:{prop:"latetimes",label:"逾期展期订单数"}}),e._v(" "),l("el-table-column",{attrs:{prop:"latemoney",label:"逾期展期订单金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"zqmoney",label:"展期金额"}}),e._v(" "),l("el-table-column",{attrs:{label:"减免金额"}},[e._v("\n        0\n      ")]),e._v(" "),l("el-table-column",{attrs:{label:"减免订单数"}},[e._v("\n        0\n      ")]),e._v(" "),l("el-table-column",{attrs:{prop:"yhmoney",label:"逾期还款订单数"}}),e._v(" "),l("el-table-column",{attrs:{prop:"whmoney",label:"逾期未还订单数"}}),e._v(" "),l("el-table-column",{attrs:{label:"部分还款金额"}},[e._v("\n        0\n      ")]),e._v(" "),l("el-table-column",{attrs:{label:"还款订单减免金额"}},[e._v("\n        0\n      ")]),e._v(" "),l("el-table-column",{attrs:{prop:"latesunmoney",label:"逾期还款订单总金额"}}),e._v(" "),l("el-table-column",{attrs:{label:"正常还款减免金额"}},[e._v("\n        0\n      ")]),e._v(" "),l("el-table-column",{attrs:{prop:"repaidmoney",label:"应还金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"allnum",label:"总实还金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"cost",label:"放款成本"}}),e._v(" "),l("el-table-column",{attrs:{prop:"overdue",label:"逾期费用"}}),e._v(" "),l("el-table-column",{attrs:{prop:"n_firstoverdue",label:"订单首逾率"}}),e._v(" "),l("el-table-column",{attrs:{label:"1日回款率(订单)"}},[e._v("\n        0%\n      ")]),e._v(" "),l("el-table-column",{attrs:{label:"3日回款率(订单)"}},[e._v("\n        0%\n      ")]),e._v(" "),l("el-table-column",{attrs:{label:"7日回款率(订单)"}},[e._v("\n        0%\n      ")]),e._v(" "),l("el-table-column",{attrs:{label:"15日回款率(订单)"}},[e._v("\n        0%\n      ")]),e._v(" "),l("el-table-column",{attrs:{prop:"n_leanoverdue",label:"当前订单逾期率"}},[e._v("\n        0%\n      ")]),e._v(" "),l("el-table-column",{attrs:{prop:"n_secondlean",label:"复借率"}}),e._v(" "),l("el-table-column",{attrs:{prop:"n_moneyoverdue",label:"金额首逾"}})],1)],1),e._v(" "),l("div",{staticClass:"pageBox"},[l("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleChangepageSize,"current-change":e.handleCurrentChange}})],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"text-info"},[l("p",[e._v("这一部分数据的统计以应还款日期为标签，比如1号应还款的订单，在以后的转化数据都加到1号的统计，展期以后，原订单增加一笔结清，展期金额会加到还款金额，新应还款日增加一笔应该，增加一笔应还款本金")]),e._v(" "),l("p",[e._v("金额首逾率 = 未还金额 / 放款金额")]),e._v(" "),l("p",[e._v("订单首逾率 = 未还订单 / 应还订单")]),e._v(" "),l("p",[e._v("当前逾期率 = 未还金额 / 应还金额")]),e._v(" "),l("p",[e._v("总实还金额 = 提前订单金额+正常订单金额+部分还款金额+逾期还款总金额-正常还款减免金额+展期金额")]),e._v(" "),l("p",[e._v("复借率 = 今日老客放款数 / 当日还款总订单数")]),e._v(" "),l("p",[e._v("每7分钟刷新一次")])])}]};var r=l("C7Lr")(n,o,!1,function(e){l("jriR")},"data-v-0bc1401a",null);t.default=r.exports}});
//# sourceMappingURL=23.064d7921170ac0a49b14.js.map