let bus = new Vue({
  data: {
    count: 0
  }
});

Vue.component("conponent-b", {
  template: "<p>bus: {{ bus.count }}</p>",
  computed: {
    bus: function() {
      return bus.$data;
    }
  },
  created: function() {
    bus.$on("bus-event", function() {
      this.event++;
    });
  }
});

var app = new Vue({
  el: "#app"
});
