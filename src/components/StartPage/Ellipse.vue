<template>
  <div class="ellipse"></div>
  <div class="movie d-flex align-items-center justify-content-center">
    <img src="../../assets/play.png" alt="Play" title="Play" />
  </div>
</template>

<script>
export default {
  name: 'EllipseComponenth',
}
</script>

<style>
body {
  overflow-x: hidden;
}

.ellipse {
  width: 150%;
  height: 600px;
  margin-left: -25%;
  margin-top: 50px;
  background: #ffffff;
  z-index: 1;
  border-radius: 100%;
}

.movie {
  z-index: 2;
  margin-top: -630px;
  width: 1111px;
  margin-left: 20%;
  background-repeat: no-repeat, repeat;
  height: 626px;
  background-image: url("../../assets/movie.png");
}
</style>
