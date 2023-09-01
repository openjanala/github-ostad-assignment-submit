<script setup>
const fullYear = new Date().getFullYear();

const url = "https://colorlib.com/";
</script>

<template>
  <div>
    <div class="site-footer">
      <div class="footer-dots"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="widget">
              <h3>About Assignment<span class="text-primary">.</span></h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div class="widget">
              <h3>Connect</h3>
              <ul class="list-unstyled social">
                <li>
                  <a href="#"><span class="icon-instagram"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-twitter"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-facebook"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-linkedin"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-pinterest"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-dribbble"></span></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 ml-auto">
            <div class="widget">
              <h3>Projects</h3>
              <ul class="list-unstyled float-left links">
                <li><a href="#">La Lega Stadium</a></li>
                <li><a href="#">France Building</a></li>
                <li><a href="#">22 New Homes</a></li>
                <li><a href="#">Manage Center</a></li>
                <li><a href="#">Sports Hall</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="widget">
              <h3>Services</h3>
              <ul class="list-unstyled float-left links">
                <li><a href="#">Architect</a></li>
                <li><a href="#">Interior Design</a></li>
                <li><a href="#">Landscape Design</a></li>
                <li><a href="#">Consultancy</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="widget">
              <h3>Contact</h3>
              <address>43 Raymouth Rd. Baltemoer, London 3910</address>
              <ul class="list-unstyled links mb-4">
                <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                <li>
                  <a
                    href="https://preview.colorlib.com/cdn-cgi/l/email-protection#472e292128072a3e23282a262e296924282a"
                    ><span
                      class="__cf_email__"
                      data-cfemail="177e797178577a6e73787a767e793974787a"
                      >[email&#160;protected]</span
                    ></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 text-center">
            <p>
              Copyright &copy; {{ fullYear }} | All rights reserved | This
              template is made with
              <i class="icon-heart text-danger" aria-hidden="true"></i> by
              <a :href="url" target="_blank">Colorlib</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="overlayer"></div>
    <div class="loader">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
