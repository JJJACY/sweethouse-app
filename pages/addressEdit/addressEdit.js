// addressEdit.js
const app = getApp()

Page({
  data(){
    addressDetail:""
  },
  onLoad(){

  },
  handleInput(e){
    let value = e.detail.value;
    console.log(value)
  },
  handleclear(e){
    console.log(e)
    this.setData({
      addressDetail: ""
    })
  },
  handleConfirm(){
    console.log('确认')
    
  },
  handledelete(){
    console.log('删除')
  }
})