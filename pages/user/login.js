import api from '/util/api.js';
let app = getApp();
Page({
  data: {
  },
  async formSubmit(event){

   console.log('event',event)
   
    let loginName=event.detail.value.loginName;
    let loginPass=event.detail.value.loginPass;

    let res = await app.httpRequest({
      url:app.config.apiHost+api.member.login.main,  
      data:{loginName:loginName,loginPass:loginPass}
    });
    console.log("res",res);
    let leaguerId=res.data.leaguerId;
    let token=res.data.token; 
    console.log("leaguerId",leaguerId);
    console.log("token",token);
    my.setStorageSync({
      key:'loginInfo',
      data: {
        loginTime: new Date().getTime(),
        leaguerId:leaguerId,
        token:token
      }
    })
  }
});
