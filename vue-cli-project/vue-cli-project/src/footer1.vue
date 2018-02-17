<template>
  <footer>{{title}}</footer>
</template>

<script>
import {bus} from './main'
  export default {
    name: "footer1",
    props: {
      title: {
        type: String,
        required: true
      }
    },
    created() {
      bus.$on('change', data => {
        this.title = data;
      });
    },
  }
</script>

<style scoped>
footer {
  font-size: 15px;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 0px;
}
</style>
