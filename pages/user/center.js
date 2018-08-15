let app = getApp();
Page({
  data: {
    sex: ['男', '女'],
    index: 0,
  },
  onLoad() {},
  bindSex(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
});
