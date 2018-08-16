import api from '/util/api.js';
let app = getApp();
Page({
  data: {
 
  },
  async onLoad(e) {
    console.log("e",e);
    
    let buyerId=e.buyerId;
    let orderNo=e.orderNo;
    let storage= my.getStorageSync({
      key: 'loginInfo', // 缓存数据的key
    }); 
    let token=storage.data.token;
    let res = await app.httpRequest({
      url:app.config.apiHost+api.member.order.detail,  
      data:{leaguerId:buyerId,orderNo: orderNo},
      headers:{'access-token':token} 
    });

    this.setData({
      ...res.data,
    })
    console.log("data",res.data);
  },
});
