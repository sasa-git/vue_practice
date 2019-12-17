Vue.component("my-circle", {
  template: '<circle cx="80" cy="75" r="50" v-bind:fill="fill2"/>',
  props: {
    fill2: String
  }
});

new Vue({
  el: "#app",
  data: {
    toggle: false,
    show: true
  },
  computed: {
    compFill: function() {
      return this.toggle ? "lightpink" : "skyblue";
    }
  },
  methods: {
    enter: function(el, done) {
      console.log("enter");
      // 1秒後にdone()を実行して次のフック(afterEnter)に遷移
      setTimeout(done, 1000);
      // done();
    },
    afterEnter: function() {
      console.log("afterEnter");
    },
    beforeEnter: function() {
      console.log("beforeEnter");
    }
  }
});
