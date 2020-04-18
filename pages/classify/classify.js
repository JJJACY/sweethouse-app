//classify.js
import API from './../../global/request/api.js'
const app = getApp()

Page({
  data: {
    classifyData:[],
    productData:[],
    classifyId: 0,
    loading: true
    
  },
  onLoad: function () {
    this.getData()
  },
  getData(){
    wx.request({
      url: API.wxClassify,
      success: res => {
        this.setData({
          classifyData:res.data.data
        })
      }, fail: err => {
        console.log(err)
      }
    })
  },
  handleclick(e){
    console.log(e)
    let id = e.currentTarget.dataset.id;
    console.log(id)
    wx.request({
      url:API.wxSingleproduct+'/'+id,
      success: res=>{
        console.log(res)
        this.setData({
          productData: res.data.data
        })
      },
      fail: err=>{
        console.log(err)
      },
      complete: res=>{
        if(res.statusCode === 200){
          this.setData({
            loading: false
          })
        }
      }
    })
    // this.data.look = true;
    // console.log(this.data.look)
  },
  handleSingle(e){
    console.log(e)
    wx.navigateTo({
      url:'url:"../../pages/pro/addressEdit"'
    })
  }
})
