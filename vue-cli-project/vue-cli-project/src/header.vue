<template>
  <div>
    <header>{{title}}</header>
    <button v-on:click="changeText()">change text</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  name: "header",
  data () {
    return {
    }
  },
  methods: {
    changeText() {
      this.title = "title changed by header.vue"
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
