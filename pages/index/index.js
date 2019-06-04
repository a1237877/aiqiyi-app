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
    hot_data:[],
    news_lists:[]
  },
  onLoad(){
    const index_slides = app.globalData.index_slides;
    const hot_data=app.globalData.hot_data;
    const news_lists = app.globalData.news_lists;
    this.setData({
      index_slides,
      hot_data,
      news_lists
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
  