// personalbar.js
const app = getApp()

Page({
  data:{
    userInfo:''
  },
  onLoad: function(){
    const user_id = app.globalData.user_id
    if(!user_id){
      wx.showToash({
        title:'请登录',
        icon:'none',
        duration: 2000
      })
    }else{
      let userInfo = app.globalData.userInfo;
      console.log(userInfo)
      this.setData({
        userInfo: userInfo
      })
    }
    
  }
})