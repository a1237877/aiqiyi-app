//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    index_slides:[],
    indicator_dots:true,
    autoplay:true,
    interval:2000,
    duration:1000,
  },
  onLoad(){
    const index_slides = app.globalData.index_slides;
    this.setData({
      index_slides,
    })
  },
  //事件处理函数
  onShow(e){
    this.setData({
      isTap:false
    });
  },
  //事件处理函数
  toSearch(e){
    this.setData({
      isTap:true
    });
    wx.navigateTo({
      url: "../search/search"
    })
  }
})
  