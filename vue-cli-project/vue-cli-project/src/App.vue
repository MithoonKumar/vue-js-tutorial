<template>
  <div>
    <app-header></app-header>
    <app-content v-bind:ninjas="ninjas"></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "./header1.vue";
import content from "./body1.vue";
import footer from "./footer1.vue"
export default {
  components:{
    'app-header': header,
    'app-content': content,
    'app-footer': footer
  },
  name: 'app',
  data () {
    return {
      title:"title should be bold",
      ninjas: ["tom", "dick", "hary"]
    }
  }
}
</script>

<style>
h1 {
  color: blue;
}
</style>
