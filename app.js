new Vue({
  el:'#widget',
  data:{
    ended: false,
    health: 100
  },
  methods:{
    punch(){
      this.health-=10;
      if(this.health<=0) {
        this.ended = true;
      }
    },
    restart(){
      this.health=100;
      this.ended=false;
    }
  },
  computed:{
  }
});
