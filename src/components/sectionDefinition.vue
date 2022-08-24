<template>
  <div class="section-definition">
    <div class="section-definition__bg">
      <div class="bg">
        <img :src="img" alt="" />
        <div class="img">
          <img :src="img2" alt="" />
        </div>
      </div>
    </div>

    <div class="section-img">
      <img :src="img1" alt="" />
    </div>

    <div class="section-definition__content">
      <div class="section-definition__content--text">
        <h1>Наши тарифы</h1>
      </div>
      <div class="section-definition__content--card">
        <div
          v-for="item in cardContent"
          :key="item.id"
          :id="item.id"
          class="card"
        >
          <div class="card__header">
            <h5>{{ item.name }}</h5>
          </div>
          <div class="card__body">
            <ul class="card__body--list">
              <li v-for="(listItem, index) in item.list" :key="index">
                {{ listItem }}
              </li>
            </ul>
          </div>
          <div class="card__footer">
            <p>
              от <span>{{ item.price }}</span> ₽/м2
            </p>
            <div class="card__footer--btns">
              <button class="btn-secondary">Заказать</button>
              <button class="btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 12H16L12 16L8 12H11V8H13V12ZM15 4H5V20H19V8H15V4ZM3 2.992C3 2.444 3.447 2 3.999 2H16L21 7V20.993C21.0009 21.1243 20.976 21.2545 20.9266 21.3762C20.8772 21.4979 20.8043 21.6087 20.7121 21.7022C20.6199 21.7957 20.5101 21.8701 20.3892 21.9212C20.2682 21.9723 20.1383 21.9991 20.007 22H3.993C3.73038 21.9982 3.47902 21.8931 3.29322 21.7075C3.10742 21.5219 3.00209 21.2706 3 21.008V2.992Z"
                    fill="#333333"
                  />
                </svg>
                Скачать прайс
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import img from "@/assets/Rectangle 21.jpg";
import img1 from "@/assets/Rectangle_6_1.jpg";
import img2 from "@/assets/Rectangle_location.jpg";
export default {
  data() {
    return {
      img: img,
      img1: img1,
      img2: img2,

      cardContent: [
        {
          id: 1,
          name: "Концепция",
          list: [
            "Планировочные решения (проектируем с учетом мебели и оборудования)",
            "3D визуализация дизайна интерьера всех помещений (количество ракурсов неограниченно)",
            "Перечень использованных в проекте всех декоративных материалов, также мебели и освещения (поставщики, артикулы, характеристики)",
          ],
          price: "1 500",
        },
        {
          id: 2,
          name: "Комплекс",
          list: [
            "Все по тарифу “Концепция плюс”",
            "Чертежная документация (демонтаж, монтаж, электрика, сантехника, отопление, вентиляция, полы, потолки, плитка, стены, мебель)",
            "Спецификация использованных в проекте декоративных материалов, всей мебели и освещения (количество, характеристики, артикулы, поставщики)",
          ],
          price: "1 500",
        },
        {
          id: 3,
          name: "Комфорт",
          list: [
            "Все по тарифу “Комплекс плюс”",
            "Авторский надзор и информационное сопровождение проекта",
            "Представление интересов заказчика и скидок при закупке мебели, освещения, оборудования при комплектации объекта",
          ],
          price: "1 500",
        },
      ],
    };
  },
};
</script>
<style src="@/styles/main.css"></style>
