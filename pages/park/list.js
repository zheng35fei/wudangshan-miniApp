Page({
  data: {
    dropdownSelectData: {
      active: false,
      selectedNav: 0,
      listData: [
        {
          nav: '测试',
          // listType是'sort'： data是一个对象
          listType: 'sort' ,
          selectedItem: '',
          data: [{
              thumb:
                'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '标题文字1',
              sortList: [{
                id:0,
                name:'全部'
              },{
                id:1,
                name:'自然景观'
              }]
            }],
        },
        {
          nav: '测试',
          selectedItem: '',
          listType: 'filter' ,
          data: [
            {
              title: '标题文字2',
            },
            {
              title: '标题图片',
            }
          ],
        },
      ],
    },
  },
  onLoad() {},
});
