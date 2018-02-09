<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <app-content v-bind:ninjas="ninjas" v-bind:title="title"></app-content>
    <app-footer></app-footer>
    <p>Below is renderd from app.vue</p>
    <ul>
      <li v-for="(ninja, index) in ninjas">{{index}}. {{ninja}}</li>
    </ul>
    <p>{{title}}</p>
  </div>
</template>

<script>
import header from "./header.vue";
import content from "./body.vue";
import footer from "./footer.vue"
export default {
  components:{
    'app-header': header,
    'app-content': content,
    'app-footer': footer
  },
  name: 'app',
  data () {
    return {
      title:"title passed from app.vue",
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
