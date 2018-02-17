<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <app-content v-bind:arr="arr"></app-content>
    <app-footer v-bind:title="title"></app-footer>
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
      title:'Title given from App.vue',
      arr: ["tom", "den", "hary"]
    }
  },
  created () {
    console.log("created again");
  }
}
</script>

<style>
h1 {
  color: blue;
}
</style>
