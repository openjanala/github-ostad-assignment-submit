<script setup>
const pricing = [
  {
  id:1,
  planName: "Free",
  price: 0,
  url:"#1",
  features:[
    "There live the blind texts",
    "Far far away behind the word",
    "Far from the countries Vokalia and Consonantia"
  ]
  },
  {
  id:2,
  planName: "Standard",
  price: 19.99,
  url:"#2",
  features:[
    "There live the blind texts",
    "Far far away behind the word",
    "Far from the countries Vokalia and Consonantia"
  ]
  },
  {
  id:3,
  planName: "Premium",
  price: 79.99,
  url:"#3",
  features:[
    "There live the blind texts",
    "Far far away behind the word",
    "Far from the countries Vokalia and Consonantia"
  ]
  }
]
</script>

<template>
  <div class="untree_co-section bg-light" id="pricing-section">
    <div class="container">
      <div class="row pricing-title">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
          <h2 class="heading">Pricing</h2>
          <p>Pricing for everyone. Choose your plan now!</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="row">

             <!-- for looping item start-->
              <div  class="col-lg-4" data-aos="fade-up" data-aos-delay="200" v-for="item in pricing" :key="item.id">
              <div class="pricing active">
                <div class="body">
                  <div class="price">
                    <span class="d-block plan">{{item.planName}}</span>
                    <span class="price"><sup>$</sup><span>{{item.price}}</span></span>
                  </div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li v-for="(feature, index) in item.features" :key="index">{{feature}}</li>
                  </ul>
                  <p class="text-center mb-0">
                    <a :href="item.url" class="btn" :class="2==item.id ? 'btn-primary':'btn-outline-primary' ">Get Started</a>
                  </p>
                </div>
              </div>
            </div> 


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
