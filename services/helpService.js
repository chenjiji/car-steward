const shopList = [
  {
    id: 1110, name: '老包修车(顾家庄店)', address: '朝阳其它 红军营东路6号北五环汽配城二层西北角C001', phone: '8008208820', starttime: 8, endtime: 18, serviceArea: [0, 1, 2, 3], logoPath: '../../assets/images/0.jpg', score: 5, longitude: 1, latitude: 1, comments: 10000
  },
  {
    id: 1111, name: '孚艾尔汽车服务中心', address: '四季青 昆明湖南路', phone: '8008208820', starttime: 8, endtime: 14, serviceArea: [0, 1, 2], logoPath: '../../assets/images/1.jpg', score: 4.5, longitude: 1, latitude: 1, comments: 1233
  },
  {
    id: 1112, name: '京车汇汽车贴膜直营连锁店(十八里店南桥店)', address: '十八里店 十八里店南桥往南200米路东', phone: '8008208821', starttime: 8, endtime: 15, serviceArea: [0, 1], logoPath: '../../assets/images/2.jpg', score: 4, longitude: 1, latitude: 1, comments: 458
  },
  {
    id: 1113, name: '海桥世纪(望京店)', address: '望京 望京花家地南里1号楼底商', phone: '8008208822', starttime: 8, endtime: 16, serviceArea: [0], logoPath: '../../assets/images/3.jpg', score: 3.5, longitude: 1, latitude: 1, comments: 7784
  },
  {
    id: 1114, name: '24小时补胎米其林轮胎', address: '望京 广顺南大街北口2号', phone: '8008208823', starttime: 8, endtime: 17, serviceArea: [3], logoPath: '../../assets/images/4.jpg', score: 3, longitude: 1, latitude: 1, comments: 5689
  },
  {
    id: 1115, name: '老包修车(四季青店)', address: '四季青 常青园路南高庄通达公司7号院', phone: '8008208824', starttime: 8, endtime: 18, serviceArea: [2, 3], logoPath: '../../assets/images/5.jpg', score: 2.5, longitude: 1, latitude: 1, comments: 11232
  },
  {
    id: 1116, name: '老包修车(金港店)', address: '朝阳区 东苇路与教导队路交叉口西北200米', phone: '8008208825', starttime: 8, endtime: 19, serviceArea: [1, 2, 3], logoPath: '../../assets/images/6.jpg', score: 2, longitude: 1, latitude: 1, comments: 89814
  },
  {
    id: 1117, name: '京车汇汽车贴膜直营连锁店(来广营店)', address: '望京 来广营西路中德广场京车汇', phone: '8008208826', starttime: 8, endtime: 20, serviceArea: [0, 1, 2, 3], logoPath: '../../assets/images/7.jpg', score: 1.5, longitude: 1, latitude: 1, comments: 223461
  },
  {
    id: 1118, name: '博瑞达汽车贴膜服务中心', address: '大望路 百子湾路11号', phone: '8008208827', starttime: 8, endtime: 21, serviceArea: [2], logoPath: '../../assets/images/8.jpg', score: 1, longitude: 1, latitude: 1, comments: 15485
  },
  {
    id: 1119, name: '天蝎汽车服务', address: '北沙滩 科荟前街9号院1号楼1-1室', phone: '8008208828', starttime: 8, endtime: 22, serviceArea: [2, 3], logoPath: '../../assets/images/9.jpg', score: 0.5, longitude: 1, latitude: 1, comments: 781
  },
  {
    id: 1120, name: '京都CLUB(奥利奥精品二手车)', address: '草桥 草桥东路汽配D区79-80号', phone: '8008208829', starttime: 8, endtime: 23, serviceArea: [1, 2, 3], logoPath: '../../assets/images/10.jpg', score: 3.5, longitude: 1, latitude: 1, comments: 45211
  },
  {
    id: 1121, name: '琪朗龙膜官网授权星级店汽车贴膜', address: '北苑家园 来广营桥红军营东路6号北五环汽配城2F-B017-18-19', phone: '8008208830', starttime: 8, endtime: 24, serviceArea: [1, 3], logoPath: '../../assets/images/11.jpg', score: 4.5, longitude: 1, latitude: 1, comments: 12255
  },
  {
    id: 1122, name: '恩典汽车专业钣金喷漆', address: '草桥 草桥东路恋日一条街C53号', phone: '8008208831', starttime: 8, endtime: 18, serviceArea: [1, 2, 3], logoPath: '../../assets/images/12.jpg', score: 4, longitude: 1, latitude: 1, comments: 785
  },
  {
    id: 1123, name: '三四零一一汽大众服务站', address: '十八里店 十八里店南桥吕家营大街三四零一一汽大众服务站', phone: '8008208832', starttime: 8, endtime: 18, serviceArea: [1], logoPath: '../../assets/images/13.jpg', score: 5, longitude: 1, latitude: 1, comments: 345
  },
  {
    id: 1124, name: '龙兴行汽修(八里桥店)', address: '双桥 管庄京通快速路南双会桥东800米', phone: '8008208833', starttime: 8, endtime: 18, serviceArea: [1, 2], logoPath: '../../assets/images/14.jpg', score: 4.5, longitude: 1, latitude: 1, comments: 5856
  }
]

const getShopList = function (type) {
  let tempList = []
  switch (type) {
    case '0':
      tempList = shopList
      break
    default:
      tempList = []
      break
  }
  return tempList
}

module.exports = {
  getShopList
}