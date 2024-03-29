var app = new Vue({
  el: "#app",
  data: {
    list: [],
    current: "",
    topics: [
      { value: "vue", name: "vue.js" },
      { value: "jQuery", name: "jQuery" }
    ]
  },
  watch: {
    current: function(val) {
      axios
        .get("https://api.github.com/search/repositories", {
          params: { q: "topic:" + val }
        })
        .then(
          function(response) {
            this.list = response.data.items;
          }.bind(this)
        );
    }
  }
});
