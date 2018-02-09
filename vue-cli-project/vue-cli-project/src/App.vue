<template>
  <div>
    <h1>{{title}}</h1>
    <img src="./assets/logo.png"></img>
    <new1></new1>
  </div>
</template>

<script>
import new1 from "./new1.vue"
export default {
  components:{
    new1: new1
  },
  name: 'app',
  data () {
    return {
      title:"title should be bold"
    }
  }
}
</script>

<style>
h1 {
  color: blue;
}
</style>
