<template>
  <div class="text-white footer">
    <div class="d-flex justify-content-between container p-4">
      <div class="d-flex align-items-center">
        <div class="d-inline mr-2 font-weight-bold" role="button">
          KDP HTML Generator
        </div>
        <div class="d-inline mr-2 separator">|</div>
        <div class="d-inline mr-2 font-weight-bold" role="button">
          RedBubble Tag Generator
        </div>
        <div class="d-inline mr-2 separator">|</div>
        <div class="d-inline font-weight-bold" role="button">
          Etsy Tag Generator
        </div>
      </div>
      <div>
        <button
          type="button"
          class="btn btn-outline-warning btn-login mb-0 btn-lg px-5 mr-2"
        >
          login
        </button>
        <button type="button" class="btn btn-outline-warning mb-0 btn-lg px-5">
          register
        </button>
      </div>
    </div>
    <div class="container p-4 footer-middle pb-5">
      <div class="row">
        <LinkGroup
          class="col-5 first-group"
          title="Links"
          :content="data1"
          cols="2"
        />
        <LinkGroup class="col-7 pl-5" title="Legal" :content="data2" cols="3" />
      </div>
    </div>
    <div class="container d-flex justify-content-between p-3 mt-2">
      <div class="row">
        <img
          class="col-3 d-inline"
          src="../assets/logo.svg"
          alt="Logo"
          title="Merch Titans"
        />
        <div class="col-9 d-inline">
          <div>
            9820 S Maryland Parkway Ste A-5 #220 Las Vegas, NV 89183
          </div>
          <div class="copyright">
            &#169;2018 - 2022 Merch Titans LLC, All Rights Are Reserved
          </div>
        </div>
      </div>
      <div class="social-links">
        <img
          role="button"
          src="../assets/Facebook.png"
          alt="Logo"
          title="Merch Titans Facebook"
          class="zoom"
        />
        <img
          role="button"
          src="../assets/Instagram.png"
          alt="Logo"
          title="Merch Titans Instagram"
          class="zoom"
        />
        <img
          role="button"
          src="../assets/Twitter.png"
          alt="Logo"
          title="Merch Titans Twitter"
          class="zoom"
        />
        <img
          role="button"
          src="../assets/YouTube.png"
          alt="Logo"
          title="Merch Titans Youtube"
          class="zoom"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LinkGroup from './Footer/LinkGroup.vue'
export default {
  name: 'FooterComponent',
  components: {
    LinkGroup,
  },
  data() {
    return {
      data1: [
        ['MTA Pricing', 'KDPA Pricing'],
        ['Canvas Titans Pricing', 'Blog'],
      ],
      data2: [
        ['Privacy Policy', 'Terms of Service'],
        ['Refund Policy', 'Cookie Policy'],
        ['Contact Us', 'About Us'],
      ],
    }
  },
}
</script>

<style>
.footer-middle {
  border-bottom: #6d7280 solid 0.05rem;
}
.footer {
  background: #13111d;
  width: 100%;
  padding-bottom: 100px;
}
.first-group {
  border-right: #6d7280 solid 0.05rem;
}
.mr-2 {
  margin-right: 10px;
}

.pl-5 {
  padding-left: 50px !important;
}
.btn-login {
  border: none !important;
  background: rgba(244, 185, 19, 0.1) !important;
}
.separator {
  color: #7e75a5;
}
.copyright {
  color: #7e75a5;
}
</style>
