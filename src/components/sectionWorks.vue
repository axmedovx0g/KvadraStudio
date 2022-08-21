<template>
  <div class="section-works">
    <div class="section-works__content">
      <div class="section-works__content--text">
        <h1>Наше портфолио</h1>
        <p>
          Все фото наших работ - это 100% настоящие фотографии выполненных нами
          проектов.
        </p>
      </div>
      <div class="section-works__content--items work__items">
        <div class="work__items--content">
          <p class="active">Частные проекты</p>
          <p>Общественные проекты</p>
        </div>
        <div class="works__item--works works">
          <div
            class="works__content"
            v-for="(item, index) in projects"
            :key="index"
          >
            <div class="img">
              <img v-bind:src="item.image" />
            </div>
            <div class="content">
              <h4>{{ item.name }}</h4>
              <h4>{{ item.rate }} м2</h4>
              <p>{{ item.address }}</p>
              <button class="btn-view">Смотреть проект</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import img1 from "@/assets/Rectangle 13.jpg";
import img2 from "@/assets/Rectangle 14.jpg";
import img3 from "@/assets/Rectangle 13 (1).jpg";
import img4 from "@/assets/Rectangle 14 (1).jpg";
export default {
  data() {
    return {
      projects: [
        {
          name: "Неоклассика с мароканскими мотивами",
          rate: 109,
          address: "Ярославль, Московский проспект",
          image: img1,
        },
        {
          name: "Минимализм в деталях",
          rate: 73,
          address: "Ярославль, ул. Наумова",
          image: img2,
        },
        {
          name: "Таунхаус в неоклассическом стиле",
          rate: 145,
          address: "Ярославль, ул. Космонавтов",
          image: img3,
        },
        {
          name: "Изящная неоклассика",
          rate: 105,
          address: "Ярославль, Большая Октябрьская",
          image: img4,
        },
      ],
    };
  },
};
</script>
<style src="@/styles/main.css"></style>
