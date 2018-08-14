Page({
  data: {
    images: [
              '../../image/index/index01.jpg',
              '../../image/index/index02.jpg', 
              '../../image/index/index03.png'
            ],
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
    text2: [
              '“2018中国名山赛”5月20日在武当山“开跑”',
              '好消息！《道典武当》大型山水实景演出即将在玉虚宫华丽上演！', 
              '水电费第三方第三方的沉甸甸的'
            ],
    indicatorDots2: false,
    autoplay2: true,
    interval2: 2000,
    vertical2:true,
    images3: [
              {
                img:'../../image/index/index01.jpg',
                text:'2018中国名山赛”5月20日在武当山“开跑”',
                price:140
              },
              { 
                img:'../../image/index/index02.jpg',
                text:'好消息！《道典武当》大型山水实景演出即将在玉虚宫华丽上演！', 
                price:230
              }, 
              { 
                img:'../../image/index/index03.png',
                text:'水电费第三方第三方的沉甸甸的',
                price:540
              }
            ],      
    indicatorDots3: false,
    autoplay3: true,
    interval3: 1000,
    indexNav:[
         {
           img:'../../image/index/nav1.png',
           text:'景区门票'
         },
         {
           img:'../../image/index/nav2.png',
           text:'酒店住宿'
         },
         {
           img:'../../image/index/nav3.png',
           text:'自由行'
         },
         {
           img:'../../image/index/nav4.png',
           text:'武当山369'
         },
         {
           img:'../../image/index/nav5.png',
           text:'美食餐饮'
         },
         {
           img:'../../image/index/nav6.png',
           text:'特产商品'
         },
         {
           img:'../../image/index/nav7.png',
           text:'游记攻略'
         },
         {
           img:'../../image/index/nav8.png',
           text:'新闻资讯'
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
    ticket:[
      {
        img:'../../image/index/index01.jpg',
        text:'梦幻武当演出',
        xianjia:'138',
        buy:'155'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'梦幻武当演出',
        xianjia:'138',
        buy:'155'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'梦幻武当演出',
        xianjia:'138',
        buy:'155'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'梦幻武当演出',
        xianjia:'138',
        buy:'155'
      }
    ],
    hotel:[
      {
        img:'../../image/index/index01.jpg',
        text:'酒店酒店酒店啊啊啊',
        xianjia:'138',
        buy:'155'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'酒店酒店酒店啊啊啊',
        xianjia:'138',
        buy:'155'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'酒店酒店酒店啊啊啊',
        xianjia:'138',
        buy:'155'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'酒店酒店酒店啊啊啊',
        xianjia:'138',
        buy:'155'
      }
    ],
    shop:[
      {
        img:'../../image/index/index01.jpg',
        text:'商品商品商品啊',
        xianjia:'138',
        buy:'155'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'商品商品商品啊',
        xianjia:'138',
        buy:'155'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'商品商品商品啊',
        xianjia:'138',
        buy:'155'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'商品商品商品啊',
        xianjia:'138',
        buy:'155'
      }
    ],
    combo:[
      {
        img:'../../image/index/index01.jpg',
        text:'自由行自由行啊啊',
        xianjia:'138',
        buy:'155'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'自由行自由行啊啊',
        xianjia:'138',
        buy:'155'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'自由行自由行啊啊',
        xianjia:'138',
        buy:'155'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'自由行自由行啊啊',
        xianjia:'138',
        buy:'155'
      }
    ],
    food:[
      {
        img:'../../image/index/index01.jpg',
        text:'美食美食美食啊啊',
        xianjia:'138',
        buy:'155'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'美食美食美食啊啊',
        xianjia:'138',
        buy:'155'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'美食美食美食啊啊',
        xianjia:'138',
        buy:'155'
      },
      {
        img:'../../image/index/index01.jpg',
        text:'美食美食美食啊啊',
        xianjia:'138',
        buy:'155'
      }
    ],
    sign: 1,  
  },
  clickNav(event) {
    //console.log(e)  有想深入了解e代表什么的话，可以打印出来看看
    console.log(event)
    this.setData({
      sign: event.target.dataset.num
    })
  },
})


