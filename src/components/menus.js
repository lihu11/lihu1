const menus = [
  {id: '0', label: '首页', path: '/', icon: 'fa fa-home'},
  {
    id: 'components',
    icon: 'fa fa-address-book',
    label: '用户管理',
    submenu: [
      {
        id: 'test',
        label: '用户列表',
        path: '/user/userlist',
        icon: 'fa fa-hand-o-up'
      },
      {
        id: 'test',
        label: '黑名单',
        path: '/user/blacklist',
        icon: 'fa fa-hand-o-up'
      },
      {
        id: 'test',
        label: '意见反馈',
        path: '/user/feedback',
        icon: 'fa fa-hand-o-up'
      }
    ]
  },
  {
    id: 'pages',
    icon: 'fa fa-circle-o',
    label: '信审管理',
    submenu: [
      {id: 'borrowapply', path: '/credit/borrowapply', label: '借款申请订单'},
      {id: 'manualreview', path: '/credit/manualreview', label: '人工复审'},
      {id: 'reviewrecords', path: '/credit/reviewrecords', label: '复审记录'}
    ]
  },
  {
    id: 'examples',
    icon: 'fa fa-paper-plane',
    label: '订单管理',
    submenu: [
      {id: 'orderlist', path: '/order/orderlist', label: '订单列表'},
      {id: 'paymentorder', path: '/order/paymentorder', label: '还款订单'},
      {id: 'loanorders', path: '/order/loanorders', label: '放款订单'},
      {id: 'withholdingorders', path: '/order/withholdingOrders', label: '代扣订单'},
      {id: 'rollovertheorder', path: '/order/rollOverTheOrder', label: '展期订单'}
    ]
  },
  {
    id: 'exampless',
    icon: 'fa fa-paper-plane',
    label: '审核管理',
    submenu: [
      {id: 'creditamount', path: '/audit/creditamount', label: '减免金额审核'},
      {id: 'offlinepayment', path: '/audit/offlinepayment', label: '线下还款审核'},
      {id: 'offlinepaymentp', path: '/audit/offlinepaymentp', label: '线下还款补单'}
    ]
  },
  {
    id: 'version',
    icon: 'fa fa-meetup',
    label: '催收管理',
    submenu: [
      {id: 'collection', path: '/collection/collectionOrder', label: '催收订单'},
      {id: 'collectiongroup', path: '/collection/collectiongroup', label: '催收分组'},
      {id: 'collectionsd', path: '/collection/collectionSd', label: '催收人员分配'}
    ]
  },
  {
    id: 'version',
    icon: 'fa fa-meetup',
    label: '渠道列表',
    path: '/channel_list'
  },
  {
    id: 'examplesss',
    icon: 'fa fa-paper-plane',
    label: '数据统计',
    submenu: [
      {id: 'daychannelcount', path: '/count/daychannelcount', label: '每日渠道统计'},
      {id: 'dayloancount', path: '/count/dayloancount', label: '每日放款统计'},
      {id: 'dayrefundcount', path: '/count/dayrefundcount', label: '每日还款统计'},
      {id: 'daychannelrefundcount', path: '/count/daychannelrefundcount', label: '每日渠道还款统计'},
      {id: 'recyclecount', path: '/count/recyclecount', label: '每日催收回收统计'},
      {id: 'performance', path: '/count/performance', label: '催收绩效考核'},
      {id: 'thirdparty', path: '/count/thirdparty', label: '第三方消耗账单列表'},
      {id: 'platform', path: '/count/platform', label: '每日平台统计'}
    ]
  }

]
export default menus
