<template>
  <div class="app">
    <!-- <header-component></header-component> -->
    <section-portfolio></section-portfolio>
    <section-about></section-about>

  </div>
</template>
<script>
import Menu from '@/components/UI/Menu.vue';
import HeaderComponent from '@/components/Header.vue'
import sectionPortfolio from './components/sectionPortfolio.vue';
import sectionAbout from './components/sectionAbout.vue';

export default {
  components: {
    Menu,
    HeaderComponent,
    sectionPortfolio,
    sectionAbout
  },
};
</script>
<style src="@/styles/main.css">

</style>
