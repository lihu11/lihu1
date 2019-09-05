const menus = [
  {id: '0', label: '首页', path: '/', icon: 'iconfont icon-home'},
  {
    id: 'components',
    icon: 'iconfont icon-userplus-fill',
    label: '用户管理',
    submenu: [
      {
        id: 'userlist',
        label: '用户列表',
        path: '/user/userlist',
        icon: 'iconfont icon-seeuser'
      },
      {
        id: 'blacklist',
        label: '黑名单',
        path: '/user/blacklist',
        icon: 'iconfont icon-heimingdan'
      },
      {
        id: 'feedback',
        label: '意见反馈',
        path: '/user/feedback',
        icon: 'iconfont icon-yijianfankui'
      }
    ]
  },
  {
    id: 'pages',
    icon: 'iconfont icon-qiandai',
    label: '信审管理',
    submenu: [
      {id: 'borrowapply', path: '/credit/borrowapply', label: '借款申请订单',icon: 'iconfont icon-jiekuan'},
      {id: 'manualreview', path: '/credit/manualreview', label: '人工复审',icon: 'iconfont icon-rengongshenhe'},
      {id: 'reviewrecords', path: '/credit/reviewrecords', label: '复审记录',icon: 'iconfont icon-jilu'}
    ]
  },
  {
    id: 'order',
    icon: 'iconfont icon-dingdan',
    label: '订单管理',
    submenu: [
      {id: 'orderlist', path: '/order/orderlist', icon: 'iconfont icon-dingdan', label: '订单列表'},
      {id: 'paymentorder', path: '/order/paymentorder', icon: 'iconfont icon-huankuan1', label: '还款订单'},
      {id: 'loanorders', path: '/order/loanorders', icon: 'iconfont icon-fangkuanshijian', label: '放款订单'},
      {id: 'withholdingorders', path: '/order/withholdingOrders', icon: 'iconfont icon-zidongdaikou', label: '代扣订单'},
      {id: 'rollovertheorder', path: '/order/rollOverTheOrder', icon: 'iconfont icon-zhanqi', label: '展期订单'}
    ]
  },
  {
    id: 'exampless',
    icon: 'iconfont icon-cuishouguanli1',
    label: '审核管理',
    submenu: [
      {id: 'creditamount', path: '/audit/creditamount', icon: 'iconfont icon-shenhe', label: '减免金额审核'},
      {id: 'offlinepayment', path: '/audit/offlinepayment', icon: 'iconfont icon-xianxia', label: '线下还款审核'},
      {id: 'offlinepaymentp', path: '/audit/offlinepaymentp', icon: 'iconfont icon-xianxia', label: '线下还款补单'}
    ]
  },
  {
    id: 'version',
    icon: 'iconfont icon-cuishouguanli1',
    label: '催收管理',
    submenu: [
      {id: 'collection', path: '/collection/collectionOrder', icon: 'iconfont icon-cuishouguanli', label: '催收订单'},
      {id: 'collectiongroup', path: '/collection/collectiongroup', icon: 'iconfont icon-fenzu', label: '催收分组'},
      {id: 'collectionsd', path: '/collection/collectionSd', icon: 'iconfont icon-fenpei1', label: '催收人员分配'}
    ]
  },
  {
    id: 'version',
    icon: 'iconfont icon-qudao',
    label: '渠道列表',
    path: '/channel_list'
  },
  {
    id: 'examplesss',
    icon: 'iconfont icon-tongji',
    label: '数据统计',
    submenu: [
      {id: 'daychannelcount', path: '/count/daychannelcount', icon: 'iconfont icon-fenpei', label: '每日渠道统计'},
      {id: 'dayloancount', path: '/count/dayloancount', icon: 'iconfont icon-stat_icon', label: '每日放款统计'},
      {id: 'dayrefundcount', path: '/count/dayrefundcount', icon: 'iconfont icon-tongji1', label: '每日还款统计'},
      {id: 'daychannelrefundcount', path: '/count/daychannelrefundcount', icon: 'iconfont icon-yingbi', label: '每日渠道还款统计'},
      {id: 'recyclecount', path: '/count/recyclecount', icon: 'iconfont icon-cuishoutongji', label: '每日催收回收统计'},
      {id: 'performance', path: '/count/performance', icon: 'iconfont icon-jixiaokaohe1', label: '催收绩效考核'},
      {id: 'thirdparty', path: '/count/thirdparty', icon: 'iconfont icon-jixiaokaohe1', label: '第三方消耗账单列表'},
      {id: 'platform', path: '/count/platform', icon: 'iconfont icon-jixiaokaohe', label: '每日平台统计'}
    ]
  }

]
export default menus
