<template>
  <div>
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
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
      title:"title should be bold"
    }
  }
}
</script>

<style>
h1 {
  color: blue;
}
</style>
