let scroll = new SmoothScroll();

let app = new Vue({
  el: "#app",
  data: {
    scrollY: 0,
    timer: null
  },
  created: function() {
    // ハンドラを登録
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy: function() {
    // ハンドラを解除
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function() {
      if (this.timer === null) {
        this.timer = setTimeout(
          function() {
            this.scrollY = window.scrollY;
            clearTimeout(this.timer);
            this.timer = null;
          }.bind(this),
          200
        );
      }
    },
    scrollTop: function() {
      // 0の位置までスクロール
      scroll.animateScroll(0);
    }
  }
});
