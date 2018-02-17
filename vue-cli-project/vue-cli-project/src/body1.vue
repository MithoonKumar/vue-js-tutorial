<template>
  <div class="container">
    <ul>
      <li v-for="(item, index) in arr">{{index+1}}. {{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      arr: {
        type: Array,
        required: true // If this prop is not passed then its type check can be stooped by setting required to false
      }
    },
    name: "body1",
    data () {
      return {
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
