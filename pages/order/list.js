Page({
  data: {
    order:1,
    allOrder:[
      {
        find:'景区',
        status:'0',
        data:'2018-08-14',
        price:'200',
        title:'蹦极（武当山快乐谷旅游区）',
        num:'1'
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
