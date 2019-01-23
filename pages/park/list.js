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
      "module":"news",
      "total":2,"rows":[{"face_img":"http://www.wdwds.com/static//fileupload/20180702/20180702210328k67brt.jpeg","jianjie":"\t\t\t\t\t\t\t","baseCode":"000001","viewNum":42,"createTime":"2018-07-02 21:05:07","author":"武当智慧旅游","name":"只花1分钟，玩转武当山不发愁只花1分钟，玩转武当山不发愁只花1分钟，玩转武当山不发愁只花1分钟，玩转武当山不发愁","link":"","sort":1,"title":"只花1分钟，玩转武当山不发愁","content":"<p style=\"text-align: center;\"><strong>问道武当山</strong></p><p>“问道武当山，养生太极湖”这么响亮的口号你听过了吗？说的就是武当山风景区。这里不仅是无数道家高人毕生以求借此仙山灵气成仙的圣境，也是历代皇帝异常重视的皇家庙宇。到了现在，则是我们带着对家人美好的愿望，上山问道祈福，洗涤身心的所在。由于景区太大，很多第一次去的游客在累到吐血的同时并没有把景区玩透彻，部分去过了多次的游客依旧表示我很方。那么如何在“车如流水马如龙”的人潮中速速玩转武当？Follow me，这篇攻略在手，从此，再也不用担心一个人搞不定大武当了。</p><p><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180702/201807022036319wo63c.jpeg\"/></p><p>一、武当山有什么魅力？</p><p>1.武当山有着规模宏大、气势雄伟的古建筑群。现存较完好的古建筑有129处，庙房1182间，犹如中国古代建筑成就的展览。它是我国著名的道教圣地，太极拳的发源地。在这里，可以通过亲手触摸古老的建筑，感受道教历史文化的厚重。</p><p><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180702/20180702203712vfi53k.jpg\"/></p><p>2.武当山凭借幽深的峡谷、陡峭的山峰、巧夺天工的建筑，获得众多导演的青睐，成为众多电影电视剧的取景地。张纪中版《倚天屠龙记》,杨幂和赵文卓版的《大武当》,成龙和贾登·史密斯演的《功夫梦》...... 来这里，圆你一个电影梦</p><p><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180702/20180702205110hlpovn.jpg\"/></p><p>3.武当山是道家的修仙场所，气候凉爽，环境清幽，是中国十大避暑胜地之一。“踏入武当景远幽，六月炎夏变成秋”，再也没有字句能比这句诗更好的表现武当山的夏季了。</p><p>&nbsp;</p><p><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180702/20180702204054mtaokj.jpg\"/></p><p>二、带你撩开武当山面纱</p><ol class=\" list-paddingleft-2\"><li><p>武当山在哪儿？</p></li></ol><p>&nbsp;</p><p><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180702/201807022041326o5ef6.jpg\"/></p><p>武当山景区地处湖北省西北部十堰市境内。东接历史名城襄阳市，西靠车城十堰，南依原始森林神龙架临区，北临亚洲第一大人工淡水湖丹江口水库（丹江口水库也是国家世纪工程——南水北调中线水源地）。</p><p><br/></p><p>2.怎么到武当山？</p><p>武当山交通相当的便利，可以通过乘坐飞机，火车，汽车交通工具抵达，具体路线如下。</p><p>坐飞机</p><p>武当山机场位于十堰市白浪经济技术开发区方块村附件，地处十堰城区和武当山旅游经济特区之间。机场距离武当山景区18公里，目前已开通全国大部分省会城市航线。通航城市有：<a href=\"https://baike.baidu.com/item/%E5%8C%97%E4%BA%AC/128981\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">北京</a>、<a href=\"https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7/114606\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">上海</a>、<a href=\"https://baike.baidu.com/item/%E5%B9%BF%E5%B7%9E/72101\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">广州</a>、<a href=\"https://baike.baidu.com/item/%E6%AD%A6%E6%B1%89/106764\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">武汉</a>、<a href=\"https://baike.baidu.com/item/%E6%9D%AD%E5%B7%9E/147639\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">杭州</a>、<a href=\"https://baike.baidu.com/item/%E8%A5%BF%E5%AE%89/121614\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">西安</a>、<a href=\"https://baike.baidu.com/item/%E6%B7%B1%E5%9C%B3\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">深圳</a>、<a href=\"https://baike.baidu.com/item/%E5%A4%A9%E6%B4%A5/132308\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">天津</a>、<a href=\"https://baike.baidu.com/item/%E6%98%86%E6%98%8E\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">昆明</a>、<a href=\"https://baike.baidu.com/item/%E9%83%91%E5%B7%9E\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">郑州</a>、兰州、<a href=\"https://baike.baidu.com/item/%E9%87%8D%E5%BA%86/23586\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">重庆</a>、<a href=\"https://baike.baidu.com/item/%E5%A4%A7%E8%BF%9E/152852\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">大连</a>、<a href=\"https://baike.baidu.com/item/%E5%8E%A6%E9%97%A8\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">厦门</a>、<a href=\"https://baike.baidu.com/item/%E6%B5%B7%E5%8F%A3/5775\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">海口</a>、<a href=\"https://baike.baidu.com/item/%E7%9F%B3%E5%AE%B6%E5%BA%84/154997\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">石家庄</a>、<a href=\"https://baike.baidu.com/item/%E5%8D%97%E5%AE%81/156452\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">南宁</a>、<a href=\"https://baike.baidu.com/item/%E9%93%B6%E5%B7%9D\" target=\"https://baike.baidu.com/item/%E5%8D%81%E5%A0%B0%E6%AD%A6%E5%BD%93%E5%B1%B1%E6%9C%BA%E5%9C%BA/_blank\">银川</a>、成都等往返航线。</p><p>武当山机场到武当山景区的机场大巴2号线：<br/>　　武当山机场发班时间：09：30、13：30、17：30、21：00。<br/> 　　单程50分钟左右。<br/> 　　车票：15元/人。</p><p></p><p>坐火车</p><p>&nbsp;武当山位于汉渝铁路沿线，距离最近的是武当山火车站，稍远一点的是十堰火车站（动车站）。火车站有发往全国各地的列车如北京、上海、广州、武汉、西安、成都、郑州、福州等东西南北各个方向的大中城市。</p><p>下了火车可乘坐出租车或者公交车到达景区。</p><table width=\"0\"><tbody><tr class=\"firstRow\"><td width=\"114\" valign=\"top\" style=\"padding: 0px 7px; border-color: windowtext; border-image-source: none;\"><p>车站</p></td><td width=\"114\" valign=\"top\" style=\"border-left: 0px none rgb(0, 0, 0); border-top-color: windowtext; border-right-color: windowtext; border-bottom-color: windowtext; padding: 0px 7px; border-image-source: none;\"><p>公交车线路</p></td><td width=\"114\" valign=\"top\" style=\"border-left: 0px none rgb(0, 0, 0); border-top-color: windowtext; border-right-color: windowtext; border-bottom-color: windowtext; padding: 0px 7px; border-image-source: none;\"><p>发车时间</p></td><td width=\"114\" valign=\"top\" style=\"border-left: 0px none rgb(0, 0, 0); border-top-color: windowtext; border-right-color: windowtext; border-bottom-color: windowtext; padding: 0px 7px; border-image-source: none;\"><p>票价</p></td><td width=\"114\" valign=\"top\" style=\"border-left: 0px none rgb(0, 0, 0); border-top-color: windowtext; border-right-color: windowtext; border-bottom-color: windowtext; padding: 0px 7px; border-image-source: none;\"><p>耗时</p></td></tr><tr><td width=\"114\" valign=\"top\" style=\"border-top: 0px none rgb(0, 0, 0); border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; padding: 0px 7px; border-image-source: none;\"><p>武当山火车站</p></td><td width=\"114\" valign=\"top\" style=\"border-top: 0px none rgb(0, 0, 0); border-left: 0px none rgb(0, 0, 0); border-right-color: windowtext; border-bottom-color: windowtext; padding: 0px 7px;\"><p>203</p></td><td width=\"114\" valign=\"top\" style=\"border-top: 0px none rgb(0, 0, 0); border-left: 0px none rgb(0, 0, 0); border-right-color: windowtext; border-bottom-color: windowtext; padding: 0px 7px;\"><p>06:00——20:30</p></td><td width=\"114\" valign=\"top\" style=\"border-top: 0px none rgb(0, 0, 0); border-left: 0px none rgb(0, 0, 0); border-right-color: windowtext; border-bottom-color: windowtext; padding: 0px 7px;\"><p>2元</p></td><td width=\"114\" valign=\"top\" style=\"border-top: 0px none rgb(0, 0, 0); border-left: 0px none rgb(0, 0, 0); border-right-color: windowtext; border-bottom-color: windowtext; padding: 0px 7px;\"><p>30分钟</p></td></tr><tr><td width=\"114\" valign=\"top\" style=\"border-top: 0px none rgb(0, 0, 0); border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; padding: 0px 7px; border-image-source: none;\"><p>十堰火车站</p></td><td width=\"114\" valign=\"top\" style=\"border-top: 0px none rgb(0, 0, 0); border-left: 0px none rgb(0, 0, 0); border-right-color: windowtext; border-bottom-color: windowtext; padding: 0px 7px;\"><p>202</p></td><td width=\"114\" valign=\"top\" style=\"border-top: 0px none rgb(0, 0, 0); border-left: 0px none rgb(0, 0, 0); border-right-color: windowtext; border-bottom-color: windowtext; padding: 0px 7px;\"><p>06:00——20:30</p></td><td width=\"114\" valign=\"top\" style=\"border-top: 0px none rgb(0, 0, 0); border-left: 0px none rgb(0, 0, 0); border-right-color: windowtext; border-bottom-color: windowtext; padding: 0px 7px;\"><p>4元</p></td><td width=\"114\" valign=\"top\" style=\"border-top: 0px none rgb(0, 0, 0); border-left: 0px none rgb(0, 0, 0); border-right-color: windowtext; border-bottom-color: windowtext; padding: 0px 7px;\"><p>70分钟</p></td></tr></tbody></table><p>坐汽车</p><p>选择坐汽车的话可以根据实际情况选择先到武汉市、十堰市、或者襄阳市,再从这些地点乘坐大巴车前往武当山。</p><p>3.在武当山玩什么？</p><p><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180702/20180702204735s2j0uw.jpg\"/></p><p></p><p>对于第一次来武当山的游客来说，首先要弄明白武当山风景名胜区的组成。整个景区有六大核心景点：玉虚宫、太子坡、金顶、逍遥谷、紫霄、南岩。</p><p></p><p></p><p>玉虚宫曾是武当山最大的宫殿，现在每年的农历三月三都要在这里举行盛大的“三月三”庙会。<br/></p><p>&nbsp;</p><p><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180702/20180702204931tinqup.png\"/></p><p>太子坡是传说中静（净）乐国太子，也就是武当山“祖师爷”真武大帝年轻的时候最初入山修炼的地方。太子坡的美景特色，古人用一句话概括：“一里四道门”、“九曲黄河墙”、“十里桂花香”、“一柱十二梁”。</p><p><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180702/20180702205021753pho.jpeg\"/></p><p>逍遥谷是武当山是武当山景区内目前唯一的水上游览和生态旅游区。这里是《倚天屠龙记》和《功夫梦》拍摄实景地。</p><p><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180702/201807022051568trkvq.jpg\"/></p><p>紫霄宫是武当山保存最完整的宫殿，也是武当山道教协会所在地，每年这里都会举行重大的斋醮法事活动。</p><p></p><p><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180702/20180702205400kny04h.jpg\"/></p><p></p><p></p><p>南岩宫主体建筑依山就势在一块面南的陡岩上凌空而建，类似山西恒山“悬空寺”的风格。景点有两大精华：龙头香和有“绝壁悬宫”之称的天乙真庆宫。</p><p>&nbsp;</p><p><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180702/20180702205505awfnoi.jpg\"/></p><p>金顶景区是武当上的精华景区。坐落于武当山天柱峰，转运殿、太和宫、皇经堂、金殿等建筑分布在海拔1500~1612米的建筑线上。</p><p><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180702/20180702205655qtc01k.jpg\"/></p><p>三、武当山门票早知道</p><ol class=\" list-paddingleft-2\"><li><p>大门票</p><p>&nbsp;武当山景区大门票没有淡旺季之分（含景区交通） ：成人240元/人，学生票120元/人&nbsp;，60岁以上170元/人，70岁以上50元/人，保险5元/人。</p></li><li><p>索道票</p><p>索道票只是针对金顶景区，价格有淡旺季之分的。旺季是指每年公历的2月1至10月31日， 旺季价格往返170元/人。淡季是指每年的11月1至1月31日，淡季价格往返130元/人。营业时间是周一至周五8:00-16:30；周六至周日8:00-17:00 。</p></li><li><p>金顶票</p><p>金顶由武当山道教协会所管辖，进入游玩需要购买小门票。成人27元/人，学生15元/人，60岁以上15元/人，70岁以上免票</p></li><li><p>紫霄票</p><p>紫霄宫是武当山道教协会所在地，进入游玩需要购买小门票成人15元/人，学生10元/人，60岁以上10元/人，70岁以上免票</p></li></ol><p>四、第一次来，行程怎么安排才好？</p><p>武当山1日游览路线推荐：</p><p>关键路径：山门—&gt;金顶—&gt;太子坡—&gt;逍遥谷—&gt;紫霄宫—&gt;南岩宫</p><p>用一天的时间游玩武当山一定要把握好时间，最好是早上7:30赶到武当山游客中心。买票和检票最多用10分钟，乘索道方向观光车用50分钟到琼台停车场，一路走马观花走过300米到索道，乘坐缆车。</p><p>缆车上行收费是90元，坐在上面有一种天地都在脚下的感觉，既刺激又舒适，绝对物有所值。高空游览大概5分钟左右就要下缆车了。下车后可以直奔金顶，近距离观赏武当之巅-天柱峰金殿。金殿可是说是武当山的标志之一，整体由铜制成，阳光下熠熠生辉，景象十分壮观。</p><p>参观完金殿后，从金殿背后下山通道下山，再回到索道，下行80元。乘坐索道回到琼台，乘观光车30分钟左右到太子坡。太子坡有“一里四道门，九曲黄河墙，一柱十二梁，十里桂花香”四大奇景，足以让人回味无穷。</p><p>游玩太子坡后已经是中午了，太子坡附近有很多餐饮店铺，可以选择挑一个农家乐吃午餐。菜品蛮多，不过最有特</p><p>色的还是山间野菜，地地道道的农家风味!</p><p>吃过中餐后，继续从太子坡乘坐观光车前往南岩。沿途经过逍遥谷，紫霄宫，这两处都非常值得前去观赏。逍遥谷是武当山最有意境的地方之一，这里山青水秀，鸟语花香。可以坐闻山间虫鸣阵阵，细听脚下流水潺潺，偶尔还有猕猴前来向人讨食，让人有很放松的感觉。紫霄宫给人的感觉比较厚重，有点像故宫。它是武当山保存比较好的古建筑之一，有四重宫殿，依山叠砌，中轴对称，典型的皇家建筑格局。</p><p>最后乘车前往南岩，欣赏巧夺天工的建筑，建在悬崖上的宫殿-南岩宫。在这里可以喝到甘露茶，烧龙头大香，带给人不一样的游玩体验。游玩南岩宫后，差不多就到下午3点多，可以考虑下山了。一天的时间太短，可能没法游玩全面，不过有这样的经历，也已经不虚此行了。</p><p>&nbsp;</p><p>下午进山的游客，推荐2日游，否则时间上太紧，可能玩不尽兴。</p><p>武当山2日游览行程推荐：</p><p>关键路径：山门—&gt;太子坡—&gt;逍遥谷—&gt;紫霄宫—&gt;乌鸦岭—&gt;南岩宫，夜宿乌鸦岭—&gt; 朝天宫—&gt;金顶—&gt;琼台</p><p>在山下吃过午餐后就可以考虑进山了，买了票过了检票口之后乘坐前往南岩方向的观光车，第一站到太子坡。太子坡是古时候武当弟子练武的地方，整体建筑保存的比较完</p><p>整，红色的围墙，墨绿的琉璃瓦包裹着一条曲折的石阶过道。太子坡有“一里四道门，九曲黄河墙，一柱十二梁，十里桂花香”四大奇景，足以让人回味无穷。</p><p>游玩太子坡后前往逍遥谷和紫霄宫。逍遥谷是武当山最有意境的地方之一，这里山青水秀，鸟语花香。可以坐闻山间虫鸣阵阵，细听脚下流水潺潺，偶尔还有猕猴前来向人讨食，让人有很放松的感觉。紫霄宫给人的感觉比较厚重，有点像故宫。它是武当山保存比较好的古建筑之一，有四重宫殿，依山叠砌，中轴对称，典型的皇家建筑格局。</p><p>最后乘车前往南岩，欣赏巧夺天工的建筑，建在悬崖上的宫殿-南岩宫。在这里可以喝到甘露茶，烧龙头大香。看过南岩宫之后就到傍晚了，此时可以考虑住宿在乌鸦岭。乌鸦岭</p><p>住宿选择比较多，有太极会馆，天禄度假村等。</p><p>&nbsp;&nbsp;&nbsp; 第二天：休息一天之后体力比较充沛，可以重新开始旅程。有2种游览方式可以考虑。</p><p>（1）3点起床，徒步爬山到金顶看日出，因为天黑路况不好，因人而异，约3.5-4.5小时，要求身体好，不怕黑，运气好（日出可能看不到，3点起来先看看天上有没有星星，如果有星星就基本能看到日出，如果没有，就别起了，只能看云海了）。欣赏完金顶之后，去索道乘坐缆车到琼台。游玩琼台之后乘坐观光车直接下山。</p><p></p><p></p><p>（2）早餐后走金顶的方向，游览榔梅祠，然后原路返回乌鸦岭。乘坐观光车到琼台游玩，然后再乘坐缆车到金顶。游玩金顶之后，可以直接走下山通道前往南岩方向，在乌鸦岭乘坐观光车下山。</p><p>Ps：想要看金顶日出的一定要早起，否则自然醒即可。要求体力一定要好，路上全是台阶，至少需要3个小时，因此要提前做好心理准备。</p><p>住宿推荐</p><p>住宿的话景区内可供选择的比较多。金顶景区下面不远处的索道站旁就是琼台宾馆，四星标准；</p><p>紫霄宫旁边天禄度假村三星标准；南岩景区的太极会馆四星标准。</p><p>武当山自古被誉为“亘古无双圣境，天下第一仙山”，小伙伴们，还等什么，快来武当山问道祈福吧！</p><p><br/></p><p><br/></p><p><br/></p><p>\r\n\t\t\t\t\t\t\t</p>","pictures":""},{"face_img":"http://www.wdwds.com/static//fileupload/20180703/20180703204128y5j383.jpg","jianjie":"\t\t\t\t\t\t\t","baseCode":"jq000011","viewNum":7,"createTime":"2018-07-03 20:41:31","author":"零零七","name":"土著游武当土著游武当土著游武当土著游武当土著游武当土著游武当土著游武当土著游武当土著游武当土著游武当土著游武当土著游武当土著游武当","link":"","sort":2,"title":"土著游武当","content":"<p style=\"text-indent: 43px;\"><span style=\"font-family: 宋体; font-size: 21px;\">作为地道的十堰人，我爬武当山不止一次了，但是却从没有感到审美疲劳。对我来说，它一如既往的神秘、新鲜。如果可以的话，我甚至希望可以每个月走一趟武当山。</span></p><p style=\"text-align: center;\"><span style=\"font-family: 宋体; font-size: 21px;\"><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180703/20180703203440d8iljz.jpg\"/></span></p><p style=\"text-indent: 43px;\"><span style=\"font-family: 宋体; font-size: 21px;\">有过武当山旅游的经历，这次我才能把握好时间，让这次行程更加的充实和丰满。我在7点多就已经到了武当山山门口，沿途已经吃过早餐，所以就直奔游客大厅而去。到了之后才发现，游客实在太多了，不过这也是没有办法的事，毕竟大多数上班族都是周末才休息的.</span></p><p style=\"text-align:center\"><span style=\"font-family: 宋体; font-size: 21px;\"><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180703/20180703203514a0fzy9.jpg\"/></span></p><p style=\"text-indent: 43px;\"><span style=\"font-family: 宋体; font-size: 21px;\">游客大厅熙熙攘攘，充斥着来自全国各地的游客。几个导游举着旗子，高喊着集合。无奈大厅里实在太过喧嚣，导游们的声嘶力竭收效甚微。售票窗口排起了长龙，蠕动着前行，慢慢的消磨着我的耐心。</span></p><p><span style=\"font-family: 宋体; font-size: 21px;\">&nbsp;&nbsp;&nbsp; </span><span style=\"font-family: 宋体; font-size: 21px;\">闲来无事便四处张望一番，正好看见有小红帽（景区工作人员）搬了一张海报出来。虽然有着275度近视的眼睛，但是在眼镜的帮助下我还是看清了海报上的字：武当山电子票，微信支付宝扫一扫。电子票我接触的不多，但是还是知道它就是网络购票，效率肯定比排队要高。</span></p><p><span style=\"font-family: 宋体; font-size: 21px;\"><p style=\"text-align: center;\"><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180703/201807032036374grgz5.jpg\"/></p></span></p><p><span style=\"font-family: 宋体; font-size: 21px;\"><span style=\"font-family: 宋体; font-size: 21px;\">&nbsp;&nbsp;&nbsp; 于是，我果断脱离了队伍的末尾，上前微信扫了二位码。经过一番非常简单的操作，我很快就收到了一条短信，说是电子票购买成功了。短信里面有个链接，点了下就跳出了一个二维码。根据海报的指示，我带着手机去了检票口。门口的机器反应非常快，几乎就是瞬间就开了通道。</span></span></p><p style=\"text-align: center;\"><span style=\"font-family: 宋体; font-size: 21px;\"><span style=\"font-family: 宋体; font-size: 21px;\"><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180703/20180703203742ex9jk8.jpg\"/></span></span></p><p style=\"text-indent: 43px;\"><span style=\"font-family: 宋体; font-size: 21px;\">通过了通道，正好旅游车来了，我就直接上了通向南岩的车。此时我看了下手机，大概是7点半，还不算晚。坐旅游车的一路上，安逸使得我昏昏欲睡，几乎没有心情观赏沿途风景。很快旅游车就到了乌鸦岭游客中心，该下车了。</span></p><p style=\"text-indent: 43px;\"><span style=\"font-family: 宋体; font-size: 21px;\">我延路标走向南岩宫一侧路，不多一会儿就走到了南岩宫前。这时的南岩宫，最是好看，在周边翠绿色的衬托下显现出一种庄严的朱红色。和我记忆中褪色的南岩宫不同，他没有露出破落的姿态。南岩宫是古人工匠精神的结晶，很难想象在那时候的条件下，居然能在峭壁上开凿出这样别具一格的宫殿，将自然和人工融合的恰到好处。继续往前走，游梳妆台，这是一条游人不常走的路。走过你会发现你是在山间的栈道和山路中绕着高处的南岩宫绕了一圈，在此期间能看到很多奇伟瑰丽的景观，从不同角度观看南岩也是一种享受。</span></p><p style=\"text-align:center\"><span style=\"font-family: 宋体; font-size: 21px;\"><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180703/201807032038303mmtw4.jpg\"/></span></p><p style=\"text-indent: 43px;\"><span style=\"font-family: 宋体; font-size: 21px;\">大概走了一小时，到达榔梅祠。在这里路与乌鸦岭直上金顶的路重合，真正的登顶之路从这里开始。沿途经过以黄龙洞眼药而驰名的“黄龙洞”、天庭与人间的分界线—朝天宫，在朝天宫分左右清、明神道登顶，清神道较为平缓，明神道顾名思义较早开凿，但沿途经过一、二、三天门，这是一段比较耗费体力的道路。从明神道攀援而上，经过一天门、二天门、三天门的艰苦跋涉，只见金顶紫金城高大的城墙就在身边，雄伟的天门傲视群山，金殿即将跃入眼帘。</span></p><p style=\"text-align: center;\"><span style=\"font-family: 宋体; font-size: 21px;\"><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180703/20180703203905rc2nn3.jpg\"/></span></p><p style=\"text-indent: 43px;\"><span style=\"font-family: 宋体; font-size: 21px;\">这个时候大概12点多了，一路花了三个多小时 ，终于快要见到这个完全由铜制成的宫殿了。众所周知，金殿是武当山的象征，也是武当道教在皇室扶持下走向鼎盛高峰的标志。不过进这个景点是另外收费的，花了我27元大洋。在金殿前，极目四方，八百里武当秀丽风光尽收眼底，群峰起伏犹如大海的波涛奔涌在静止的瞬间，众峰拱拥，八方朝拜的景观神奇地渲染着神权的威严和皇权的至高无上。边上有导游在讲解，我也顺带听了一下。她说金殿是当时中国等级最高的建筑规制，高5.45 米。金殿整体为铜铸，外饰鎏金，结构殿身的立柱、梁枋以及瓦鳞、窗棂、门槛等诸形毕备。各铸件之间严丝合缝，浑然天成。</span></p><p style=\"text-align: center;\"><span style=\"font-family: 宋体; font-size: 21px;\"><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180703/20180703203939utan5n.jpg\"/></span></p><p style=\"text-indent: 43px;\"><span style=\"font-family: 宋体; font-size: 21px;\">看着这座残留着刀削斧凿般痕迹的宫殿，不禁感慨万千。沧海桑田时过境迁，这座饱经风霜的宫殿它依然直挺挺的矗立在我们面前，没有被岁月摧折，这本身就是一种幸运。我甚至在想，几百年前，他会是什么样子呢。这样精巧的做工，完美的设计，即便在我们这个年代，也不是那么容易做到的。天柱峰，武当之巅，此刻才会真正体会到什么是“会当临绝顶，一览众山小”。武当山的云山雾海也这只有在这里才会看得更真切。这座金殿前面还有金钟、玉磬两座保存完好的铜铸亭子，两侧有朝山进香的信士抽签、盖神印的签房和印房，后面是父母殿，据说供奉着真武大帝的父母。我不信鬼神，但是在这里，我还是拜了几拜，为我的家人祈福。常言道，鬼神之说，心诚则灵，此刻我大概是相信的。</span></p><p style=\"text-indent: 43px;\"><span style=\"font-family: 宋体; font-size: 21px;\">在金殿呆了半个小时，我决定离开。走了这么久体力早已快榨干，不太想原路返回，于是决定乘坐缆车下山。沿途经过了太和宫，到了索道口，花费80元坐上了下山的缆车(尴尬小蜂)。高处不胜寒的感觉，在金顶也有体会，但是，只有悬空的时候感觉才会更为强烈。整个身体几乎置身在高空之上，刺激又惊险。惊险的是，会不会突然间缆车掉了，明知道不可能发生的事，却偏偏还是要想，有点可笑了。</span></p><p style=\"text-align:center\"><span style=\"font-family: 宋体; font-size: 21px;\"><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180703/20180703204017irw0jg.png\"/></span></p><p style=\"text-indent: 43px;\"><span style=\"font-family: 宋体; font-size: 21px;\">下了缆车就开始游览琼台。相传，真武大帝在武当山修道升天，被玉皇大帝册封为北极玄天上帝时就在琼台举行的隆重仪式。因此，武当道教认为琼台是真武大帝的受封地，而倍加崇拜。</span></p><p style=\"text-indent: 43px;\"><span style=\"font-family: 宋体; font-size: 21px;\">后面的路实在不想走了，还是坐旅游车好了。旅游车开到了太子坡，进入景点不久，便是依山势修建的长71米的九曲黄河墙。道教思想认为，给道教庙宇布施的道衣、经书、造像、建筑、法器、灯烛、钟磬、斋食、香表者，都可以得到神灵的佑护，称为“九种功德”。因此，九曲黄河墙也是体现道教思想的一种建筑。据说太子坡还是一众武当弟子练功的地方，现在还有没有人练功我就不知道了。</span></p><p style=\"text-indent: 43px;\"><span style=\"font-family: 宋体; font-size: 21px;\">下午三点多继续乘车到逍遥谷，渐行渐深恍然会有世外桃源的感觉。里面绿树成荫，溪水潺潺，偶有猴子前来讨吃的。我想这里多半是仙人隐居的地方，一切充满了灵气。</span></p><p style=\"text-align: center;\"><span style=\"font-family: 宋体; font-size: 21px;\"><img title=\"\" alt=\"\" src=\"http://www.wdwds.com/static//fileupload/20180703/20180703204056oa76zw.jpg\"/></span></p><p style=\"text-indent: 43px;\"><span style=\"font-family: 宋体; font-size: 21px;\">实在走不动， 游玩了逍遥谷，就坐旅游车下了山，至此游玩结束了。&nbsp;&nbsp;&nbsp; </span></p><p><br/></p><p>\r\n\t\t\t\t\t\t\t</p>","pictures":""}],"pages":1,"identified":"id"
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
