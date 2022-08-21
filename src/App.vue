<template>
  <div class="app">
    <header-component></header-component>
    <section-portfolio></section-portfolio>
    <section-about></section-about>
    <section-works></section-works>
    <view-projects></view-projects>
  </div>
</template>
<script>
import HeaderComponent from "@/components/Header.vue";
import sectionPortfolio from "@/components/sectionPortfolio.vue";
import sectionAbout from "@/components/sectionAbout.vue";
import sectionWorks from "@/components/sectionWorks.vue";
import ViewProjects from './components/UI/viewProjects.vue';

export default {
  components: {
    HeaderComponent,
    sectionPortfolio,
    sectionAbout,
    sectionWorks,
    ViewProjects,
  },
};
</script>
<style src="@/styles/main.css"></style>
