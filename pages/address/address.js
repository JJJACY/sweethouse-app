// address.js
const app = getApp()

Page({
  data: {
    items: [
      { name: 'USA', value: '美国' , checked: 'true' },
      { name: 'CHN', value: '中国'},
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ]
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  handleEdit(){
    wx.navigateTo({
      url:"../../pages/addressEdit/addressEdit"
    })
  },
  handleCreate(){
    wx.navigateTo({
      url:"../../pages/addressEdit/addressEdit"
    })
  }
})