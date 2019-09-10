import Vue from 'vue'
import Router from 'vue-router'

import AppView from '@/components/app-view'
import Home from '@/pages/home'

Vue.use(Router)

const page = name => () => import('@/pages/' + name)
const page1 = name => () => import('@/pages/user/' + name)
const page2 = name => () => import('@/pages/credit/' + name)
const page3 = name => () => import('@/pages/order/' + name)
const page4 = name => () => import('@/pages/audit/' + name)
const page5 = name => () => import('@/pages/collection/' + name)
const page6 = name => () => import('@/pages/count/' + name)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: AppView,
      children: [
        {path: '/', name: '首页', component: Home},
        {path: '/user/userlist', name: '用户列表', component: page1('userList')},
        {path: '/user/blacklist', name: '黑名单', component: page1('blackList')},
        {path: '/user/feedback', name: '意见反馈', component: page1('feedBack')},
        {path: '/credit/borrowapply', name: '借款申请订单', component: page2('borrowApply')},
        {path: '/credit/manualreview', name: '人工复审', component: page2('manualReview')},
        {path: '/credit/reviewrecords', name: '复审记录', component: page2('reviewRecords')},
        {path: '/order/orderlist', name: '订单列表', component: page3('orderList')},
        {path: '/order/paymentorder', name: '还款订单', component: page3('paymentOrder')},
        {path: '/order/loanorders', name: '放款订单', component: page3('loanOrders')},
        {path: '/order/withholdingorders', name: '代扣订单', component: page3('withholdingOrders')},
        {path: '/order/rollovertheorder', name: '展期订单', component: page3('rollOverTheOrder')},
        {path: '/audit/creditamount', name: '减免金额审核', component: page4('creditAmount')},
        {path: '/audit/offlinepayment', name: '线下还款审核', component: page4('offlinePayment')},
        {path: '/audit/offlinepaymentp', name: '线下还款补单', component: page4('offlinePaymentreP')},
        {path: '/collection/collectionOrder', name: '催收订单', component: page5('collectionOrder')},
        {path: '/collection/collectiongroup', name: '催收分组', component: page5('collectionGroup')},
        {path: '/collection/collectionsd', name: '催收人员分配', component: page5('collectionSd')},
        {path: '/channel_list', name: '渠道列表', component: page('channel_list')},
        {path: '/count/daychannelcount', name: '每日渠道统计', component: page6('dayChannelCount')},
        {path: '/count/dayloancount', name: '每日放款统计', component: page6('dayLoanCount')},
        {path: '/count/dayrefundcount', name: '每日还款统计', component: page6('dayRefundCount')},
        {path: '/count/daychannelrefundcount', name: '每日渠道还款统计', component: page6('dayChannelRefundCount')},
        {path: '/count/recyclecount', name: '每日催收回收统计', component: page6('recycleCount')},
        {path: '/count/performance', name: '催收绩效考核', component: page6('perFormance')},
        {path: '/count/thirdparty', name: '第三方消耗账单列表', component: page6('thirdParty')},
        {path: '/count/platform', name: '每日平台统计', component: page6('platForm')}

      ]
    },
    {path: '/login', name: 'login', component: page('login')},
    // pages
    {path: '/home-login', name: 'p-login', component: page('home-login')},
    {path: '/register', name: 'p-register', component: page('register')},
    {path: '/keyboard', name: 'p-keyboard', component: page('c-keyboard')},
  ]
})
