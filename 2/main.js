let state2 = { count: 0 };

let app = new Vue({
  el: "#app",
  data: {
    state: state2,
    message: {
      value: "Hello"
    },
    list: ["りんご", "ばなな", "いちご"],
    num: 1,
    count2: 0,
    isChild: true,
    isActive: true,
    textColor: "red",
    bgColor: "lightblue",
    classObject: {
      child: true,
      "is-active": false
    },
    styleObject: {
      color: "blue",
      backgroundColor: "black"
    },
    radius: 50,
    position: 100,
    list2: [
      { id: 1, name: "スライム", hp: 100 },
      { id: 2, name: "ゴブリン", hp: 200 },
      { id: 3, name: "ドラゴン", hp: 500 }
    ]
  },
  methods: {
    handleClick: function() {
      // console.log("hi");
      this.state.count++;
    },
    increment: function() {
      this.count2 += 1;
    }
  }
});
