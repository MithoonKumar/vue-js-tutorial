var first = new Vue({
  el:'#first-instance',
  data:{
    title: "first instance title unchanged"
  },
  methods: {
    readRefs(){
      console.log(this.$refs.first.innerHTML);
    }
  }
});
