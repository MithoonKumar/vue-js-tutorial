<template>
  <div>
    <new1>
      <p slot="upper-slot">{{upperTitle}}</p>
      <p slot="lower-slot">{{lowerTitle}}</p>
    </new1>
  </div>
</template>

<script>
import new1 from "./new.vue"
export default {
  components:{
    "new1": new1
  },
  name: 'app',
  data () {
    return {
      upperTitle: "title in the upper slot",
      lowerTitle: "title in the lower slot"
    }
  }
}
</script>

<style>
h1 {
  color: blue;
}
</style>
