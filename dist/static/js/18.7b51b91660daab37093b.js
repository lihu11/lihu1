webpackJsonp([18],{epdo:function(e,l){},g5L1:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"container"},[t("div",{staticClass:"box-card"},[t("el-row",{staticStyle:{"margin-bottom":"15px"}},[t("el-col",{staticStyle:{"text-align":"right"},attrs:{span:24}},[t("el-button",{attrs:{size:"mini"}},[e._v("导出Excel")])],1)],1),e._v(" "),t("el-form",{ref:"form",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[t("el-form-item",{attrs:{label:"订单编号"}},[t("el-input",{attrs:{placeholder:"请输入",round:"",size:"mini"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"三方订单编号"}},[t("el-input",{attrs:{placeholder:"请输入",round:"",size:"mini"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"用户姓名"}},[t("el-input",{attrs:{placeholder:"请输入",round:"",size:"mini"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"手机号码"}},[t("el-input",{attrs:{placeholder:"请输入",round:"",size:"mini"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"还款方式"}},[t("el-select",{attrs:{placeholder:"全部",size:"mini"},model:{value:e.form.a,callback:function(l){e.$set(e.form,"a",l)},expression:"form.a"}},[t("el-option",{attrs:{label:"线上",value:"1"}}),e._v(" "),t("el-option",{attrs:{label:"线下",value:"2"}}),e._v(" "),t("el-option",{attrs:{label:"代扣",value:"3"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"新老客"}},[t("el-select",{attrs:{placeholder:"全部",size:"mini"},model:{value:e.form.b,callback:function(l){e.$set(e.form,"b",l)},expression:"form.b"}},[t("el-option",{attrs:{label:"新客",value:"1"}}),e._v(" "),t("el-option",{attrs:{label:"老客",value:"2"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"申请时间"}},[t("el-date-picker",{attrs:{type:"daterange","prefix-icon":"el-icon-time","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间",size:"mini"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"原到期时间"}},[t("el-date-picker",{attrs:{type:"daterange","prefix-icon":"el-icon-time","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间",size:"mini"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"展期结束时间"}},[t("el-date-picker",{attrs:{type:"daterange","prefix-icon":"el-icon-time","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间",size:"mini"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"预期天数"}},[t("el-input",{attrs:{placeholder:"请输入",round:"",size:"mini"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"至"}},[t("el-input",{attrs:{placeholder:"请输入",round:"",size:"mini"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"支付结果"}},[t("el-select",{attrs:{placeholder:"全部",size:"mini"},model:{value:e.form.c,callback:function(l){e.$set(e.form,"c",l)},expression:"form.c"}},[t("el-option",{attrs:{label:"支付成功",value:"1"}}),e._v(" "),t("el-option",{attrs:{label:"支付中",value:"2"}}),e._v(" "),t("el-option",{attrs:{label:"支付失败",value:"3"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"催收人员"}},[t("el-select",{attrs:{placeholder:"全部",size:"mini"},model:{value:e.form.d,callback:function(l){e.$set(e.form,"d",l)},expression:"form.d"}},[t("el-option",{attrs:{label:"居杰涛",value:"1"}}),e._v(" "),t("el-option",{attrs:{label:"齐康星",value:"2"}}),e._v(" "),t("el-option",{attrs:{label:"汪武新",value:"3"}}),e._v(" "),t("el-option",{attrs:{label:"姜元全",value:"4"}}),e._v(" "),t("el-option",{attrs:{label:"陈栋",value:"5"}}),e._v(" "),t("el-option",{attrs:{label:"彭彬",value:"6"}}),e._v(" "),t("el-option",{attrs:{label:"赵启",value:"7"}}),e._v(" "),t("el-option",{attrs:{label:"居强军",value:"8"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"渠道来源"}},[t("el-select",{attrs:{placeholder:"全部",size:"mini"},model:{value:e.form.e,callback:function(l){e.$set(e.form,"e",l)},expression:"form.e"}},[t("el-option",{attrs:{label:"牛牛借",value:"1"}}),e._v(" "),t("el-option",{attrs:{label:"轻松借",value:"2"}}),e._v(" "),t("el-option",{attrs:{label:"月花花",value:"3"}}),e._v(" "),t("el-option",{attrs:{label:"vuq5",value:"4"}}),e._v(" "),t("el-option",{attrs:{label:"vur6",value:"5"}}),e._v(" "),t("el-option",{attrs:{label:"awu3",value:"6"}}),e._v(" "),t("el-option",{attrs:{label:"ivq4",value:"7"}}),e._v(" "),t("el-option",{attrs:{label:"kkfc",value:"8"}}),e._v(" "),t("el-option",{attrs:{label:"liga",value:"9"}}),e._v(" "),t("el-option",{attrs:{label:"fess",value:"10"}}),e._v(" "),t("el-option",{attrs:{label:"bsff",value:"11"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"订单状态"}},[t("el-select",{attrs:{placeholder:"全部",size:"mini"},model:{value:e.form.f,callback:function(l){e.$set(e.form,"f",l)},expression:"form.f"}},[t("el-option",{attrs:{label:"未还款",value:"1"}}),e._v(" "),t("el-option",{attrs:{label:"已还款",value:"2"}}),e._v(" "),t("el-option",{attrs:{label:"逾期中",value:"3"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"展期费用"}},[t("el-input",{attrs:{placeholder:"请输入",round:"",size:"mini"}})],1),e._v(" "),t("el-form-item",[t("el-button",{staticClass:"searchBtn",attrs:{type:"primary",size:"mini"}},[e._v("查询")])],1)],1)],1),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"mytable"},[t("el-table",{staticStyle:{width:"100%"},attrs:{height:"480px",size:"mini",border:""}},[t("el-table-column",{attrs:{prop:"id",label:"序号"}}),e._v(" "),t("el-table-column",{attrs:{prop:"order-id",label:"订单编号"}}),e._v(" "),t("el-table-column",{attrs:{prop:"username",label:"三方订单号"}}),e._v(" "),t("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),e._v(" "),t("el-table-column",{attrs:{prop:"loan_day",label:"用户姓名"}}),e._v(" "),t("el-table-column",{attrs:{prop:"order_status",label:"新老客"}}),e._v(" "),t("el-table-column",{attrs:{prop:"is_show",label:"展期天数"}}),e._v(" "),t("el-table-column",{attrs:{prop:"loan_money",width:"100",label:"逾期展期天数"}}),e._v(" "),t("el-table-column",{attrs:{prop:"arrival_amount",label:"展期费用"}}),e._v(" "),t("el-table-column",{attrs:{prop:"service_charge",label:"订单状态"}}),e._v(" "),t("el-table-column",{attrs:{prop:"days_overdue",label:"还款方式"}}),e._v(" "),t("el-table-column",{attrs:{prop:"money_overdue",label:"原到期时间"}}),e._v(" "),t("el-table-column",{attrs:{prop:"should_amount",label:"展期结束时间",width:"100"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"申请时间"}}),e._v(" "),t("el-table-column",{attrs:{prop:"punishment",label:"支付结果"}}),e._v(" "),t("el-table-column",{attrs:{prop:"apply_time",label:"催收人员"}}),e._v(" "),t("el-table-column",{attrs:{prop:"arr_time",label:"支付时间"}}),e._v(" "),t("el-table-column",{attrs:{prop:"s_time",label:"错误描述"}}),e._v(" "),t("el-table-column",{attrs:{prop:"s_time",label:"渠道来源"}})],1)],1),e._v(" "),t("div",{staticClass:"pageBox"},[t("el-pagination",{attrs:{background:"","page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:40}})],1)])},staticRenderFns:[function(){var e=this.$createElement,l=this._self._c||e;return l("div",{staticClass:"count"},[l("span",[this._v("展期收款金额：0")]),this._v(" "),l("span",[this._v("展期订单数：0")])])}]};var r=t("C7Lr")({name:"rollOverTheOrder",data:function(){return{form:{a:"",b:"",c:"",d:"",e:"",f:"",g:""}}}},a,!1,function(e){t("epdo")},null,null);l.default=r.exports}});
//# sourceMappingURL=18.7b51b91660daab37093b.js.map