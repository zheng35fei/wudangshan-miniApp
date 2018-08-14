Page({
  data: {
    dropdownSelectData: {
      active: false,
      selectedNav: 0,
      listData: [
        {
          nav: '测试',
          // 'filter' || 'sort'
          listType: 'sort' ,
          selectedItem: '',
          data: [
            {
              thumb:
                'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '标题文字1',
            },
            {
              thumb:
                'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '标题图片',
            }
          ],
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
