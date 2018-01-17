new Vue({
  el:'#widget',
  data:{
    name:'Mithoon Kumar',
    website:"http://www.google.in",
    tag:"<p>Hello</p>"
  },
  methods:{
    greet:function(text){
      console.log("consoling",this);// look at the object structure of this
      return "Hey" + " " +text +" "+this._data.name + " "+ this.name ;
    },
    changeUrl:function(){
      this.website = "https://atom.io/packages/terminal-plus";
    }
  }
});
