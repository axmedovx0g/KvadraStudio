<template>
  <div class="section-definition">
    <div class="section-definition__bg">
      <div class="gb">
        <img :src="img" alt="" />
        <div class="img">
          <img :src="img2" alt="" />
        </div>
      </div>
      <div class="gb">
        <img :src="img1" alt="" />
      </div>
    </div>

    <div class="section-definition__content">
        <div class="section-definition__content--text">
            <h1>Наши тарифы</h1>
        </div>
        <div class="section-definition__content--card">
            <div v-for="item in cardContent" :key='item.id' :id='item.id' class="card">
                <div class="card__header">
                    <h5>{{item.name}}</h5>
                </div>
                <div class="card__body">
                    <ul class="card__body--list">
                        <li v-for="(listItem, index) in item.list" :key="index">
                        {{listItem}}</li>
                    </ul>
                    <p></p>
                </div>
                <div class="card__footer">
                    <div class="card__footer--btns"></div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import img from '@/assets/Rectangle 21.jpg'
import img1 from '@/assets/Rectangle 6 (1).jpg'
import img2 from '@/assets/Rectangle_location.jpg'
export default {
    data() {
        return {
            cardContent: [
                {
                    id: 1,
                    name: "Концепция",
                    list: [
                        'Планировочные решения (проектируем с учетом мебели и оборудования)',
                        '3D визуализация дизайна интерьера всех помещений (количество ракурсов неограниченно)',
                        'Перечень использованных в проекте всех декоративных материалов, также мебели и освещения (поставщики, артикулы, характеристики)',
                    ],
                    price: '1500',
                },
                {
                    id: 2,
                    name: 'Комплекс',
                    list: [
                        'Все по тарифу “Концепция плюс”',
                        'Чертежная документация (демонтаж, монтаж, электрика, сантехника, отопление, вентиляция, полы, потолки, плитка, стены, мебель)',
                        'Спецификация использованных в проекте декоративных материалов, всей мебели и освещения (количество, характеристики, артикулы, поставщики)',
                    ],
                    price: '1500',
                },
                {
                    id: 3,
                    name: 'Комфорт',
                    list: [
                        'Все по тарифу “Комплекс плюс”',
                        'Авторский надзор и информационное сопровождение проекта',
                        'Представление интересов заказчика и скидок при закупке мебели, освещения, оборудования при комплектации объекта',

                    ],
                    price: '1500'
                },
            ]
        }
    },
};
</script>
<style src="@/styles/main.css"></style>
