<template>
  <swiper
    :modules="modules"
    @slideChange="handleSlideChange"
    @swiper="initSwiper"
    loop
    :autoplay="autoplay"
  >
    <swiper-slide v-for="(image, index) in images" :key="image.id">
      <div class="image-container">
        <img
          :src="`${image.url}`"
          :alt="image.title"
          :class="{ active: currentIndex === index }"
        />
      </div>
      <div class="slider-content">
        <div
          class="slide-text"
          :class="{ 'slide-text-visible': currentIndex === index }"
        >
          <h2>{{ image.title }}</h2>
          <p>{{ image.subtitle }}</p>
          <img src="/assets/images/shapes/shape-slide.png" alt="" />
        </div>
      </div>
    </swiper-slide>
    <div class="slider-nav">
      <button class="btn-nav-prev" @click="mySwiper.slidePrev()">

        <i class="fas fa-arrow-left mr-1"></i>
        <span> Ant.</span>
      </button>
      <button class="btn-nav-next" @click="mySwiper.slideNext()">
        <span> Sig.</span>
        <i class="fas fa-arrow-right ml-1"></i>
   
      </button>
    </div>
  </swiper>
</template>

<script setup>
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const modules = ref([Autoplay]);

const mySwiper = ref(null);

const images = ref([
  {
    id: 1,
    url: "/assets/images/sliders/img1.jpg",
    title: "Innovación en la Cadena Láctea",
    subtitle:
      "Revolucionando el acopio y distribución de leche y productos lácteos para un mundo más saludable",
  },
  {
    id: 2,
    url: "/assets/images/sliders/img2.jpg",
    title: "Impulsando el Crecimiento Local",
    subtitle:
      "Apostamos por las plantas productoras de lácteos locales, promoviendo economías sostenibles y productos de alta calidad.",
  },
  {
    id: 3,
    url: "/assets/images/sliders/img2.jpg",
    title: "La Esencia del Campo en tu Hogar",
    subtitle:
      "Desde la leche fresca hasta el queso artesanal, traemos lo mejor de la granja directamente a tu mesa.",
  },
  // Agrega más imágenes según sea necesario
]);

const currentIndex = ref(0);

const autoplay = {
  delay: 5000,
  disableOnInteraction: false,
};

const initSwiper = (swiper) => {
  mySwiper.value = swiper;
};

const handleSlideChange = (e) => {
  currentIndex.value = e.realIndex;
};
</script>

<style lang="scss">
.swiper {
  position: relative;
  .slider-nav {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 100;
    button {
      border: none;
      padding: 1.8rem 2.5rem;

      &.btn-nav-next {
        background-color: #404a3d;
        color: #9fce33;
      }
      &.btn-nav-prev {
        background-color: white;
      }
    }
  }
}

.image-container {
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    transition: transform 15s;
    &.active {
      transform: scale(1.5);
    }
  }
}

.swiper-slide {
  display: flex;
  align-items: flex-end;
  position: relative;
}

.slider-content {
  background-color: rgba($color: #000, $alpha: 0.4);
  position: absolute;
  width: 100%;
  height: 100%;

  .slide-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    text-align: end;
    padding: 8rem;
    h2,
    p {
      position: absolute;
      bottom: -100%;
      opacity: 0;
      pointer-events: none;
    }

    h2 {
      font-size: 4.8rem;
      color: white;
     
      font-weight: 900;
      transition: all 1.4s;
      z-index: 1;
    }
    p {
      padding: 0.5rem;
      line-height: 1rem;
      background-color: rgba(255, 255, 255, 0.1);
      font-size: 1rem;
      color: white;
      transition: all 1s;
      z-index: 1;
    }
    img {
      transition: all 1.4s;
      position: absolute;
      opacity: 0;
      width: 20rem;
      pointer-events: none;
      z-index: 0;
      scale: 0.2;
      transform: rotate(45deg);
    }
    &-visible h2 {
      bottom: 40%;
      opacity: 1;
      pointer-events: auto;
    }
    &-visible p {
      bottom: calc(35% + 8rem);
      opacity: 1;
      pointer-events: auto;
    }

    &-visible img {
      left: 5%;
      scale: 1;
      opacity: 1;
      pointer-events: auto;
    }
  }
}
</style>
