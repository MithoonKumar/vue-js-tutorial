<template>
  <div class="container">
    <ul>
      <li v-for="(ninja,index) in ninjas">{{index+1}}. {{ninja}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      ninjas: {
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
