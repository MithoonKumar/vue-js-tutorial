<template>
  <footer>{{text}}</footer>
</template>

<script>
  export default {
    name: "footer",
    data () {
      return {
        text:"Copyright @ 1992"
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
