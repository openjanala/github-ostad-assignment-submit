<script setup>
import { ref } from "vue";
const images = [
  {
    id: 1,
    image: "../public/images/6.jpg",
    title: "First slide label",
    description: "Some representative placeholder content for the first slide.",
  },
  {
    id: 2,
    image: "../public/images/5.jpg",
    title: "Second slide label",
    description: "Some representative placeholder content for the first slide.",
  },
  {
    id: 3,
    image: "../public/images/4.jpg",
    title: "Third slide label",
    description: "Some representative placeholder content for the first slide.",
  },
];

const currentIndex = ref(0);

const imagesLength = images.length


const swithchSlider = (targer) => {

if ('next' == targer) {
    currentIndex.value = (imagesLength - 1) > currentIndex.value ? currentIndex.value + 1 : 0;
} else {
    currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : (imagesLength - 1);
}
}


const switchChange = (index) => {
    currentIndex.value = index
}


</script>

<template>
  <div class="w-100">
    <h1 class="text-white-900 mb-10 font-center">
      Assignment - 4 for Carousel Image
    </h1>

    <div id="carouselExampleCaptions" class="carousel slide">

      <div class="mySlides">
            <div class="numbertext">{{ currentIndex + 1 }} / {{ imagesLength }}</div>
            <img :src="images[currentIndex].image" style="width:100%">
            <div class="text">{{ images[currentIndex].title }}</div>
        </div>

      <a class="prev" @click="swithchSlider('prev')">&#10094;</a>
        <a class="next" @click="swithchSlider('next')">&#10095;</a>

    </div>


  </div>
<br>
 <!-- Thumbnail Image -->
  <div style="text-align:center">
        <span class="dot" v-for="(image, index) in images" :key="index" @click="switchChange(index)"
            :style="{ backgroundImage: `url(${image.image})` }"></span>
    </div>

</template>



<style scoped>
* {
    box-sizing: border-box
}

/* Slideshow container */
.slideshow-container {
    max-width: 1000px;
    position: relative;
    margin: auto;
}


/* Next & previous buttons */
.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    user-select: none;
    background: #1e90ff;
    line-height: 42px;
    height: 42px;
    width: 42px;
    border-radius: 50% !important;
}


/* Position the "next button" to the right */
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

/* Position the "prev button" to the right */
.prev {
    left: 0;
    border-radius: 3px 0 0 3px;
}


/* Caption text */
.text {
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
}

.numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}

.dot {
    cursor: pointer;
    height: 50px;
    width: 50px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

.active,
.dot:hover {
    background-color: #717171;
}

img {
    height: 730px;
    object-fit: cover;
}


</style>
