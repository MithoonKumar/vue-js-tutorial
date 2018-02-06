new Vue({
  el:'#widget',
  data:{
    green: false,
    bigFontSize: false
  },
  methods:{
    methodClass: function() {
      console.log("consoling the context", this.green, this.bigFontSize);
      return {
        color: this.green,
        fontsize: this.bigFontSize
      };
    }
  },
  computed:{
  }
});
