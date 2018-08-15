import filterComponent from '../components/dropdown';
import searchComponent from '../components/search';
// 日期
import dateIntervalComponent from '../components/dateInterval';
Page({
  ...filterComponent,
  ...searchComponent,
  ...dateIntervalComponent, // 日期模块
  data: {
    sortKey:'',
    labelIdName:'',
    labelId:'',
    labelOriginName: '全部筛选',
    // 传入component起始日期
    dateOption: {
      startDate: '2018-08-15',
      endDate: '2018-08-16',
      limitDate: ['2018-08-15', '2018-09-30']
    },
    // 搜索词
    searchData:{
      searchName: ''
    },
    // 列表筛选数据
    dropdownSelectData: {
      active: false,
      selectedNav: 0,
      listData: [
        {
          nav: '全部筛选',
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
          nav: '默认标题',
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
    // 列表数据
    moduleListData: {
      "module":"hotel",
      "total":8,"rows":[{"id":3,"name":"众晶太极湖国际酒店","goodsCode":"hotel2018042315454496","supplyId":3,"supplyName":"湖北众晶文化旅游开发有限公司众晶国际酒店","linkImg":"http://www.wdwds.com/static//fileupload/20180423/20180423153640jsqeu3.jpg","linkMobileImg":"http://www.wdwds.com/static//fileupload/20180423/20180423153730yuq8h9.jpg","goodsLevel":"5","enabled":"T","regionCode":"10001","areaName":"湖北-十堰市-丹江口市","latitudeLongitude":"111.085093,32.532305","summary":"武当山众晶太极湖国际酒店位于武当山太极湖生态文化旅游区，占地面积329亩，总建筑面积近6万平方米。\r\n　　酒店由湖北众晶集团有限公司投资兴建，致力将酒店板块打造成国际高端品牌的连锁酒店。酒店拥有各类豪华客房，每间客房都充满浓郁的东方风情，于简约中彰显奢华尊贵。尊贵典雅的中餐厅、艺术时尚的西餐厅和充满亚洲风情的特色餐厅，可满足您不同的饮食需求。 国际会议中心可同时容纳800人的会议和培训，配备先进的音响视频系统，另有12间会议室。多样的会议形式、齐全的设施设备、专业的宴会服务，可满足您不同类型的会议需求。酒店另设有迷你高尔夫、网球场、室内、外游泳池、养生药池、KTV、养生足浴、SPA、高级会所等多种康体娱乐项目，为您商务接待或旅游休闲活动提供高档、舒适、便捷的环境。这里是您旅游度假的上选！","orderNotice":"<p>•入住时间：14:00以后      离店时间：12:00以前</p><p>酒店允许携带儿童入住<br/>•不接受18岁以下客人在无监护人陪同的情况下入住<br/>若住客超过房型限定人数，可能需收取加人费用，具体费用取决于酒店的规定 <br/>附加费用不会自动计算在总费用中，需要单独直接向酒店支付<br/>•加床政策、儿童人数请参见您选定的客房政策，若超过房型限定人数，可能需收取额外费用。提出的任何要求均需获得酒店的确认，所有服务详情以酒店的告知为准。</p><p>•不可携带宠物.</p>","content":"<p style=\"margin: 0px 0px 15px; padding: 0px; line-height: 24px; text-indent: 2em; color: rgb(51, 51, 51); font-family: arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);\">武当山众晶太极湖国际酒店由湖北众晶集团有限公司投资兴建，湖北众晶集团是以金融为基础、投资为主导的多元化产业发展的投资集团公司，致力将酒店板块打造成国际高端品牌的连锁酒店。</p><p style=\"margin: 0px 0px 15px; padding: 0px; line-height: 24px; text-indent: 2em; color: rgb(51, 51, 51); font-family: arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);\">酒店主体建筑依山傍水，外观采用弧形设计，给人以延展、滂沱大气的视觉美感;客房、健身房、温泉配套区及别墅等附属建筑与其遥相呼应，亭、台、桥、榭等建筑装饰创造出能与自然环境融为一体的生态园林意境。建筑风貌展现古今相融，充分体现了武当圣地的神韵和道教文化的底蕴。</p><p><br/></p>","sortNo":1001,"priceShow":665,"systemCode":"","salesNum":256,"addr":" 武当山旅游特区太极湖新区环湖路特6号","hotelRooms":[{"modelName":"众晶太极湖国际酒店豪华套房","modelCode":"RM2018042317411464","externalCode":"","supplyId":3,"supplyName":"湖北众晶文化旅游开发有限公司众晶国际酒店","hotelId":3,"hotelName":"众晶太极湖国际酒店","linkImg":"http://www.wdwds.com/static//fileupload/20180423/201804231740581f7ir7.jpg","linkMobileImg":"http://www.wdwds.com/static//fileupload/20180423/201804231741061sq3my.jpg","priceModel":"0","priceShow":1598,"price":1398,"bedType":"0","modelDetail":"建筑面积: 118平方米\n楼层: 3-5层\n床型： 1张2米双人床\n可加床： RMB 220/床/间夜\n该房可无烟处理\n便利设施: 书桌、多种规格电源插座、房内保险箱、空调、闹钟、针线包、220V电压插座、遮光窗帘、手动窗帘、床具:鸭绒被、沙发、电子秤、房间内高速上网、客房WIFI覆盖免费\n浴室： 拖鞋、24小时热水、免费洗漱用品(6样以上)、浴衣、独立淋浴间、吹风机、电热水器","buildingArea":"118","enabled":"T","ratecodes":[{"name":"众晶太极湖豪华套房渠道","rateCode":"hotel2018042610122597","modelCode":"RM2018042317411464","ruleBuyCode":"0180425154957401","ruleBuyName":"酒店通用购买规则","ruleSoldCode":"1180425162729826","ruleSoldName":"酒店通用售后规则","productPriceCode":"1180426092645908","productPriceName":"众晶太极湖豪华套房长期价格","saleBeginDate":"2018-04-23 00:00:00","saleEndDate":"2018-04-30 00:00:00","outCode":"","corpCode":"cgb2cfxs","rateName":"众晶太极湖豪华套房日价格","aliasName":"众晶太极湖豪华套房","modelName":"众晶太极湖国际酒店豪华套房","externalCode":"","supplyId":3,"supplyName":"湖北众晶文化旅游开发有限公司众晶国际酒店","hotelId":3,"hotelName":"众晶太极湖国际酒店","linkImg":"http://www.wdwds.com/static//fileupload/20180423/201804231740581f7ir7.jpg","linkMobileImg":"http://www.wdwds.com/static//fileupload/20180423/201804231741061sq3my.jpg","currentPrice":1398,"priceShow":1598,"price":1398,"salesCanal":"APP,WAP,PC","bedType":"0","modelDetail":"建筑面积: 118平方米\n楼层: 3-5层\n床型： 1张2米双人床\n可加床： RMB 220/床/间夜\n该房可无烟处理\n便利设施: 书桌、多种规格电源插座、房内保险箱、空调、闹钟、针线包、220V电压插座、遮光窗帘、手动窗帘、床具:鸭绒被、沙发、电子秤、房间内高速上网、客房WIFI覆盖免费\n浴室： 拖鞋、24小时热水、免费洗漱用品(6样以上)、浴衣、独立淋浴间、吹风机、电热水器","buildingArea":"118","enabled":"T"},{"name":"众晶太极湖豪华套房渠道","rateCode":"hotel2018042610122597","modelCode":"RM2018042317411464","ruleBuyCode":"0180425154957401","ruleBuyName":"酒店通用购买规则","ruleSoldCode":"1180425162729826","ruleSoldName":"酒店通用售后规则","productPriceCode":"1180426092645908","productPriceName":"众晶太极湖豪华套房长期价格","saleBeginDate":"2018-04-23 00:00:00","saleEndDate":"2018-04-30 00:00:00","outCode":"","corpCode":"cgb2cfxs","rateName":"众晶太极湖豪华套房渠道","aliasName":"众晶太极湖国际酒店家庭复式套房","modelName":"众晶太极湖国际酒店豪华套房","externalCode":"","supplyId":3,"supplyName":"湖北众晶文化旅游开发有限公司众晶国际酒店","hotelId":3,"hotelName":"众晶太极湖国际酒店","linkImg":"http://www.wdwds.com/static//fileupload/20180423/201804231740581f7ir7.jpg","linkMobileImg":"http://www.wdwds.com/static//fileupload/20180423/201804231741061sq3my.jpg","currentPrice":1398,"priceShow":1598,"price":1398,"salesCanal":"APP,WAP,PC","bedType":"0","modelDetail":"建筑面积: 118平方米\n楼层: 3-5层\n床型： 1张2米双人床\n可加床： RMB 220/床/间夜\n该房可无烟处理\n便利设施: 书桌、多种规格电源插座、房内保险箱、空调、闹钟、针线包、220V电压插座、遮光窗帘、手动窗帘、床具:鸭绒被、沙发、电子秤、房间内高速上网、客房WIFI覆盖免费\n浴室： 拖鞋、24小时热水、免费洗漱用品(6样以上)、浴衣、独立淋浴间、吹风机、电热水器","buildingArea":"118","enabled":"T"}]}],"countComment":0,"createTime":"2018-04-23 15:45:45","aliasName":"众晶太极湖国际酒店"}],"pages":2,"identified":"id"
    }
  },
  onLoad() {

  },
  // 起始日期
  onSelectDate(e, date, dateName) {
    console.log(date, dateName);
    this.setData({
      ['dateOption.['+dateName+']']: date
    })
  },
  // 搜索
  catchSearchTap(e, searchName) {
    console.log(searchName)
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
    let labelIdNameArr = [];
    const { listData } = this.data.dropdownSelectData;
    listData[parentIndex].data.forEach(function(t, i){
      if(!t.selectedItem) return;
      labelIdArr.push(t.sortList[t.selectedItem].labelId)
      if(t.sortList[t.selectedItem].name !== '全部'){
        labelIdNameArr.push(t.sortList[t.selectedItem].name)
      }
    });
    let labelIdName = labelIdNameArr.length > 0 ? labelIdNameArr.join(',') : this.data.labelOriginName
    this.setData({
      labelId: labelIdArr.join(','),
      labelIdName,
      ['dropdownSelectData.listData['+ parentIndex +'].nav']: labelIdName,
      'dropdownSelectData.active': false
    });
  },

  // 点击遮罩关闭下拉
  catchDropdownBgTap(e) {
    this.setData({
      'dropdownSelectData.active': false
    });
  },
});
