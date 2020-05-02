// pages/orderDetail/orderDetail.js
import api from "../../global/request/api"
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    image_url:'',
    phone:'',
    located:'',
    descript:'',
    price:'',
    count:'',
    created_time:'',
    verse:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.user_id)
    console.log(options)
    let id = options.id
    wx.request({
      url: api.wxSingleorder + '/' + id,
      success: res=>{
        console.log(res.data.data)
        this.setData({
          name: res.data.data[0].name,
          image_url:res.data.data[0].image_url,
          phone:res.data.data[0].phone,
          located:res.data.data[0].located,
          descript:res.data.data[0].descript,
          price:res.data.data[0].price,
          count: res.data.data[0].count,
          created_time: res.data.data[0].created_time,
          verse: res.data.data[0].verse
        })
      },
      fail: err=>{
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})