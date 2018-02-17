<template>
  <footer v-on:click="changeText">{{title}}</footer>
</template>

<script>
import {bus} from './main'
  export default {
    name: "footer1",
    props: {
      title: {
        type: String,
        required: true
      }
    },
    methods: {
      changeText () {
        this.title = "changing title";
      }
    },
    beforeCreate () {
      alert("It is just before create and can't access data" + this.stringData);
    },
    data () {
        return{
          stringData: "some string"
        }
    },
    created () {
      alert("component created, now I can access data" + this.stringData);
    },
    beforeMount () {
      var el = document.getElementsByTagName("footer")[0];
      alert("component is created but not mounted, I can't find footer element in dom" + el);
    },
    mounted () {
      var el = document.getElementsByTagName("footer")[0];
      alert("component is created n mounted, I can find footer element in dom" + el);
    },
    beforeUpdate () {
      alert("dom tite is not changed but this.title is changed ---> " + this.title);
    }
  }
</script>

<style scoped>
footer {
  font-size: 15px;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 0px;
}
</style>
