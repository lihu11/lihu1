webpackJsonp([13],{DBdz:function(e,t){},VOZJ:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("form",{staticClass:"selectBox"},[l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[l("el-form-item",{attrs:{label:"姓名"}},[l("el-input",{attrs:{size:"mini",placeholder:"请输入"},model:{value:e.formInline.approver,callback:function(t){e.$set(e.formInline,"approver",t)},expression:"formInline.approver"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"手机"}},[l("el-input",{attrs:{size:"mini",placeholder:"请输入"},model:{value:e.formInline.mobile,callback:function(t){e.$set(e.formInline,"mobile",t)},expression:"formInline.mobile"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"订单状态"}},[l("el-select",{attrs:{size:"mini",placeholder:"全部"},model:{value:e.formInline.shiming,callback:function(t){e.$set(e.formInline,"shiming",t)},expression:"formInline.shiming"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"渠道来源"}},[l("el-select",{attrs:{size:"mini",placeholder:"全部"},model:{value:e.formInline.shiming,callback:function(t){e.$set(e.formInline,"shiming",t)},expression:"formInline.shiming"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"新老客"}},[l("el-select",{attrs:{size:"mini",placeholder:"全部"},model:{value:e.formInline.shiming,callback:function(t){e.$set(e.formInline,"shiming",t)},expression:"formInline.shiming"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"审核员"}},[l("el-input",{attrs:{size:"mini",placeholder:"请输入"},model:{value:e.formInline.mobile,callback:function(t){e.$set(e.formInline,"mobile",t)},expression:"formInline.mobile"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"申请时间"}},[l("div",{staticClass:"block"},[l("el-date-picker",{attrs:{size:"mini",type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","default-value":"2010-10-01"},model:{value:e.dataRange,callback:function(t){e.dataRange=t},expression:"dataRange"}})],1)]),e._v(" "),l("el-form-item",{attrs:{label:"复审单数"}},[l("el-input",{attrs:{size:"mini",placeholder:"请输入"},model:{value:e.formInline.mobile,callback:function(t){e.$set(e.formInline,"mobile",t)},expression:"formInline.mobile"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"订单号取单"}},[l("el-input",{attrs:{size:"mini",placeholder:"请输入"},model:{value:e.formInline.mobile,callback:function(t){e.$set(e.formInline,"mobile",t)},expression:"formInline.mobile"}})],1),e._v(" "),l("el-button",{attrs:{type:"warning"}},[e._v("查询")])],1)],1),e._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"tableContainer"},[l("table",{staticClass:"tableBox"},[e._m(0),e._v(" "),l("tbody",[l("tr",[l("td",[e._v("1")]),e._v(" "),l("td",[e._v("1654165132165416565135135")]),e._v(" "),l("td",[e._v("测试宋")]),e._v(" "),l("td",[e._v("13735643811")]),e._v(" "),l("td",[e._v("7")]),e._v(" "),l("td",[e._v("风控不通过")]),e._v(" "),l("td",[e._v("3")]),e._v(" "),l("td",[e._v("2.7")]),e._v(" "),l("td",[e._v("2019-09-04 10:34:39")]),e._v(" "),l("td",[e._v("老客")]),e._v(" "),l("td",[e._v("用户状态")]),e._v(" "),l("td"),e._v(" "),l("td"),e._v(" "),l("td"),e._v(" "),l("td"),e._v(" "),l("td",[l("div",{staticClass:"btnBox"},[l("el-button",{attrs:{type:"warning"}},[e._v("详情")])],1)])]),e._v(" "),l("tr",[l("td",[e._v("1")]),e._v(" "),l("td",[e._v("1654165132165416565135135")]),e._v(" "),l("td",[e._v("测试宋")]),e._v(" "),l("td",[e._v("13735643811")]),e._v(" "),l("td",[e._v("7")]),e._v(" "),l("td",[e._v("风控不通过")]),e._v(" "),l("td",[e._v("3")]),e._v(" "),l("td",[e._v("2.7")]),e._v(" "),l("td",[e._v("2019-09-04 10:34:39")]),e._v(" "),l("td",[e._v("老客")]),e._v(" "),l("td",[e._v("用户状态")]),e._v(" "),l("td"),e._v(" "),l("td"),e._v(" "),l("td"),e._v(" "),l("td"),e._v(" "),l("td",[l("div",{staticClass:"btnBox"},[l("el-button",{attrs:{type:"warning"}},[e._v("详情")])],1)])]),e._v(" "),e._m(1)])])]),e._v(" "),l("div",{staticClass:"pageBox"},[l("el-pagination",{attrs:{background:"","page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400}})],1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("thead",[l("tr",[l("td",[e._v("序号")]),e._v(" "),l("td",[e._v("订单编号")]),e._v(" "),l("td",[e._v("用户姓名")]),e._v(" "),l("td",[e._v("手机号码")]),e._v(" "),l("td",[e._v("借款期限（天）")]),e._v(" "),l("td",[e._v("订单状态")]),e._v(" "),l("td",[e._v("借款金额（元）")]),e._v(" "),l("td",[e._v("到账金额（元）")]),e._v(" "),l("td",[e._v("申请时间")]),e._v(" "),l("td",[e._v("新老客")]),e._v(" "),l("td",[e._v("用户状态")]),e._v(" "),l("td",[e._v("渠道来源")]),e._v(" "),l("td",[e._v("风控结果")]),e._v(" "),l("td",[e._v("风控分数")]),e._v(" "),l("td",[e._v("审核员")]),e._v(" "),l("td",[e._v("操作")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",{staticClass:"noData",attrs:{colspan:"16"}},[this._v("暂无数据")])])}]};var a=l("C7Lr")({data:function(){return{dataRange:"",formInline:{approver:"",mobile:"",shiming:"",bankCard:"",face:"",mailList:"",operator:"",userState:"",channelSources:"",orderState:"",borrow:"",bill:""}}},methods:{}},i,!1,function(e){l("DBdz")},"data-v-750d52c9",null);t.default=a.exports}});
//# sourceMappingURL=13.8c330d890f4dc071db25.js.map