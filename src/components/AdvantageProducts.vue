<script setup>
const allData = [
  {
  title:"Grow Your Business",
  message:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  link:"#",
  iconColor:"color-1"
  },
  {
  title:"Grow Your Business",
  message:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  link:"#",
  iconColor:"color-2"
  },
  {
  title:"Grow Your Business",
  message:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  link:"#",
  iconColor:"color-3"
  },
  {
  title:"Grow Your Business",
  message:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  link:"#",
  iconColor:"color-4"
  }
]

</script>

<template>
  <div class="untree_co-section">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
          <h2 class="heading">Advantage of using our products</h2>
          <p>Far from the countries Vokalia and Consonantia</p>
        </div>
      </div>
      <div class="row">

        <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100" v-for="(data, index) in allData" :key="index">
          <div class="service horizontal d-flex">
            <div class="service-icon mb-4" :class="data.iconColor">
              <svg
                class="bi bi-app-indicator"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                />
                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              </svg>
            </div>
            <div class="service-contents">
              <h3>{{ index+1 }}. {{data.title}}</h3>
              <p>{{data.message}}</p>
              <a :href="data.url" class="read-more">Learn More</a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped></style>
