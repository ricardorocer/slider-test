Page({
  data: {
    slideValue: 100
  },

  slideChange: function (e) {
    this.setData({slideValue: e.detail.value});
  }
})