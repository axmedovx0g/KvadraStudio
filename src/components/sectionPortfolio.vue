<template>
  <section class="section-portfolio">
    <div class="section-portfolio__content">
      <img v-bind:src="img" class="img" />
    </div>
    <div class="section-portfolio__content">
      <div class="section-portfolio__content--text">
        <h2>15+</h2>
        <p>лет на рынке</p>
      </div>
      <div class="section-portfolio__content--text">
        <h2>600+</h2>
        <p>проектов</p>
      </div>
      <div class="section-portfolio__content--text">
        <h2>40000</h2>
        <p>м2 воплощено</p>
      </div>
      <div class="section-portfolio__content--text">
        <h2>
          <svg
            width="73"
            height="33"
            viewBox="0 0 73 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58.0452 0.439453C50.4561 0.439453 42.1378 4.66761 36.5 11.0807C30.8608 4.66761 22.5431 0.439453 14.9548 0.439453C7.72486 0.439453 0 4.65812 0 16.4995C0 28.3408 7.72486 32.5587 14.9548 32.5595C22.5446 32.5595 30.8608 28.332 36.5 21.9204C42.1378 28.332 50.4554 32.5595 58.0438 32.5595C65.2751 32.5595 73 28.3408 73 16.4995C73 4.65812 65.2751 0.439453 58.0452 0.439453ZM14.9548 26.1362C9.43598 26.1362 6.6357 22.8943 6.6357 16.4995C6.6357 10.1068 9.43598 6.86345 14.9548 6.86345C21.0583 6.86345 28.1459 10.8252 32.4974 16.4995C28.1466 22.1737 21.0605 26.1362 14.9548 26.1362ZM58.0438 26.1362C51.9402 26.1362 44.8527 22.1737 40.5026 16.4995C44.8527 10.8252 51.9417 6.86345 58.0452 6.86345C63.5655 6.86345 66.3643 10.1061 66.3643 16.4995C66.3628 22.8943 63.564 26.1362 58.0438 26.1362Z"
              fill="#333333"
            />
          </svg>
        </h2>
        <p>Идей</p>
      </div>
    </div>
  </section>
</template>
<script>
import image from '@/assets/rectangle22.jpg'
export default {
    data() {
        return {
            img: image,
        }
    },
};
</script>
<style src="@/styles/main.css"></style>
