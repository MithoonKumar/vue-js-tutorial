<template>
  <div class="container">
    <p>{{content}}</p>
  </div>
</template>

<script>
  export default {
    name: "body",
    data () {
      return {
        content: "This is the content in the body"
      }
    }
  }
</script>

<style scoped>
.container {
  height: 300px;
  width: 100%;
}
p {
  font-size: 30px;
  color: green;
  text-align: center;
}
</style>
