let app = new Vue({
  el: "#app",
  data: {
    // console.log('app.message')
    message: "Hello, Vue.js!",
    list: ["りんご", "ゴリラ", "ラッパ"],
    message2: "初期メッセージ",
    count: 0,
    show: false
  },
  methods: {
    handleClick: event => {
      alert(event.target);
    }
  },
  created: () => {
    console.log("created");
  }
});
