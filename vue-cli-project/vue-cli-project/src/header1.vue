<template>
  <div>
    <header>{{title}}</header>
    <button v-on:click="changeTitle">change title</button>
  </div>
</template>

<script>
import {bus} from './main'
export default {
  name: "header1",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods:{
    changeTitle: function () {
      //this.title = "Changed title using event bus";
      bus.$emit('change', "Changed title using event bus");
    },
    test: function () {
      console.log("consoling test function");
    }
  }
}
</script>

<style scoped>
header {
  font-size: 20px;
  text-align: center;
}
</style>
