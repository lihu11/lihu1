webpackJsonp([13],{"+LJJ":function(e,t){},WRct:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("2sCs"),l=a.n(n),o=a("6bRL"),i={data:function(){return{dataRange:"",dataList:"",formInline:{orderNum:"",userName:"",mobile:"",orderState:"",customer:"",qudao:"",auditor:"",dataRange:""},currentPage:1,pageSize:10,total:0}},methods:{handleSizeChange:function(e){this.pageSize=e,this.HandleGetList(this.currentPage,e)},handleCurrentChange:function(e){this.currentPage=e,this.HandleGetList(e,this.pageSize)},HandleGetList:function(e,t){var a=this;l.a.get("./getLoanApplyLb?currentPage="+e+"&pageSize="+t).then(function(e){a.dataList=e,e.list.forEach(function(e){e.f_createTime=Object(o.a)(e.createTime)})}).catch(function(e){console.log(e)})}},created:function(){},mounted:function(){this.HandleGetList(1,10)}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("form",{staticClass:"selectBox"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"订单编号"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入"},model:{value:e.formInline.orderNum,callback:function(t){e.$set(e.formInline,"orderNum",t)},expression:"formInline.orderNum"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户姓名"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入"},model:{value:e.formInline.userName,callback:function(t){e.$set(e.formInline,"userName",t)},expression:"formInline.userName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号码"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入"},model:{value:e.formInline.mobile,callback:function(t){e.$set(e.formInline,"mobile",t)},expression:"formInline.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"订单状态"}},[a("el-select",{attrs:{size:"mini",placeholder:"全部"},model:{value:e.formInline.orderState,callback:function(t){e.$set(e.formInline,"orderState",t)},expression:"formInline.orderState"}},[a("el-option",{attrs:{label:"未还款",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"已还款",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"逾期中",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"客户状态"}},[a("el-select",{attrs:{size:"mini",placeholder:"全部"},model:{value:e.formInline.customer,callback:function(t){e.$set(e.formInline,"customer",t)},expression:"formInline.customer"}},[a("el-option",{attrs:{label:"普通",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"黑名单",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"渠道来源"}},[a("el-select",{attrs:{size:"mini",placeholder:"全部"},model:{value:e.formInline.qudao,callback:function(t){e.$set(e.formInline,"qudao",t)},expression:"formInline.qudao"}},[a("el-option",{attrs:{label:"牛牛借",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"轻松花",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"轻松借",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"月花花",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"vuq5",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"vur6",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"awu3",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"ivq4",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"kkfc",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"liga",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"fess",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"bsff",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"审核员"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入"},model:{value:e.formInline.userName,callback:function(t){e.$set(e.formInline,"userName",t)},expression:"formInline.userName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申请时间"}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{size:"mini",type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","default-value":"2010-10-01"},model:{value:e.dataRange,callback:function(t){e.dataRange=t},expression:"dataRange"}})],1)]),e._v(" "),a("el-button",{attrs:{type:"warning"}},[e._v("查询")])],1)],1),e._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"tableContainer"},[a("table",{staticClass:"tableBox"},[e._m(0),e._v(" "),a("tbody",[e._l(e.dataList.list,function(t,n){return a("tr",[a("td",{domProps:{textContent:e._s(n)}},[e._v("1")]),e._v(" "),a("td",{domProps:{textContent:e._s(t.applicationNumber)}},[e._v("1654165132165416565135135")]),e._v(" "),a("td",{domProps:{textContent:e._s(t.userName)}},[e._v("测试宋")]),e._v(" "),a("td",{domProps:{textContent:e._s(t.phoneNumber)}},[e._v("13735643811")]),e._v(" "),a("td",{domProps:{textContent:e._s(t.loanDay)}},[e._v("7")]),e._v(" "),a("td",{class:"风控通过"==t.loanStatus?"":" noPass",domProps:{textContent:e._s(t.loanStatus)}},[e._v("风控不通过")]),e._v(" "),a("td",{domProps:{textContent:e._s(t.loanMoney)}},[e._v("3")]),e._v(" "),a("td",{domProps:{textContent:e._s(t.accountMoney)}},[e._v("2.7")]),e._v(" "),a("td",{domProps:{textContent:e._s(t.serviceMoney)}},[e._v("0.3")]),e._v(" "),a("td",{domProps:{textContent:e._s(t.f_createTime)}},[e._v("2019-09-04 10:34:39")]),e._v(" "),a("td",{domProps:{textContent:e._s(t.userStatus)}},[e._v("老客")]),e._v(" "),a("td",{domProps:{textContent:e._s(t.channelSources)}}),e._v(" "),a("td",{domProps:{textContent:e._s(t.auditor)}}),e._v(" "),a("td",[a("div",{staticClass:"btnBox"},[a("el-button",{attrs:{type:"warning"}},[e._v("详情")])],1)])])}),e._v(" "),a("tr",{directives:[{name:"show",rawName:"v-show",value:e.dataList.length<=0,expression:"dataList.length <= 0"}]},[a("td",{staticClass:"noData",attrs:{colspan:"14"}},[e._v("暂无数据")])])],2)])]),e._v(" "),a("div",{staticClass:"pageBox"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:e.dataList.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("td",[e._v("序号")]),e._v(" "),a("td",[e._v("订单编号")]),e._v(" "),a("td",[e._v("用户姓名")]),e._v(" "),a("td",[e._v("手机号码")]),e._v(" "),a("td",[e._v("借款期限（天）")]),e._v(" "),a("td",[e._v("订单状态")]),e._v(" "),a("td",[e._v("借款金额（元）")]),e._v(" "),a("td",[e._v("到账金额（元）")]),e._v(" "),a("td",[e._v("服务费（元）")]),e._v(" "),a("td",[e._v("申请时间")]),e._v(" "),a("td",[e._v("客户状态")]),e._v(" "),a("td",[e._v("渠道来源")]),e._v(" "),a("td",[e._v("审核员")]),e._v(" "),a("td",[e._v("操作")])])])}]};var r=a("C7Lr")(i,s,!1,function(e){a("+LJJ")},"data-v-56003cd3",null);t.default=r.exports}});
//# sourceMappingURL=13.8f4a2d22423ae99fd7cc.js.map