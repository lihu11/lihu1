webpackJsonp([8],{"W/A6":function(e,t){},cmK2:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("xd7I"),n={name:"dayChannelRefundCount",data:function(){return{form:{a:"",b:"",c:"",d:"",e:"",f:"",g:""},c_list:[],currentPage:1,pageSize:10,total:0}},mounted:function(){this.handleGetList(1,10)},methods:{handleExport:function(){window.open("/hxy/execl/EveryChannel1.do")},handleGetList:function(e,t){var l=this;this.handleGetMax(),a.default.http.get("/hxy/channel/getChannelDailyReturn.do?page="+e+"&num="+t).then(function(e){l.c_list=e.data})},handleGetMax:function(){var e=this;a.default.http.get("/hxy/channel/getChannelReturnNum.do").then(function(t){e.total=t.data})},handleCurrentChange:function(e){this.currentPage=e,this.handleGetList(e,this.pageSize),this.currentChangePage(this.list,e)},currentChangePage:function(e,t){var l=(t-1)*this.pageSize,a=t*this.pageSize;for(console.log(a),this.tempList=[];l<a;l++)e[l]&&this.tempList.push(e[l])},handleChangepageSize:function(e){this.pageSize=e,this.handleGetList(this.currentPage,e),this.currentChangePage(this.list,this.currentPage)}}},r={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"box-card"},[l("el-row",{staticStyle:{"margin-bottom":"15px"}},[l("el-col",{staticStyle:{"text-align":"right"},attrs:{span:24}},[l("el-button",{attrs:{size:"mini"},on:{click:e.handleExport}},[e._v("导出Excel")])],1)],1),e._v(" "),l("el-form",{ref:"form",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[l("el-form-item",{attrs:{label:"日期"}},[l("el-date-picker",{attrs:{type:"daterange","prefix-icon":"el-icon-time","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间",size:"mini"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"渠道名称"}},[l("el-select",{attrs:{placeholder:"全部",size:"mini"},model:{value:e.form.f,callback:function(t){e.$set(e.form,"f",t)},expression:"form.f"}},[l("el-option",{attrs:{label:"牛牛借",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"轻松借",value:"2"}}),e._v(" "),l("el-option",{attrs:{label:"月花花",value:"3"}}),e._v(" "),l("el-option",{attrs:{label:"vuq5",value:"4"}}),e._v(" "),l("el-option",{attrs:{label:"vur6",value:"5"}}),e._v(" "),l("el-option",{attrs:{label:"awu3",value:"6"}}),e._v(" "),l("el-option",{attrs:{label:"ivq4",value:"7"}}),e._v(" "),l("el-option",{attrs:{label:"kkfc",value:"8"}}),e._v(" "),l("el-option",{attrs:{label:"liga",value:"9"}}),e._v(" "),l("el-option",{attrs:{label:"fess",value:"10"}}),e._v(" "),l("el-option",{attrs:{label:"bsff",value:"11"}})],1)],1),e._v(" "),l("el-button",{attrs:{type:"warning",size:"mini"}},[e._v("查询")])],1)],1),e._v(" "),e._m(0),e._v(" "),l("div",{staticClass:"order-table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{height:"480px",size:"mini",border:"",data:e.c_list}},[l("el-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),e._v(" "),l("el-table-column",{attrs:{prop:"date",label:"应还日期"}}),e._v(" "),l("el-table-column",{attrs:{prop:"num",label:"应还订单数"}}),e._v(" "),l("el-table-column",{attrs:{prop:"befortimes",label:"提前还款单数"}}),e._v(" "),l("el-table-column",{attrs:{prop:"beformoney",label:"提前还款金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"nowtimes",label:"正常还款订单数"}}),e._v(" "),l("el-table-column",{attrs:{prop:"nowmoney",label:"正常还款金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"latetimes",label:"展期订单数"}}),e._v(" "),l("el-table-column",{attrs:{prop:"latetimes",label:"逾期展期订单数"}}),e._v(" "),l("el-table-column",{attrs:{prop:"latemoney",label:"逾期展期订单金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"zqmoney",label:"展期金额"}}),e._v(" "),l("el-table-column",{attrs:{label:"减免金额"}}),e._v(" "),l("el-table-column",{attrs:{label:"减免订单数"}}),e._v(" "),l("el-table-column",{attrs:{prop:"yhmoney",label:"逾期还款订单数"}}),e._v(" "),l("el-table-column",{attrs:{prop:"whmoney",label:"逾期未还订单数"}}),e._v(" "),l("el-table-column",{attrs:{label:"部分还款金额"}}),e._v(" "),l("el-table-column",{attrs:{label:"还款订单减免金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"latesunmoney",label:"逾期还款订单总金额"}}),e._v(" "),l("el-table-column",{attrs:{label:"正常还款减免金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"repaidmoney",label:"应还金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"allnum",label:"总实还金额"}}),e._v(" "),l("el-table-column",{attrs:{prop:"cost",label:"放款成本"}}),e._v(" "),l("el-table-column",{attrs:{prop:"overdue",label:"逾期费用"}}),e._v(" "),l("el-table-column",{attrs:{prop:"firstoverdue",label:"订单首逾率"}}),e._v(" "),l("el-table-column",{attrs:{label:"1日回款率(订单)"}}),e._v(" "),l("el-table-column",{attrs:{label:"3日回款率(订单)"}}),e._v(" "),l("el-table-column",{attrs:{label:"7日回款率(订单)"}}),e._v(" "),l("el-table-column",{attrs:{label:"15日回款率(订单)"}}),e._v(" "),l("el-table-column",{attrs:{prop:"leanoverdue",label:"当前订单逾期率"}})],1)],1),e._v(" "),l("div",{staticClass:"pageBox"},[l("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleChangepageSize,"current-change":e.handleCurrentChange}})],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"text-info"},[l("p",[e._v("这一部分数据的统计以应还款日期为标签，比如1号应还款的订单，在以后的转化数据都加到1号的统计，展期以后，原订单增加一笔结清，展期金额会加到还款金额，新应还款日增加一笔应该，增加一笔应还款本金")]),e._v(" "),l("p",[e._v("金额首逾率 = 未还金额 / 放款金额")]),e._v(" "),l("p",[e._v("订单首逾率 = 未还订单 / 应还订单")]),e._v(" "),l("p",[e._v("当前逾期率 = 未还金额 / 应还金额")]),e._v(" "),l("p",[e._v("总实还金额 = 提前订单金额+正常订单金额+部分还款金额+逾期还款总金额-正常还款减免金额+展期金额")]),e._v(" "),l("p",[e._v("复借率 = 今日老客放款数 / 当日还款总订单数")])])}]};var o=l("C7Lr")(n,r,!1,function(e){l("W/A6")},"data-v-e1649c5c",null);t.default=o.exports}});
//# sourceMappingURL=8.84ff22561b45547d93dd.js.map