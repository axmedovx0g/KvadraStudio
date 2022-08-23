<template>
  <div>
    <div class="section-interior">
      <div class="section-interior__content">
        <div class="section-interior__content--text">
          <h1>Взгляните, так может выглядеть ваш новый интерьер</h1>
          <p>Посмотрите 3D тур готового проекта.</p>
        </div>
        <div class="section-interior__content--svg">
          <svg
            width="16"
            height="215"
            viewBox="0 0 16 215"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.29289 214.707C7.68342 215.098 8.31658 215.098 8.70711 214.707L15.0711 208.343C15.4616 207.953 15.4616 207.319 15.0711 206.929C14.6805 206.538 14.0474 206.538 13.6569 206.929L8 212.586L2.34315 206.929C1.95262 206.538 1.31946 206.538 0.928932 206.929C0.538408 207.319 0.538408 207.953 0.928932 208.343L7.29289 214.707ZM7 0L7 214H9L9 0L7 0Z"
              fill="#333333"
            />
          </svg>
        </div>
      </div>
      <div class="section-interior__img">
        <img v-bind:src="img" />
        <p>Мы с удовольствием сделаем такой тур и для вашего проекта.</p>
      </div>
    </div>
    <div class="section-best">
      <div class="section-best__content">
        <h1>Почему мы - лучшие?</h1>
        <div class="section-best__content--img">
          <div class="img">
            <img :src="img1" alt="" />
            <p>Мы рождаем <br> шедевры!</p>
          </div>
            <img :src="img3" id="customImg" alt="">
          <div class="img">
            <img :src="img2" alt="">
          </div>
        </div>
        <svg
            width="16"
            height="215"
            viewBox="0 0 16 215"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.29289 214.707C7.68342 215.098 8.31658 215.098 8.70711 214.707L15.0711 208.343C15.4616 207.953 15.4616 207.319 15.0711 206.929C14.6805 206.538 14.0474 206.538 13.6569 206.929L8 212.586L2.34315 206.929C1.95262 206.538 1.31946 206.538 0.928932 206.929C0.538408 207.319 0.538408 207.953 0.928932 208.343L7.29289 214.707ZM7 0L7 214H9L9 0L7 0Z"
              fill="#333333"
            />
          </svg>
      </div>
    </div>
  </div>
</template>
<script>
import image from "@/assets/Rectangle 16.jpg";
import img1 from "@/assets/Rectangle 6 (1).jpg";
import img2 from "@/assets/Rectangle 8.jpg";
import img3 from "@/assets/Rectangle_location.jpg";
export default {
  data() {
    return {
      img: image,
      img1: img1,
      img2: img2,
      img3: img3,
    };
  },
};
</script>
<style src="@/styles/main.css"></style>
