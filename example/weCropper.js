import weCropper from '../src/weCropper.core.js'

const data = {
  id: 'cropper',
  width: 600,
  height: 600,
  minScale: 1,
  maxScale: 2.5
}

Page({
  data,
  touchStart (e) {
    this.wecropper.touchStart(e)
  },
  touchMove (e) {
    this.wecropper.touchMove(e)
  },
  touchEnd (e) {
    this.wecropper.touchEnd(e)
  },
  getCropperImage () {
    this.wecropper.getCropperImage()
  },
  uploadTap () {
    let self = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        let src = res.tempFilePaths[0]
        //  获取裁剪图片资源后，给data添加src属性及其值
        Object.assign(data, { src })
        new weCropper(data)
      }
    })
  },
  onLoad (option) {
    // do something
  }
})
