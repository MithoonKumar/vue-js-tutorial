<template>
  <div>
    <slot name="upper-slot"></slot>
    <h1>{{localTitle}}</h1>
    <slot name="lower-slot"></slot>
  </div>
</template>

<script>
export default {
  name: "new",
  data: function () {
    return {
      localTitle: "Title from new.vue"
    }
  }
}
</script>
<style scoped>
h1 {
  color: green;
}
</style>
