<template>
  <div>
    <header>{{title}}</header>
    <button v-on:click="changeTitle">change title</button>
    <button v-on:click="test">Test Button</button>
  </div>
</template>

<script>
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
      this.$emit('change',"sent the title through emitter");
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
