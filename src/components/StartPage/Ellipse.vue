<template>
  <div class="ellipse"></div>
  <div class="movie d-flex justify-content-center">
    <img
      src="../../assets/movie.png"
      alt="Movie"
      title="Movie"
      class="movie-image"
    />
  </div>
  <div class="d-flex justify-content-center align-items-center">
    <a href="#headerPopup" id="headerVideoLink" class="play-image zoom">
      <img src="../../assets/play.png" alt="Play" title="Play" role="button" />
    </a>
    <div
      id="headerPopup"
      class="mfp-hide embed-responsive embed-responsive-21by9"
    >

      <iframe
        class="embed-responsive-item"
        width="854"
        height="480"
        src="https://i.vimeocdn.com/video/1118279530-01ebfb6fa236c9721c51a8e2688788612681c0150b4c48504908dbfc1d893717-d"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen

      >
    </iframe>
    </div>
  </div>
</template>
<script>
import jQuery from 'jquery'
import 'magnific-popup'
const $ = jQuery
export default {
  name: 'EllipseComponenth',
}
$(document).ready(function () {
  console.log($('#headerVideoLink'))
  $('#headerVideoLink').magnificPopup({
    type: 'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  })
})
</script>

<style>
@import url('./Startpage.scss');
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.0.0/magnific-popup.min.css');
</style>
