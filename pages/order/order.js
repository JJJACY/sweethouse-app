import api from "../../global/request/api"
const app = getApp()
// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderData:[],
    total: 0,
    statu:'',
    address: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // let orderData = JSON.parse(options.data)
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let id = app.globalData.user_id
    wx.request({
      url: api.wxOrder + "/" + id,
      success: res=>{
        console.log(res)
        this.setData({
          orderData: res.data.data
        })
      },
      fail: err=>{
        console.log(err)
      }
    })
  },

  handleDetail(e){
    let id = e.currentTarget.dataset.id
    // console.log(id)
    wx.navigateTo({
      url:"../../pages/orderDetail/orderDetail?id=" + id,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data) {
          console.log(data)
        }
      },
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'id' })
      }
    })
  }
})