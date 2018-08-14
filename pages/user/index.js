let app = getApp();
import api from '../../util/api.js';
import util from '../../util/util.js';

Page({
  data: {
    orderTabList: [
      {
        name: '待支付',
        url: '/pages/order/list?orderStatus=0',
        icon: 'icon-daizhifu',
        color: '#f66'
      },
      {
        name: '待消费',
        url: '/pages/order/list?orderStatus=1',
        icon: 'icon-yizhifu1',
        color: '#3c9'
      },
      {
        name: '已完成',
        url: '/pages/order/list?orderStatus=2',
        icon: 'icon-chenggong1',
        color: '#3c9'
      },
      {
        name: '退款',
        url: '/pages/order/list?refundStatus=3',
        icon: 'icon-tuikuan',
        color: '#f66'
      }
    ]
  },
  onLoad() {
    
  },
  async logout(){
    my.confirm({
      title:'确认退出登录？',
      success: (res) => {
        if(!res.confirm) return false;
        my.alert({
          content: '已退出登录!'
        })
      }
    })
  }
});
