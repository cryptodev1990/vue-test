<template>
  <div class="ellipse"></div>
  <div class="movie d-flex justify-content-center">
    <img src="../../assets/movie.png" alt="Movie" title="Movie" class="movie-image" />
  </div>
  <div class="d-flex justify-content-center align-items-center">
    <img
      src="../../assets/play.png"
      alt="Play"
      title="Play"
      role="button"
      class="play-image zoom"
    />
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
  margin-top: 40px;
  background: #ffffff;
  z-index: 1;
  border-radius: 100%;
}

.movie {
  z-index: 2;
  margin-top: -630px;
  margin-right: 2%;
  background-repeat: no-repeat, repeat;
}

.movie-image {
  width: max-content;
}

.play-image {
  z-index: 3;
  margin-top: -630px;
  width: max-content;
}
</style>
