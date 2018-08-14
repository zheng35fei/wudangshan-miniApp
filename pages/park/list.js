import filterComonpent from '../components/dropdown';
Page({
  ...filterComonpent,
  data: {
    sortKey:'',
    labelId:'',
    dropdownSelectData: {
      active: false,
      selectedNav: 0,
      listData: [
        {
          nav: '测试',
          // listType是'sort'： data是一个对象
          listType: 'sort',
          data: [{
              thumb:
                'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '标题文字1',
              selectedItem: '',
              sortList: [{
                labelId:0,
                name:'全部'
              },{
                labelId:1,
                name:'自然景观自然景观自然景观自然景观自然景观'
              },{
                labelId:2,
                name:'12312321321321321321'
              },{
                labelId:3,
                name:'自然景观'
              },{
                labelId:4,
                name:'自然景观'
              },{
                labelId:5,
                name:'自然景观'
              },{
                labelId:6,
                name:'自然景观'
              }]
            },
            {
              thumb:
                'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '标题文字1',
              selectedItem: '',
              sortList: [{
                labelId:7,
                name:'全部'
              },{
                labelId:8,
                name:'自然景观自然景观自然景观自然景观自然景观'
              },{
                labelId:9,
                name:'12312321321321321321'
              },{
                labelId:10,
                name:'自然景观'
              },{
                labelId:11,
                name:'自然景观'
              },{
                labelId:12,
                name:'自然景观'
              },{
                labelId:13,
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
              val: '标题文字2',
              key: 1
            },
            {
              val: '标题图片',
              key: 2
            }
          ],
        }
      ],
    },
  },
  onLoad() {

  },
  // 展开下拉
  onDropdownNavItemTap(e, index) {
    const { selectedNav, active } = this.data.dropdownSelectData;

    let nextactive = !active;
    if (selectedNav !== index) {
      nextactive = true;
    }

    this.setData({
      'dropdownSelectData.active': nextactive,
      'dropdownSelectData.selectedNav': index
    });
  },

  // 选择筛选
  catchDropdownNavItemTap(e, parentIndex, index, filter, title) {
    const { listData } = this.data.dropdownSelectData;
    const data = listData[parentIndex];

    data.selectedItem = index;
    data.nav = title;

    this.setData({
      sortKey: filter,
      'dropdownSelectData.active': false,
      ['dropdownSelectData.listData['+parentIndex+'].selectedItem']: index,
      ['dropdownSelectData.listData['+parentIndex+'].nav']: title
    });
  },

  // 选择分类
  catchDropdownSortItemTap(e, groupIndex, parentIndex, index, sortItem){
    const { listData } = this.data.dropdownSelectData;
    this.setData({
      ['dropdownSelectData.listData['+ parentIndex +'].data['+groupIndex+'].selectedItem'] : index
    })

  },

  // 分类确认
  catchDropdownSortConfirm(e, parentIndex){
    let labelIdArr = [];
    const { listData } = this.data.dropdownSelectData;
    listData[parentIndex].data.forEach(function(t, i){
      labelIdArr.push(t.sortList[t.selectedItem].labelId)
    });
    this.setData({
      labelId: labelIdArr.join(','),
      'dropdownSelectData.active': false
    })
  },

  // 点击遮罩关闭下拉
  catchDropdownBgTap(e) {
    this.setData({
      'dropdownSelectData.active': false
    });
  },
});
