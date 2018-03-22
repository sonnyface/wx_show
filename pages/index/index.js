//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    name:123456,
    lists:[
      'http://p5zdfyr2y.bkt.clouddn.com/p04.jpg',
      'http://p5zdfyr2y.bkt.clouddn.com/p03.jpg',
      'http://p5zdfyr2y.bkt.clouddn.com/p08.jpg',
      'http://p5zdfyr2y.bkt.clouddn.com/p001.jpg',
      'http://p5zdfyr2y.bkt.clouddn.com/p05.jpg',
      'http://p5zdfyr2y.bkt.clouddn.com/pl02.jpg',
      'http://p5zdfyr2y.bkt.clouddn.com/p07.jpg',
      'http://p5zdfyr2y.bkt.clouddn.com/p06.jpg',
      'http://p5zdfyr2y.bkt.clouddn.com/p09.jpg'
    ],
    banner:[
      'http://p5zdfyr2y.bkt.clouddn.com/banner1.jpg',
      'http://p5zdfyr2y.bkt.clouddn.com/banner2.jpg',
      'http://p5zdfyr2y.bkt.clouddn.com/banner3.jpg',
      'http://p5zdfyr2y.bkt.clouddn.com/banner4.jpg',
      'http://p5zdfyr2y.bkt.clouddn.com/banner5.jpg'  
    ]     
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },  
  //获取地图
  getLocation:function(){
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: 33.740681,
          longitude: 113.307418,
          scale: 28,
          name:'刘亚楼--泰芒了饮品店'
        })
      }
    })
  },
  //拨打电话
  makePhoneCall01:function(){
    wx.makePhoneCall({
      phoneNumber: '15137522873' //仅为示例，并非真实的电话号码
    })  

  },
    //图片预览
  previewImage:function(e){
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.lists // 需要预览的图片http链接列表  
    })  
  },
  // 轮播图预览
  swiper(e){
    console.log(e);
    var srcImg = e.target.dataset.src;
    wx.previewImage({
      current: srcImg, // 当前显示图片的http链接  
      urls: this.data.banner // 需要预览的图片http链接列表  
    })  
  },
  onLoad: function () {    

  },
  changeName: function (e) {
    // sent data change to view
    this.setData({
      name: 'MINA'
    })
  }
})
