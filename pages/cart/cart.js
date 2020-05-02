// pages/cart/cart.js.js
import API from './../../global/request/api.js';
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    checked: false,
    empty: true,
    cartData:[],
    totalArr:[],
    all: false,
    total: 0
  },
  onShow: function () {
    let id = app.globalData.user_id;
    if(id){
      wx.request({
        url: API.wxCart + "/" + id,
        success: res=>{
          console.log(res)
          if(res.data.code === 200){
            if(res.data.data.length){
              this.setData({
                cartData: res.data.data,
                empty: false
              })
              
            }else{
              this.setData({
                cartData: res.data.data,
                empty: true
              })

            }
          }else{
            console.log(res.data.message)
          }
        },
        fail: err=>{
          console.log(err)
        }
      })
    }
  },
  Change(e){
    console.log(e)
    this.setData({
      totalArr: e.detail
    })
    this.Count();
  },
  Count(){
    let cartData =this.data.cartData;
    let value = this.data.totalArr;
    console.log(value)
    let total = 0;
    value.forEach(data=>{
      let order = cartData.find((item)=>{
        console.log(item.id,data)
        return item.id == data
      })
      if(order){
        let all = order.goodsnumber * order.price
        total += all
      }
    })
    this.setData({
      total
    })
  },
  countAll(e){
    let cartData =this.data.cartData;
    let value = this.data.totalArr;
    let all = !this.data.all;
    if(all){
      cartData.forEach( arr=>{
        value.push(arr.id)
      })
    }else{
      value = []
    }
    console.log(value)
    this.setData({
      all,value
    })
    console.log(this.data.totalArr)
    this.Count()
  },
  handlesubmit(){
    let cartData = this.data.cartData;
    let totalArr = this.data.totalArr;
    if(!totalArr.length){
      wx.showToast({
        title:'请选择商品',
        icon:'none',
        duration: 2000
      })
      return
    }
    let value = totalArr.map(data=>{
      return cartData.find((item)=>{
        return item.id === data
      })
    })
    this.setData({
      totalArr:[]
    })
    value = JSON.stringify(value)
    console.log(value)
    wx.navigateTo({
      url: '/pages/order/order'
    })
  }
})