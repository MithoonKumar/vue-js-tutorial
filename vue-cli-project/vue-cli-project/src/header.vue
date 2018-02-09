<template>
  <header>{{title}}</header>
</template>

<script>
export default {
  name: "header",
  data () {
    return {
      title:"This header is from header.vue"
    }
  }

}
</script>

<style scoped>
header {
  font-size: 20px;
  text-align: center;
}
</style>
