<template>
  <div class="app">
    <header-component></header-component>
    <section-create></section-create>
    <section-comfort></section-comfort>
    <section-portfolio></section-portfolio>
    <section-about></section-about>
    <section-works></section-works>
    <view-projects></view-projects>
    <section-tech-research></section-tech-research>

    <section-cards></section-cards>
  </div>
</template>
<script>
import HeaderComponent from "@/components/Header.vue";
import sectionPortfolio from "@/components/sectionPortfolio.vue";
import sectionAbout from "@/components/sectionAbout.vue";
import sectionCreate from "@/components/sectionCreate.vue";
import sectionComfort from "@/components/sectionComfort.vue";
import sectionWorks from "@/components/sectionWorks.vue";
import ViewProjects from "./components/UI/viewProjects.vue";
import SectionTechResearch from "./components/sectionTechResearch.vue";
import sectionCards from "./components/sectionCards.vue";
export default {
  components: {
    HeaderComponent,
    sectionPortfolio,
    sectionAbout,
    sectionWorks,
    ViewProjects,
    sectionCreate,
    sectionComfort,
    SectionTechResearch,
    sectionCards,
  },
};
</script>
<style src="@/styles/main.css"></style>
