<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script>
import home from '@/views/Home.vue'
export default {
  components: {
    home
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
