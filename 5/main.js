Vue.component("comp-child", {
  template: "<p>{{ val }}</p>",
  props: ["val"]
});

Vue.component("comp-child2", {
  template: "<li>{{ name }} HP.{{ hp }}</li>",
  props: ["name", "hp"]
});

Vue.component("comp-child3", {
  // 1 クリックでhandleClickメソッドを呼ぶ
  template: '<button v-on:click="handleClick">イベント発火</button>',
  methods: {
    handleClick: function() {
      // 2 childs-eventイベントを発火する
      this.$emit("childs-event");
    }
  }
});

Vue.component("comp-child4", {
  template:
    '<li>{{ name }} HP.{{ hp }}\
    <button v-on:click="doAttack">攻撃する</button></li>',
  props: { id: Number, name: String, hp: Number },
  methods: {
    doAttack: function() {
      this.$emit("attack", this.id);
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    message: "hi!",
    list: [
      { id: 1, name: "スライム1", hp: 100 },
      { id: 2, name: "スライム2", hp: 200 },
      { id: 3, name: "スライム3", hp: 300 }
    ]
  },
  methods: {
    parentsMethod: function() {
      alert("catched!");
    },
    handleAttack: function(id) {
      let item = this.list.find(function(el) {
        return el.id === id;
      });
      if (item !== undefined && item.hp > 0) item.hp -= 10;
    }
  }
});
