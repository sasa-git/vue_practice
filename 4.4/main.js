var app = new Vue({
  el: "#app",
  data: {
    price: 19800,
    angle: 180
  },
  filters: {
    localeNum: function(val) {
      return val.toLocaleString();
    },
    round: function(val) {
      // 小数点以下第二位まで丸める
      return Math.round(val * 100) / 100;
    },
    radian: function(val) {
      return (val * Math.PI) / 180;
    }
  }
});
