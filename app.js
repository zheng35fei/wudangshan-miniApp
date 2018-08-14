import util from './util/util.js';
import api from './util/api.js';
App({
  config:{
    apiHost:'http://www.wdwds.com',
    appid:'2018081361012262', 
    item_id:'2018041301000222123460423293',
    category:'ZMSC_4_2_1'     // 支付类别：信用租 || 先享后付
  },
  globalData: {
    userInfo:null,        // 用户信息
    memberInfo:null,      // 会员信息
    mask:false,           // 全局调用遮罩层
    merchantInfo:null,    // 商户信息
  },

  onLaunch(option){
    this.appQuery = option.query;  // 进入query
    this.pageName = option.page;   // 进入页面
  },
  onError(option){
    console.error('launchError', option);
  },

  // 静默授权登录
  async silenceLogin(){
    // 用户支付宝信息(静默方式)
    let {authCode } = await this.getUserInfoSilence();
    console.log(authCode)
    let data = {
      merchantId: this.config.merchantId,
      code: authCode,
      authAppId : this.config.appid
    };
    // 会员信息
    let memberInfo = await this.httpRequest({
      url: this.config.apiHost + '/api/rent/authz/alipayMiniVisiter',
      data,
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'}
    });
    console.log('silenceLogin',memberInfo)
    return new Promise((resolve, reject) => { 
      if(memberInfo){
        resolve(memberInfo)
      }else{
        reject({})
      }
    })
  },

  // 静默授权
  getUserInfoSilence (){
    return new Promise((resolve, reject) => {
      if (this.userInfo) resolve(this.userInfo);
      my.getAuthCode({
        scopes: 'auth_base',
        success: (res) => {
          resolve(res)
        },
        fail: () => {
          reject();
        },
      });
    })
  },

  // 授权登录
  async toLogin(){
    let that = this;
    // 用户支付宝信息
    let userInfo = await this.getUserInfo('auth_user');
    console.log(JSON.stringify(userInfo))
    let data = {
      merchantId: this.config.merchantId,
      code: userInfo.authCode,
      authAppId : this.config.appid
    };
    
    // 会员信息
    let memberInfo = await this.httpRequest({
      url: this.config.apiHost + '/api/rent/authz/alipayMini',
      data,
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'}
    });
    my.setStorageSync({
      key:'loginInfo',
      data: {
        loginTime: new Date().getTime(),
        auth_token: memberInfo.x_auth_token,
        avatar: userInfo.avatar,
        nickName: userInfo.nickName
      }
    })
    // 插入用户信息
    this.userInfo = userInfo;
    this.memberInfo = memberInfo;

    // 是否是从httpRequest方法未登录(requireLogin)跳转进来
    console.log(arguments)
    if(arguments.length > 0){
      this.httpRequest(arguments);
      return false
    }

    // 返回是否登录结果
    return new Promise((resolve, reject) => {
      if(!!memberInfo){
        resolve(true);
      }else{
        resolve(false)
      }
    });
  },

  // 获取用户位置
  getUserLocation(){
    return new Promise((resolve, reject) => {
      my.getLocation({
        cacheTimeout: 0,
        success: (res) => {
          resolve(res)
        },
        fail: (err) => {
          resolve(err)
        }
      })
    });
  },

  // 获取用户信息
  getUserInfo(typeName) {
    return new Promise((resolve, reject) => {
      if (this.userInfo) resolve(this.userInfo);
      
      my.getAuthCode({
        scopes: typeName,
        success: (authcode) => {
        
          my.getAuthUserInfo({
            success: (res) => {
              res.authCode = authcode.authCode;
              res.nickName = res.nickName || '昵称'
              this.userInfo = res;
              resolve(this.userInfo);  // 返回用户信息，authCode
            },
            fail: () => {
              reject({});
            },
          });
        },
        fail: () => {
          reject({});
        },
      });
    });
  },

  // 调用接口方法
  httpRequest(option){
    let that = this;
    let dataType = option.dataType;
    let data = option.data;
    const method = option.method||"GET";
    let headers = option.headers || {'Content-Type':'application/json'}; 
    // 接口要求登录
    if(option.requireLogin){
      // 是否已登录
      if(util.isLogin()){
        headers['x-auth-token'] = my.getStorageSync({key:'loginInfo'}).data.auth_token;
      }else{
        // 未登录状态，去登录方法
        this.toLogin(option);
        return false;
      }
    }
    return new Promise(function (resolve, reject) {
      try{
        my.httpRequest({
          url: option.url,
          data,
          headers,
          method,
          dataType,
          success: function(res) {
            console.log('success',res)
            if(res.error == '14'){
              // 删除登录缓存
              my.removeStorageSync({
                key: 'loginInfo',
              });
            }
            resolve(res.data);
          },
          fail: function(res) {
            console.log('fail',res);
            reject(false);
          }
        });
      }catch(e){
        console.log('catch error',e)
      }
    });
  }
});
