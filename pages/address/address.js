// address.js
import API from './../../global/request/api.js';
const app = getApp()

Page({
  data: {
    addressData: []
  },
  onLoad: function(){
    this.onShow();
  },
  onShow(){
    let id = app.globalData.user_id;
    if(id){
      wx.request({
        url:API.wxAddress + '/' + id,
        success: res=>{
          console.log(res)
          this.setData({
            addressData: res.data.data
          })
        },
        fail: err=>{
          console.log(err)
        }
      })
    }
    
  },
  handleclick(e){
   console.log(e)
  },
  handleEdit(e){
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url:"../../pages/addressEdit/addressEdit"
    })
  },
  handleCreate(){
    wx.navigateTo({
      url:"../../pages/addressEdit/addressEdit"
    })
  },
  handleDelete(e){
    let id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '提示',
      content: '是否删除该地址',
      success (res) {
        if (res.confirm) {
          wx.request({
            url: API.wxAddress + "/" + id,
            method: 'DELETE',
            success: res=>{
              wx.showToast({
                title: res.data.message,
                icon:'success',
                duration: 2000
              })
              wx.redirectTo({
                url: '/pages/address/address'
              })
            }
          })
        } 
      }
    })
  }
})