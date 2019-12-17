var app = new Vue({
  el: "#app",
  data: {
    order: false,
    list: [
      { id: 1, name: "🍎", price: 100 },
      { id: 2, name: "🍋", price: 200 },
      { id: 3, name: "🍇", price: 300 },
      { id: 4, name: "🍊", price: 400 }
    ],
    list2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  computed: {
    sortedList: function() {
      return _.orderBy(this.list, "price", this.order ? "desc" : "asc");
    }
  },
  methods: {
    doShuffle: function() {
      this.list2 = _.shuffle(this.list2);
    },
    doAdd: function() {
      // https://www.softel.co.jp/blogs/tech/archives/1377
      // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
      let newNumber = Math.max.apply(null, this.list2) + 1;
      let index = Math.floor(Math.random() * (this.list2.length + 1));
      // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
      this.list2.splice(index, 0, newNumber);
    },
    doRemove: function(index) {
      this.list2.splice(index, 1);
    }
  }
});
