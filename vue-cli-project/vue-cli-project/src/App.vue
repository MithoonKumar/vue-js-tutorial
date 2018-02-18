<template>
  <div>
    <keep-alive>
      <component v-bind:is="component"></component> <!--when switching between components the components are destroyed and created... we can track that by removing keep-alive -->
    </keep-alive>
    <button v-on:click="toggle">toggle</button>
  </div>
</template>

<script>
import first from "./first.vue";
import second from "./second.vue"
export default {
  components:{
    "first": first,
    "second": second
  },
  name: 'app',
  data () {
    return {
      component:"first"
    }
  },
  methods: {
    toggle () {
      this.component = this.component === "first" ? "second" : "first";
    }
  }
}
</script>

<style>
h1 {
  color: blue;
}
</style>
