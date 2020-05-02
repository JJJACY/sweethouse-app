// pages/goods/goods.js
import API from './../../global/request/api.js';
const app = getApp();
Page({
  data: {
    banner:[],
    detail:[],
    skus:[],
    goodsnumber:'',
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    id:'',
    show: false,
    overlay: true
  },
  onLoad: function (options) {
    console.log(options)
    let id = options.id;
    console.log(id)
    this.setData({
      id: id
    })
    this.getData()
  },
  getData(){
    let id = this.data.id
    console.log(id)
    wx.request({
      url: API.wxProduct+'/'+id,
      success:res=>{
        console.log(res)
        this.setData({
          banner: res.data.data.goods.banner,
          detail: res.data.data.goods,
          skus: res.data.data.sku[0]
        })
      },
      fail:err=>{
        console.log(err)
      }
    })
  },
  handldmovecart(){
    wx.switchTab({
      url:"../../pages/cart/cart"
    })
  },
  handleaddcart(){
    this.setData({
      show: true
    })
  },
  handleclose(e){
    this.setData({
      show: false,
      overlay: false
    })
  },
  handlebuy(){
    console.log(456)
  },
  handlechange(e){
    this.setData({
      goodsnumber: e.detail
    })
  },
  handlesubmit(){
    if(this.data.skus.status !== "0"){
      wx.showToast({
        title:'该物品已下架',
        icon:'none',
        duration: 2000
      })
    }
    if(this.data.skus.stock <= "0" ){
      wx.showToast({
        title: '该商品库存不足，正在加急补货中',
        icon: 'none',
        duration: 2000
      })
    }
    let user_id = app.globalData.user_id
    if(!user_id){
      wx.showToast({
        title:'请先登录',
        icon:'none',
        duration: 2000
      })
    }
    wx.showLoading({
      title:'加载中'
    })
    wx.request({
      url: API.wxCart ,
      method: 'POST',
      data:{
        user_id,
        skus_id: this.data.skus.id,
        goodsnumber: this.data.goodsnumber
      },
      success: res=>{
        console.log(res)
        if(res.data.code === 200){
          wx.hideLoading();
        }else{
          console.log(res.data.message)
          wx.hideLoading()
        }
      },
      fail: err=>{
        console.log(err)
        wx.hideLoading()
      }
    })
    wx.switchTab({
      url:"../../pages/cart/cart"
    })
  }
  
})