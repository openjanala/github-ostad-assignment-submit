<script setup>
const colorlibLink= "https://Colorlib.com/"
const emailProtector= "https://preview.colorlib.com/cdn-cgi/l/email-protection#a5cccbc3cae5c8dcc1cac8c4cccb8bc6cac8"

</script>

<template>
  <div class="untree_co-section" id="contact-section">
    <div class="container">
      <div class="row mb-4" data-aos="fade-up" data-aos-delay="0">
        <div class="col-12 text-center">
          <h2 class="heading">Get In Touch</h2>
          <p>Far from the countries Vokalia and Consonantia</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-7">
          <form class="contact-form" data-aos="fade-up" data-aos-delay="100">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label class="" for="fname">First name</label>
                  <input type="text" class="form-control" id="fname" />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label class="" for="lname">Last name</label>
                  <input type="text" class="form-control" id="lname" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="" for="email">Email address</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
              <label class="" for="message">Message</label>
              <textarea
                name=""
                class="form-control"
                id="message"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div class="col-lg-4 ml-auto" data-aos="fade-up" data-aos-delay="200">
          <h3 class="h5 mb-4">Contact Info</h3>
          <address class="text-black d-flex">
            <span class="mt-1 icon-room mr-2"></span
            ><span>43 Raymouth Rd. Baltemoer, London 3910</span>
          </address>
          <ul class="list-unstyled ul-links mb-4">
            <li>
              <a href="tel://11234567890" class="d-flex"
                ><span class="mt-1 icon-phone mr-2"></span
                ><span>+1(123)-456-7890</span></a
              >
            </li>
            <li>
              <a href="tel://11234567890" class="d-flex"
                ><span class="mt-1 icon-phone mr-2"></span
                ><span>+1(123)-456-7890</span></a
              >
            </li>
            <li>
              <a
                :href="emailProtector"
                class="d-flex"
                ><span class="mt-1 icon-envelope mr-2"></span
                ><span
                  ><span
                    class="__cf_email__"
                    data-cfemail="147d7a727b54796d707b79757d7a3a777b79"
                    >[email&#160;protected]</span
                  ></span
                ></a
              >
            </li>
            <li>
              <a :href="colorlibLink" target="_blank" class="d-flex"
                ><span class="mt-1 icon-globe mr-2"></span
                ><span>https://Colorlib.com/</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
