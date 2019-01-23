import api from '/util/api.js';
let app = getApp();

Page({
  data: {

    indicatorDots2: false,
    autoplay2: true,
    interval2: 1000,
    vertical2:true,
   
    indicatorDots3: false,
    autoplay3: true,
    interval3: 1000,
    indexNav:[
         {
           img:'../../image/index/nav1.png',
           text:'景区门票',
           url:'/pages/park/list'
         },
         {
           img:'../../image/index/nav2.png',
           url:'/pages/park/list',
           text:'酒店住宿'
         },
         {
           img:'../../image/index/nav3.png',
           url:'/pages/park/list',
           text:'刷脸入园'
         },
         {
           img:'../../image/index/nav4.png',
           url:'/pages/park/list',
           text:'导游导览'
         },
         {
           img:'../../image/index/nav5.png',
           url:'/pages/park/list',
           text:'游记攻略'
         },
         {
           img:'../../image/index/nav6.png',
           url:'/pages/park/list',
           text:'信用免押'
         },
         {
           img:'../../image/index/nav7.png',
           url:'/pages/park/list',
           text:'特产商品'
         },
         {
           img:'../../image/index/nav8.png',
           url:'/pages/strategy/list',
           text:'信息资讯'
         }
    ],
    tjBox:[
      {
        img:'../../image/index/index01.jpg',
        text:'梦幻武当演出',
        yuanjia:'155',
        xianjia:'138'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'hello',
        yuanjia:'155',
        xianjia:'138'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'梦幻武当演出',
        yuanjia:'155',
        xianjia:'138'
      }
    ],

    sign: 1,  
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
  }, 
  clickNav(event) {
    //console.log(e)  有想深入了解e代表什么的话，可以打印出来看看
    console.log(event)
    this.setData({
      sign: event.target.dataset.num
    })
  },
  async onLoad(){
    let that = this;
    let res = await app.httpRequest({
      url:app.config.apiHost+api.main.index.allInfo,  
      data:{modelCode:'wap_index',corpCode:'cgb2cfxs'}
    });
    console.log(res)
    that.setData({
      ...res.data
    })
    console.log("head_carousel",that.data.head_carousel);
  }
})


