Page({
  data: {
    order:1,
    orderList:[
      {
        kind:'景区',
        status:'0',
        data:'2018-08-14',
        price:'200',
        title:'蹦极（武当山快乐谷旅游区）',
        num:'1',
        url:'/pages/order/detail'
      },
      {
        kind:'酒店',
        status:'0',
        data:'2018-08-14',
        price:'300',
        title:'酒店酒店酒店酒店',
        num:'2',
        url:'/pages/order/detail'
      }
    ]


  },
  clickOrder(event){
    console.log(event)
    this.setData({
      order: event.target.dataset.num
    })
  },

});
