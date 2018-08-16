import api from '/util/api.js';
let app = getApp();
Page({
  data: {
    orderStatus:5,
  },
  async clickOrder(e){
    
    let orderStatus=e.target.dataset.num;  
    this.getListData(orderStatus);

  },
  async getListData(orderStatus){
    let that = this;
      
    let storage= my.getStorageSync({
      key: 'loginInfo', // 缓存数据的key
    }); 
    let token=storage.data.token;
    let buyerId=storage.data.leaguerId;
    let res = await app.httpRequest({
      url:app.config.apiHost+api.member.order.pagelist,  
      data:{buyerId:buyerId,currPage:1,pageSize:6, orderStatus: orderStatus},
      headers:{'access-token':token} 
    });

    that.setData({
      ...res.data,
      orderStatus:orderStatus
    })
  },
  async onLoad(){
    this.getListData();
  } 
});
