// addressEdit.js
import API from './../../global/request/api.js';
const app = getApp()

Page({
  data:{
    addressDetail:"",
    info:{
      name:'',
      located:'',
      phone:'',
      descript:'',
      default:''
    }
  },
  onLoad(){

  },
  changeName(e){
    console.log(e)
    let info = this.data.info;
    console.log(info)
    info.name = e.detail.value;
    this.setData({ info })
  },
  changeTel(e){
    let info = this.data.info;
    info.phone = e.detail.value;
    this.setData({info})
  },
  changePosition(e){
    let info = this.data.info;
    info.located = e.detail.value;
    this.setData({info})
  },
  changeDefault(e){
    let info = this.data.info;
    info.default = e.detail.value;
    this.setData({info})
  },
  handleInput(e){
    console.log(e,111)
    let info = this.data.info
    info.descript = e.detail.value
    this.setData({info})
  },
  handleclear(e){
    console.log(e)
    this.setData({
      descript: ""
    })
  },
  handleConfirm(){
    let info = this.data.info
    let user_id = app.globalData.user_id;
    console.log(user_id)
    if(!user_id){
      wx.showToast({
        title:'请先登录',
        icon:'none',
        duration: 2000
      })
    }else if(!info.name){
      wx.showToast({
        title:'请填写收货人姓名',
        icon:'none',
        duration: 2000
      })
    }else if(!info.phone){
      wx.showToast({
        title:'请填写收货人电话',
        icon:'none',
        duration: 2000
      })
    }else if(!(/^1[3456789]\d{9}$/.test(info.phone))){
      wx.showToast({
        title: '请填写正确的手机号',
        icon: 'none',
        duration: 2000
      })
    }else if(!info.located){
      wx.showToast({
        title:'请填写收货区域',
        icon:'none',
        duration: 2000
      })
    }else if(!info.default){
      wx.showToast({
        title:'请填是否默认',
        icon:'none',
        duration: 2000
      })
    }else if(!info.descript){
      wx.showToast({
        title:'请填写收货详细地址',
        icon:'none',
        duration: 2000
      })
    }
    let params ={
      user_id,
      name:info.name,
      phone:info.phone,
      located: info.located,
      descript: info.descript
    }
    wx.request({
      url: API.wxAddress, 
      method: 'POST',
      data: params,
      success: res=>{
        if(res.data.code === 200){
          wx.showToast({
            title:'res.data.message',
            icon:'none',
            duration: 2000
          })
        }else{
          wx.showToast({
            title:'res.data.message',
            icon:'none',
            duration: 2000
          })
        }
      },
      fail: err=>{
        console.log(err)
      }
    })
  },
  handledelete(){
    console.log('删除')
  }
})