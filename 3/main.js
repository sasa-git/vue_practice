let app = new Vue({
  el: "#app",
  data: {
    show: false,
    message: "",
    message_length: 0,
    message2: "",
    message3: "",
    val: true,
    val2: [],
    val3: [],
    val4: [],
    preview: "",
    val5: 0,
    val6: "#ffffff"
  },
  methods: {
    handleInput: function(event) {
      this.message = event.target.value;
      this.message_length = event.target.value.length;
    },
    handleChange: function(event) {
      let file = event.target.files[0];
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(file);
      }
    }
  }
});
