<template>
    <div class="section-form">
        <div class="bg-img">
            <img :src="img" alt="">
        </div>
        <form action="#" class="section-form__form">
            <div class="section-form__form--text">
                <h1>Обратная связь</h1>
            </div>
            <div class="section-form__form--content">
                <div class="input">
                    <input type="text" placeholder="Ваше имя *">
                </div>
                <div class="input">
                    <input type="number" placeholder="Ваш номер телефона *">
                    <input type="email" placeholder="Ваш E-mail">
                </div>
                <div class="input">
                    <textarea name="" id="" placeholder="Ваше сообщение *"></textarea>
                </div>
                <button class="btn-secondary">
                    Отправить
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import image from '@/assets/Rectangle 31.jpg'
export default {
    data() {
        return {
            img: image
        }
    },
}
</script>
<style src="@/styles/main.css">
    
</style>