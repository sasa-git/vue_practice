var app = new Vue({
  el: "#app",
  data: {
    budget: 300,
    limit: 3,
    list: [
      { id: 1, name: "Apple", price: 100 },
      { id: 2, name: "Lemon", price: 200 },
      { id: 3, name: "Orange", price: 300 },
      { id: 4, name: "Kwiuwi", price: 400 },
      { id: 5, name: "Glape", price: 500 },
      { id: 6, name: "Melon", price: 600 }
    ],
    order: false
  },
  computed: {
    matched: function() {
      return this.list.filter(function(el) {
        return el.price <= this.budget;
      }, this);
    },
    limited: function() {
      // return this.matched.slice(0, this.limit);
      return this.sorted.slice(0, this.limit);
    },
    filterdList: function() {
      return this.limited;
    },
    sorted: function() {
      // lodash
      return _.orderBy(this.matched, "price", this.order ? "desc" : "asc");
    }
  }
});
