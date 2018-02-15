<template>
  <div>
    <app-header v-bind:title="title" v-on:change="catchEvent"></app-header>
    <app-content v-bind:ninjas="ninjas"></app-content>
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
      title:"Title given from App.vue",
      ninjas: ["tom", "dick", "hary"]
    }
  },
  methods: {
    catchEvent: function (newTitle) {
      console.log("consoling the arg passed", newTitle);
      this.title = newTitle;
    }
  }
}
</script>

<style>
h1 {
  color: blue;
}
</style>
