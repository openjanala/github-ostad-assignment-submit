<script setup>
  import {ref, reactive, onMounted, onUnmounted} from 'vue'

  const activeIndex = ref(0)

  const carouselItems = [
    {
      image: 'images/1.jpg',
      title: 'First Slide Label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue'
    },
    {
      image: 'images/2.jpg',
      title: 'Second Slide Label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: 'images/3.jpg',
      title: 'Third Slide Label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: 'images/4.jpg',
      title: 'Forth Slide Label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: 'images/5.jpg',
      title: 'Fifth Slide Label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    }
  ]

  const imageFilter = '-webkit-filter: grayscale(100%);filter: grayscale(100%);'

  const incrementActiveIndex = () =>{
    if(activeIndex.value == carouselItems.length -1){
      activeIndex.value = 0
    }
    else{
      activeIndex.value++
    }
  }

  const timeId = null;

  const startSlides = function(){
    timeId = setInterval(incrementActiveIndex, 8000)
  }

  const stopSlides = function(){
    clearInterval(timeId)
  }
 
  onMounted(() => {
    startSlides()
  })

  onUnmounted(() =>{
    stopSlides()
  })
</script>

<template>
  <h3><strong>Assignment-4 (Image Carousel)</strong></h3>

  <div @mouseover="stopSlides" @mouseleave="startSlides" id="carouselExampleCaptions" class="carousel">  
    
    <div class="carousel-inner">        
      <div class="carousel-item active">           
        <img height="500" :src="carouselItems[activeIndex].image" class="d-block w-100 img img-responsive" :alt="carouselItems[activeIndex].title">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ carouselItems[activeIndex].title }}</h5>
          <p>{{ carouselItems[activeIndex].description }}</p>
        </div>
      </div>  
    </div>    
    <a @click.prevent="0 == activeIndex ? activeIndex = (carouselItems.length) - 1 : activeIndex--" class="carousel-control-prev" href="#" role="button">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a @click.prevent="(carouselItems.length) - 1 == activeIndex ? activeIndex = 0 : activeIndex++" class="carousel-control-next" href="#" role="button">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div><br>
  <div>
    <ol class="thumnails">
    <img @click="activeIndex = index" height="50" :style="activeIndex != index?imageFilter:''" style="cursor: pointer;" class="mx-1" v-for="(thumnail, index) in carouselItems" :key="index" :src="thumnail.image" alt="">
  </ol>
  </div>
</template>

<style scoped>
.thumnails img{
  border-radius: 50%;
width: 60px;
height: 60px;
border: 2px solid red;
}
</style>
