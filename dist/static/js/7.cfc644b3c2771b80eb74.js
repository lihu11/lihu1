webpackJsonp([7],{KVyF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"box-card"},[a("el-form",{ref:"form",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[a("el-form-item",{attrs:{label:"订单编号"}},[a("el-input",{attrs:{placeholder:"请输入",round:"",size:"mini"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户姓名"}},[a("el-input",{attrs:{placeholder:"请输入",round:"",size:"mini"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号码"}},[a("el-input",{attrs:{placeholder:"请输入",round:"",size:"mini"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"还款日"}},[a("el-date-picker",{attrs:{type:"daterange","prefix-icon":"el-icon-time","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间",size:"mini"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"第一次执行时间"}},[a("el-date-picker",{attrs:{type:"daterange","prefix-icon":"el-icon-time","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间",size:"mini"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"第一次结果"}},[a("el-select",{attrs:{placeholder:"全部",size:"mini"},model:{value:e.form.a,callback:function(t){e.$set(e.form,"a",t)},expression:"form.a"}},[a("el-option",{attrs:{label:"处理失败",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"待处理",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"处理完成",value:"3"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{staticClass:"searchBtn",attrs:{type:"primary",size:"mini"}},[e._v("查询")])],1)],1)],1),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"mytable"},[a("el-table",{staticStyle:{width:"100%"},attrs:{height:"480px",size:"mini",border:""}},[a("el-table-column",{attrs:{prop:"id",label:"序号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"order-id",label:"订单编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"手机号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"用户姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"loan_day",label:"借款金额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"order_status",label:"还款日"}}),e._v(" "),a("el-table-column",{attrs:{prop:"is_show",label:"逾期天数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"loan_money",label:"第一次代扣执行时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"arrival_amount",label:"第一次代扣结果"}})],1)],1),e._v(" "),a("div",{staticClass:"pageBox"},[a("el-pagination",{attrs:{background:"","page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:30}})],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"count"},[t("span",[this._v("代扣单数：0")]),this._v(" "),t("span",[this._v("成功单数：0")]),this._v(" "),t("span",[this._v("代扣回收金额：0")])])}]};var r=a("VU/8")({name:"withholdingOrders",data:function(){return{form:{a:""}}}},l,!1,function(e){a("r+eK")},null,null);t.default=r.exports},"r+eK":function(e,t){}});
//# sourceMappingURL=7.cfc644b3c2771b80eb74.js.map