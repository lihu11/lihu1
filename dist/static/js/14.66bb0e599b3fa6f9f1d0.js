webpackJsonp([14],{Gep8:function(e,t){},yqAO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("2sCs"),i=a.n(l),n=a("6bRL"),o={data:function(){return{dialogVisible:!1,dataRange:"",formInline:{approver:"",mobile:"",shiming:"",bankCard:"",face:"",mailList:"",operator:"",userState:"",qudao:"",orderState:"",dataRange:"",borrow:"",bill:""},dataList:"",currentPage:1,pageSize:10,total:0}},methods:{ShowShandow:function(){},handleSizeChange:function(e){this.pageSize=e,this.HandleGetList(this.currentPage,e)},handleCurrentChange:function(e){this.currentPage=e,this.HandleGetList(e,this.pageSize)},HandleGetList:function(e,t){var a=this;i.a.get("./getUserListLb?currentPage="+e+"&pageSize="+t).then(function(e){a.dataList=e,e.list.forEach(function(e){e.f_createTime=Object(n.a)(e.createTime)}),e.list.forEach(function(e){e.f_loginTime=Object(n.a)(e.loginTime)})}).catch(function(e){console.log(e)})}},mounted:function(){this.HandleGetList(1,10)}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("form",{staticClass:"selectBox"},[e._m(0),e._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"审批人"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入"},model:{value:e.formInline.approver,callback:function(t){e.$set(e.formInline,"approver",t)},expression:"formInline.approver"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号码"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入"},model:{value:e.formInline.mobile,callback:function(t){e.$set(e.formInline,"mobile",t)},expression:"formInline.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"实名认证"}},[a("el-select",{attrs:{size:"mini",placeholder:"全部"},model:{value:e.formInline.shiming,callback:function(t){e.$set(e.formInline,"shiming",t)},expression:"formInline.shiming"}},[a("el-option",{attrs:{label:"已认证",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"未认证",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"认证中",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"银行卡认证"}},[a("el-select",{attrs:{size:"mini",placeholder:"全部"},model:{value:e.formInline.bankCard,callback:function(t){e.$set(e.formInline,"bankCard",t)},expression:"formInline.bankCard"}},[a("el-option",{attrs:{label:"已认证",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"未认证",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"认证中",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"人脸识别认证"}},[a("el-select",{attrs:{size:"mini",placeholder:"全部"},model:{value:e.formInline.face,callback:function(t){e.$set(e.formInline,"face",t)},expression:"formInline.face"}},[a("el-option",{attrs:{label:"已认证",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"未认证",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"认证中",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"通讯录认证"}},[a("el-select",{attrs:{size:"mini",placeholder:"全部"},model:{value:e.formInline.mailList,callback:function(t){e.$set(e.formInline,"mailList",t)},expression:"formInline.mailList"}},[a("el-option",{attrs:{label:"已认证",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"未认证",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"认证中",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"运营商认证"}},[a("el-select",{attrs:{size:"mini",placeholder:"全部"},model:{value:e.formInline.operator,callback:function(t){e.$set(e.formInline,"operator",t)},expression:"formInline.operator"}},[a("el-option",{attrs:{label:"普通",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"黑名单",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"用户状态"}},[a("el-select",{attrs:{size:"mini",placeholder:"全部"},model:{value:e.formInline.userState,callback:function(t){e.$set(e.formInline,"userState",t)},expression:"formInline.userState"}},[a("el-option",{attrs:{label:"普通",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"黑名单",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"渠道来源"}},[a("el-select",{attrs:{size:"mini",placeholder:"全部"},model:{value:e.formInline.qudao,callback:function(t){e.$set(e.formInline,"qudao",t)},expression:"formInline.qudao"}},[a("el-option",{attrs:{label:"牛牛借",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"轻松花",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"轻松借",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"月花花",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"vuq5",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"vur6",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"awu3",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"ivq4",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"kkfc",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"liga",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"fess",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"bsff",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"订单状态"}},[a("el-select",{attrs:{size:"mini",placeholder:"全部"},model:{value:e.formInline.orderState,callback:function(t){e.$set(e.formInline,"orderState",t)},expression:"formInline.orderState"}},[a("el-option",{attrs:{label:"未还款",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"已还款",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"逾期中",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"注册时间"}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{size:"mini",type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","default-value":"2010-10-01"},model:{value:e.dataRange,callback:function(t){e.dataRange=t},expression:"dataRange"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"老客是否复借"}},[a("el-select",{attrs:{size:"mini",placeholder:"全部"},model:{value:e.formInline.borrow,callback:function(t){e.$set(e.formInline,"borrow",t)},expression:"formInline.borrow"}},[a("el-option",{attrs:{label:"是",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"是否提单"}},[a("el-select",{attrs:{size:"mini",placeholder:"全部"},model:{value:e.formInline.bill,callback:function(t){e.$set(e.formInline,"bill",t)},expression:"formInline.bill"}},[a("el-option",{attrs:{label:"是",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"warning"}},[e._v("查询")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"手机验证码",visible:e.dialogVisible,width:"40%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("div",{staticClass:"pubLine flex"},[a("el-form-item",{staticStyle:{"margin-right":"0"},attrs:{label:"手机号"}},[a("el-input",{staticStyle:{width:"445px"},attrs:{placeholder:"请输入"},model:{value:e.formInline.approver,callback:function(t){e.$set(e.formInline,"approver",t)},expression:"formInline.approver"}})],1)],1),e._v(" "),a("div",{staticClass:"pubLine flex"},[a("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"验证码"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formInline.approver,callback:function(t){e.$set(e.formInline,"approver",t)},expression:"formInline.approver"}})],1),e._v(" "),a("el-button",{attrs:{type:"warning"}},[e._v("获取验证码")])],1)]),e._v(" "),a("span",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"warning"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)],1),e._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"tableContainer"},[a("table",{staticClass:"tableBox"},[e._m(1),e._v(" "),a("tbody",[e._l(e.dataList.list,function(t,l){return a("tr",[a("td",{domProps:{textContent:e._s(l+1)}},[e._v("1")]),e._v(" "),a("td",{domProps:{textContent:e._s(t.userName)}},[e._v("测试宋")]),e._v(" "),a("td",{domProps:{textContent:e._s(t.phoneNumber)}},[e._v("13735643811")]),e._v(" "),a("td",{class:"未认证"==t.realNameAuthentication?" ":" certified",domProps:{textContent:e._s(t.realNameAuthentication)}},[e._v("未认证")]),e._v(" "),a("td",{class:"未认证"==t.bankCardAuthentication?" ":" certified",domProps:{textContent:e._s(t.bankCardAuthentication)}},[e._v("未认证")]),e._v(" "),a("td",{class:"未认证"==t.faceRecognitionAuthentication?" ":" certified",domProps:{textContent:e._s(t.faceRecognitionAuthentication)}},[e._v("人脸识别未认证")]),e._v(" "),a("td",{domProps:{textContent:e._s(t.mailListAuthentication)}},[e._v("未认证")]),e._v(" "),a("td",{class:"已认证"==t.operatorsAuthentication?" certified":"认证失效"==t.operatorsAuthentication?" renzhengfailure":"",domProps:{textContent:e._s(t.operatorsAuthentication)}},[e._v("未认证")]),e._v(" "),a("td",{domProps:{textContent:e._s(t.channelSources)}},[e._v("quasi")]),e._v(" "),a("td",{class:"风控通过"==t.orderStatus?"":" noPass",domProps:{textContent:e._s(t.orderStatus)}}),e._v(" "),a("td",{domProps:{textContent:e._s(1==t.isDoubleLending?"是":0==t.isDoubleLending?"否":"")}},[e._v("否")]),e._v(" "),a("td",[a("span",{class:["userState",{normal:"普通"==t.userStatus,blackList:"黑名单"==t.userStatus}],domProps:{textContent:e._s(t.userStatus)}},[e._v("灰名单")])]),e._v(" "),a("td",{domProps:{textContent:e._s(t.f_createTime)}},[e._v("2019-09-04 10:34:39")]),e._v(" "),a("td",{domProps:{textContent:e._s(t.f_loginTime)}},[e._v("2019-09-04 10:34:39")]),e._v(" "),a("td",[a("div",{staticClass:"btnBox"},[a("el-button",{attrs:{type:"warning"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("查看")]),e._v(" "),a("el-button",{attrs:{type:"warning"}},[e._v("加入黑名单")]),e._v(" "),a("el-button",{attrs:{type:"warning"}},[e._v("删除")])],1)])])}),e._v(" "),a("tr",{directives:[{name:"show",rawName:"v-show",value:e.dataList.length<=0,expression:"dataList.length <= 0"}]},[a("td",{staticClass:"noData",attrs:{colspan:"15"}},[e._v("暂无数据")])])],2)])]),e._v(" "),a("div",{staticClass:"pageBox"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:e.dataList.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"exportBox",attrs:{href:"./execl/Userlistexport.do"}},[t("div",{staticClass:"exportBtn"},[this._v("导出Excel")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("td",[e._v("序号")]),e._v(" "),a("td",[e._v("用户姓名")]),e._v(" "),a("td",[e._v("手机号码")]),e._v(" "),a("td",[e._v("实名认证")]),e._v(" "),a("td",[e._v("银行卡认证")]),e._v(" "),a("td",[e._v("人脸识别认证")]),e._v(" "),a("td",[e._v("通讯录认证")]),e._v(" "),a("td",[e._v("运营商认证")]),e._v(" "),a("td",[e._v("渠道来源")]),e._v(" "),a("td",[e._v("订单状态")]),e._v(" "),a("td",[e._v("老客是否复借")]),e._v(" "),a("td",[e._v("用户状态")]),e._v(" "),a("td",[e._v("注册时间")]),e._v(" "),a("td",[e._v("登陆时间")]),e._v(" "),a("td",[e._v("操作")])])])}]};var s=a("C7Lr")(o,r,!1,function(e){a("Gep8")},"data-v-543f3890",null);t.default=s.exports}});
//# sourceMappingURL=14.66bb0e599b3fa6f9f1d0.js.map