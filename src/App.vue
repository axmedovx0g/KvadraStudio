<template>
  <div>
    <header-component></header-component>
    <!-- <section-portfolio></section-portfolio> -->
    
  </div>
</template>
<script>
import Menu from '@/components/UI/Menu.vue';
import HeaderComponent from '@/components/Header.vue'
import sectionPortfolio from './components/sectionPortfolio.vue';

export default {
  components: {
    Menu,
    HeaderComponent,
    sectionPortfolio,
  },
};
</script>
<style src="@/styles/main.css">

</style>
