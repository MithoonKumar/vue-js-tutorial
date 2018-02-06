var first = new Vue({
  el:'#first-instance',
  data:{
    title: "first instance title unchanged"
  }
});

var second = new Vue({
  el: '#second-instance',
  data: {
    title: "second instance title unchanged"
  },
  methods: {
    changeTitle: function(){
      first.title = "title changed by the second instance";
    }
  }
});
