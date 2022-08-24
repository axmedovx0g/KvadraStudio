<template>
  <div class="section-footer">
    <div class="section-footer__content">
      <div class="section-footer__content--img">
        <img :src="images[0]" alt="" />
      </div>
      <p id="custom-text">Студия дизайна интерьера в ярославле</p>
      <img :src="images[1]" alt="" id="customImg" />
    </div>
    <div class="section-footer__content">
      <div class="footer__content">
        <ul class="footer__content--list">
          <p>Дизайн</p>
          <li v-for="(item, index) in design" :key="index">
            {{ item }}
          </li>
        </ul>
        <ul class="footer__content--list">
          <p>Услуги</p>
          <li v-for="(item, index) in services" :key="index">
            {{ item }}
          </li>
        </ul>
        <ul class="footer__content--list">
          <li>
            <button class="btn-secondary">Перезвоните мне</button>
          </li>
          <li>
            <p>г. Ярославль, <span>ул. Щапова, 20, Офис 326</span></p>
          </li>
          <li>
            <p>+7 (4852) 94-28-50 <span>Пн-Пт: 9.00 - 18.00</span></p>
          </li>
          <li>
            <p>info@kvadrastudio.ru</p>
          </li>
        </ul>
      </div>
      <div class="footer__content">
        <p class="footer__content--text">2022© kvadrastudio.ru</p>
        <p class="footer__content--text">Политика конфиденциальности</p>
        <p class="footer__content--text">
          Создание и продвижение сайта: <span>ITB-Studio</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import img from "@/assets/Mask group.png";
import img1 from "@/assets/Rectangle_location.jpg";
export default {
  data() {
    return {
      images: [img, img1],
      design: [
        "Дизайн домов",
        "Дизайн квартир",
        "Дизайн ванной",
        "Дизайн спален",
      ],
      services: [
        "Авторский надзор",
        "Архитектурное проектирование",
        "Ремонтно-отделочные работы",
        "Технический состав проекта",
      ],
    };
  },
};
</script>
<style src="@/styles/main.css"></style>
