const helpService = require('../../services/helpService')

Page({
  data: {
    tabList: [
      { text: '全部', active: true, type: '0' },
      { text: '加油', active: false, type: '1' },
      { text: '加水', active: false, type: '2' },
      { text: '补胎', active: false, type: '3' },
      { text: '故障', active: false, type: '4' }
    ]
  },
  onShow: function () {
    let shopList = helpService.getShopList('0')
    shopList.forEach(item => {
      let entireStar = Math.floor(item.score)
      let halfStar = item.score - entireStar
      let emptyStar = 5 - Math.ceil(item.score)
      item.starInfo = {
        entireStar: entireStar,
        halfStar: halfStar,
        emptyStar: emptyStar
      }
    })
    this.setData({
      shopList: shopList
    })
  },
  changeType: function (event) {
    this.data.tabList.forEach(item => {
      item.active = event.target.id == item.type
    })
    this.setData({
      tabList: this.data.tabList
    })
  }
})