<template>
  <div class="app">
    <home></home>
    <router-view />
  </div>
</template>
<script>
import home from '@/views/HomeView.vue'
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
