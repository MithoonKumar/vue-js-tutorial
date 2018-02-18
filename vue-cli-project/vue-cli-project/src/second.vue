<template>
  <div>
    <h1>{{title}}</h1>
    <input>input</input>
  </div>
</template>
<script>
export default {
  name: "second",
  data () {
    return {
      title:"second"
    }
  },
  beforeDestroy () {
    alert("Its going to be destroyed-->2");
  },
  destroyed () {
    alert("Its destroyed-->2");
  }
}
</script>
<style scoped>
h1 {
  color: green;
}
</style>
