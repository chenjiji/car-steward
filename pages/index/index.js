// map.js
Page({
  data: {
    mapMarkets: [
      {
        id: 1,
        latitude: 23.099994,
        longitude: 113.324520,
        name: 'T.I.T 创意园'
      },
      {
        id: 2,
        latitude: 24.099994,
        longitude: 116.324520,
        name: '我的位置'
      }
    ]
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
    wx.vibrateShort({
      success: () => {
        wx.showToast({
          title: 'success'
        })
      },
      fail: () => {
        wx.showToast({
          title: 'fail'
        })
      }
    })
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
    console.log(this.mapCtx)
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  }
})