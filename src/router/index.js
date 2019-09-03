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
        {path: '/', name: 'home', component: Home},
        {path: '/user/userlist', name: 'userList', component: page1('userList')},
        {path: '/user/blacklist', name: 'blackList', component: page1('blackList')},
        {path: '/user/feedback', name: 'feedBack', component: page1('feedBack')},
        {path: '/credit/borrowapply', name: 'borrowApply', component: page2('borrowApply')},
        {path: '/credit/manualreview', name: 'manualReview', component: page2('manualReview')},
        {path: '/credit/reviewrecords', name: 'reviewRecords', component: page2('reviewRecords')},
        {path: '/order/orderlist', name: 'orderList', component: page3('orderList')},
        {path: '/order/paymentorder', name: 'paymentOrder', component: page3('paymentOrder')},
        {path: '/order/loanorders', name: 'loanOrders', component: page3('loanOrders')},
        {path: '/order/withholdingorders', name: 'withholdingOrders', component: page3('withholdingOrders')},
        {path: '/order/rollovertheorder', name: 'rollOverTheOrder', component: page3('rollOverTheOrder')},
        {path: '/audit/creditamount', name: 'creditAmount', component: page4('creditAmount')},
        {path: '/audit/offlinepayment', name: 'offlinePayment', component: page4('offlinePayment')},
        {path: '/audit/offlinepaymentp', name: 'offlinePaymentreP', component: page4('offlinePaymentreP')},
        {path: '/collection/collectionOrder', name: 'collectionOrder', component: page5('collectionOrder')},
        {path: '/collection/collectiongroup', name: 'collectionGroup', component: page5('collectionGroup')},
        {path: '/collection/collectionsd', name: 'collectionSd', component: page5('collectionSd')},
        {path: '/channel_list', name: 'channel_list', component: page('channel_list')},
        {path: '/count/daychannelcount', name: 'dayChannelCount', component: page6('dayChannelCount')},
        {path: '/count/dayloancount', name: 'dayLoanCount', component: page6('dayLoanCount')},
        {path: '/count/dayrefundcount', name: 'dayRefundCount', component: page6('dayRefundCount')},
        {path: '/count/daychannelrefundcount', name: 'dayChannelRefundCount', component: page6('dayChannelRefundCount')},
        {path: '/count/recyclecount', name: 'recycleCount', component: page6('recycleCount')},
        {path: '/count/performance', name: 'perFormance', component: page6('perFormance')},
        {path: '/count/thirdparty', name: 'thirdParty', component: page6('thirdParty')},
        {path: '/count/platform', name: 'platForm', component: page6('platForm')}

      ]
    },
    {path: '/login', name: 'login', component: page('login')},
    {path: '/cnode', name: 'cnode', component: page('cnode')},
    // pages
    {path: '/home-login', name: 'p-login', component: page('home-login')},
    {path: '/register', name: 'p-register', component: page('register')},
    {path: '/keyboard', name: 'p-keyboard', component: page('c-keyboard')},
    {path: '*', redirect: {name: '404'}}
  ]
})
