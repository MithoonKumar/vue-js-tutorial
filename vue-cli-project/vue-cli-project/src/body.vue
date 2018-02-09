<template>
  <div class="container">
    <ul>
      <li v-for="(ninja,index) in ninjas">{{index+1}}. {{ninja}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:['ninjas'],
    name: "body",
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
