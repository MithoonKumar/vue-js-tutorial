new Vue({
  el:'#widget',
  data:{
      a:0,
      b:0
  },
  methods:{
     methodA:function(){
       console.log("executed methodA");
       return this.a;
     },
     methodB:function(){
       console.log("executed methodB");
       return this.b;
     }
  },
  computed:{
    computedA:function(){
      console.log("executed computedA");
      return this.a;
    },
    computedB:function(){
      console.log("executed computedB");
      return this.b;
    }
  }
});
