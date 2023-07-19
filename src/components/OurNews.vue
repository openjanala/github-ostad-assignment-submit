<script setup>
const ourNews = [
  {
    image:"/frontend/images/person_1.jpg",
    postedBy:"James",
    postDate:"May 14, 2021",
    title:"Digital Project, 6 min read",
    message:"The behind the word mountains far from the countries",
    url:"#1"
  },
  {
    image:"/frontend/images/person_2.jpg",
    postedBy:"Khan",
    postDate:"April 14, 2022",
    title:"Analog Service, 8 min read",
    message:"Far far away behind the word mountains far from the countries",
    url:"#2"
  },
  {
    image:"/frontend/images/person_3.jpg",
    postedBy:"Rob",
    postDate:"Jun 14, 2023",
    title:"Digital Goods, 9 min read",
    message:"away behind the word mountains far from the countries",
    url:"#3"
  }
]


</script>

<template>
  <div class="untree_co-section bg-light" id="our-news">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
          <h2 class="heading">Our News</h2>
          <p>Far from the countries Vokalia and Consonantia</p>
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-6 mb-4 mb-lg-0 col-lg-4"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div class="news-item">
            <div class="vcard d-flex align-items-center mb-4">
              <div class="img-wrap">
                <img
                  :src="ourNews[0].image"
                  :alt="ourNews[0].postedBy"
                  class="img-fluid"
                />
              </div>
              <div class="post-meta">
                <strong>Posted by {{ourNews[0].postedBy}}</strong>
                <span>{{ourNews[0].postDate}}</span>
              </div>
            </div>
            <div class="news-contents mb-4">
              <span class="post-meta-2">{{ourNews[0].title}}</span>
              <h3>
                <a :href="ourNews[0].url">{{ourNews[0].message}}</a>
              </h3>
            </div>
            <p class="mb-0">
              <a :href="ourNews[0].url" class="read-more-arrow">
                <svg
                  class="bi bi-arrow-right"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </a>
            </p>
          </div>
        </div>
        <div
          class="col-md-6 mb-4 mb-lg-0 col-lg-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="news-item">
            <div class="vcard d-flex align-items-center mb-4">
              <div class="img-wrap">
                <img
                :src="ourNews[1].image"
                  :alt="ourNews[1].postedBy"
                  class="img-fluid"
                />
              </div>
              <div class="post-meta">
                <strong>Posted by {{ourNews[1].postedBy}}</strong>
                <span>{{ourNews[1].postDate}}</span>
              </div>
            </div>
            <div class="news-contents mb-4">
              <span class="post-meta-2">{{ourNews[1].title}}</span>
              <h3>
                <a :href="ourNews[1].url">{{ourNews[1].message}}</a>
              </h3>
            </div>
            <p class="mb-0">
              <a :href="ourNews[1].url" class="read-more-arrow">
                <svg
                  class="bi bi-arrow-right"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </a>
            </p>
          </div>
        </div>
        <div class="col-md-12 col-lg-4" data-aos="fade-up" data-aos-delay="300">
          <div class="news-item">
            <div class="vcard d-flex align-items-center mb-4">
              <div class="img-wrap">
                <img
                :src="ourNews[2].image"
                  :alt="ourNews[2].postedBy"
                  class="img-fluid"
                />
              </div>
              <div class="post-meta">
                <strong>Posted by {{ourNews[2].postedBy}}</strong>
                <span>{{ourNews[2].postDate}}</span>
              </div>
            </div>
            <div class="news-contents mb-4">
              <span class="post-meta-2">{{ourNews[2].title}}</span>
              <h3>
                <a :href="ourNews[2].url">{{ourNews[2].message}}</a>
              </h3>
            </div>
            <p class="mb-0">
              <a :href="ourNews[2].url" class="read-more-arrow">
                <svg
                  class="bi bi-arrow-right"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
