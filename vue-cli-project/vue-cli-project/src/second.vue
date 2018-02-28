<template>
  <div>
    <input v-model="name"> </input>
    <p>{{name}}</p>
  </div>
</template>
<script>
export default {
  name: "second",
  data: function() {
    return {
      name:""
    };
  }
}
</script>
<style scoped>
input {
  outline: none;

}
</style>
