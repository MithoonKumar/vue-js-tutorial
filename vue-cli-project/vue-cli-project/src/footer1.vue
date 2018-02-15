<template>
  <footer>{{title}}</footer>
</template>

<script>
  export default {
    name: "footer1",
    props: {
      title: {
        type: String,
        required: true
      }
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
