<template>
  <div>
    <h1>{{title}}</h1>
    <input>input</input>
  </div>
</template>
<script>
export default {
  name: "first",
  data () {
    return {
      title:"first"
    }
  },
  beforeDestroy () {
    alert("Its going to be destroyed-->1");
  },
  destroyed () {
    alert("Its destroyed-->1");
  }
}
</script>
<style scoped>
h1 {
  color: blue;
}
</style>
