//app.js
import API from './global/request/api.js'

App({
  onLaunch: function () {
    // 展示本地存储能力
    let user_id = wx.getStorageSync('user_id');
    let userInfo = wx.getStorageSync('userInfo');
    if(user_id && userInfo){
      this.globalData.user_id = user_id;
      this.globalData.userInfo = userInfo;
      return
    }
    this.login()
  },
  // 登录
  login: function(){
    return new Promise((resolve,reject) =>{
      wx.getSetting({
        success: res=>{
          console.log(res,333)
          if(res.authSetting['scope.userInfo']){
            wx.getUserInfo({
              success: res=>{
                console.log(res,222)
                let userInfo = res.userInfo
                console.log(userInfo,111)
                wx.setStorageSync('userInfo',userInfo);
                wx.login({
                  success: res=>{
                    console.log(res,444)
                    if(res.code){
                      wx.request({
                        url: API.login,
                        method: 'POST',
                        data:{
                          code: res.code,
                          userInfo: userInfo
                        },
                        success: res=>{
                          console.log(res,888)
                          if(res.data.code !== 200){
                            console.log(res.data.message)
                            return
                          }
                          this.globalData.user_id = res.data.data;
                          wx.setStorageSync('user_id',res.data.data);
                          resolve('success')
                        }
                      })
                    }else{
                      console.log('登陆失败！' + res.errMsg)
                    }
                  }
                })
              }
            })
          }else{
            console.log('用户未授权')
          }
        }
      })
    })
  },
  globalData: {
    userInfo: null,
    user_id: null
  }
})