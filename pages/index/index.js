//index.js
//获取应用实例
import API from './../../global/request/api.js'
const app = getApp()


Page({
  data: {
    bannerData: [],
  },
  
  //事件处理函数
  onLoad: function () {
    this.getData()
  },
  getData(){
    wx.request({
      url: API.wxBanner,
      success: res=>{
        this.setData({
          bannerData: res.data.data
        })
      },fail: err=>{
        console.log(err)
      }
    })
  },
  onSearch: function (){
    console.log(123)
  },
  onCancel: function (){
    console.log(456)
  }
})
