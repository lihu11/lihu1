webpackJsonp([24],{mBEW:function(t,e){},u0cp:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("xd7I"),n=(a("6bRL"),{name:"dayLoanCount",data:function(){return{form:{a:"",b:"",c:"",d:"",e:"",f:"",g:""},LoanList:[],pageSize:10,currentPage:1,total:0}},mounted:function(){this.HandleGetLoanCount(1,10)},methods:{handleExport:function(){window.open("/hxy/execl/EveryDailyLend.do")},HandleGetLoanCount:function(t,e){var a=this;this.HandleGetMaxNum(),l.default.http.get("/hxy/channel/getDailyLend.do?page="+t+"&num="+e).then(function(t){a.LoanList=t.data})},HandleGetMaxNum:function(){var t=this;l.default.http.get("/hxy/channel/getDailyLendnum.do").then(function(e){t.total=e.data})},handleCurrentChange:function(t){this.currentPage=t,this.HandleGetLoanCount(t,this.pageSize),this.currentChangePage(this.list,t)},currentChangePage:function(t,e){var a=(e-1)*this.pageSize,l=e*this.pageSize;for(console.log(l),this.tempList=[];a<l;a++)t[a]&&this.tempList.push(t[a])},handleChangepageSize:function(t){this.pageSize=t,this.HandleGetLoanCount(this.currentPage,t),this.currentChangePage(this.list,this.currentPage)}}}),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"box-card"},[a("el-row",{staticStyle:{"margin-bottom":"15px"}},[a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:24}},[a("el-button",{attrs:{size:"mini"},on:{click:t.handleExport}},[t._v("导出Excel")])],1)],1),t._v(" "),a("el-form",{ref:"form",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.form}},[a("el-form-item",{attrs:{label:"日期"}},[a("el-date-picker",{attrs:{type:"daterange","prefix-icon":"el-icon-time","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间",size:"mini"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"渠道名称"}},[a("el-select",{attrs:{placeholder:"全部",size:"mini"},model:{value:t.form.f,callback:function(e){t.$set(t.form,"f",e)},expression:"form.f"}},[a("el-option",{attrs:{label:"牛牛借",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"轻松借",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"月花花",value:"3"}}),t._v(" "),a("el-option",{attrs:{label:"vuq5",value:"4"}}),t._v(" "),a("el-option",{attrs:{label:"vur6",value:"5"}}),t._v(" "),a("el-option",{attrs:{label:"awu3",value:"6"}}),t._v(" "),a("el-option",{attrs:{label:"ivq4",value:"7"}}),t._v(" "),a("el-option",{attrs:{label:"kkfc",value:"8"}}),t._v(" "),a("el-option",{attrs:{label:"liga",value:"9"}}),t._v(" "),a("el-option",{attrs:{label:"fess",value:"10"}}),t._v(" "),a("el-option",{attrs:{label:"bsff",value:"11"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"商务名称"}},[a("el-input",{attrs:{placeholder:"请输入",round:"",size:"mini"}})],1),t._v(" "),a("el-button",{attrs:{type:"warning",size:"mini"}},[t._v("查询")])],1)],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"order-table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{height:"480px",size:"mini",border:"",data:t.LoanList}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"datetime",label:"日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"channelSources",label:"渠道名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"countNumber",width:"118",label:"放款单数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sun",label:"放款总数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"firstnum",label:"首借人数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"firstsum",label:"首借总额"}}),t._v(" "),a("el-table-column",{attrs:{prop:"secondnum",width:"118",label:"次借人数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"secondsum",width:"118",label:"次借总额"}}),t._v(" "),a("el-table-column",{attrs:{prop:"morenum",width:"118",label:"复借人数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"moresum",width:"118",label:"复借总额"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sjsun",width:"118",label:"实际放款总额"}}),t._v(" "),a("el-table-column",{attrs:{prop:"businessAffairs",width:"118",label:"所属商务"}})],1)],1),t._v(" "),a("div",{staticClass:"pageBox"},[a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleChangepageSize,"current-change":t.handleCurrentChange}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-info"},[e("p",[this._v("次借人数：统计第二次借款成功的人数")]),this._v(" "),e("p",[this._v("复借人数：统计三次以及三次以上借款成功的人数，不包含词次借人数")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"count"},[a("span",[t._v("放款单数总计：")]),t._v(" "),a("span",[t._v("放款总额：")]),t._v(" "),a("span",[t._v("首借人数统计：")]),t._v(" "),a("span",[t._v("首借人数统计：")]),t._v(" "),a("span",[t._v("次借人数总计：")]),t._v(" "),a("span",[t._v("次借总金额：")]),t._v(" "),a("span",[t._v("复借总金额：")]),t._v(" "),a("span",[t._v("实际放款总额：")])])}]};var r=a("C7Lr")(n,i,!1,function(t){a("mBEW")},"data-v-20234afe",null);e.default=r.exports}});
//# sourceMappingURL=24.366d404d72b808cd1c69.js.map