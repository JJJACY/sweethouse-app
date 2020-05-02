//classify.js
import API from './../../global/request/api.js';
const app = getApp();

Page({
  data: {
    classifyData:[],
    productData:[],
    classifyId: 0,
    loading: true,
    see: false  
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
    let id = e.currentTarget.dataset.id;
    wx.request({
      url:API.wxSingleproduct+'/'+id,
      success: res=>{
        console.log(res)
        this.setData({
          productData: res.data.data
        })
        // console.log(id,this.data.productData[0].classify_id)
        if( id == this.data.productData[0].classify_id){
          this.setData({
            see: false,
          })
        }else{
          this.setData({
            see: true
          })
        }
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
  },
  handleSingle(e){
    console.log(e)
    let id = e.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url:"../../pages/goods/goods?id="+id
    })
  }
})
