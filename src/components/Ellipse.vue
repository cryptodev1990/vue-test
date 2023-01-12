<template>
  <div class="ellipse"></div>
  <img src="../assets/movie.png" class="movie" alt="Movie" title="Movie" />
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
  position: absolute;
  width: 150%;
  height: 600px;
  left: -25%;
  top: 800px;
  background: #ffffff;
  z-index: 1;
  border-radius: 100%;
}

.movie {
  position: relative;
  z-index: 2;
  width: 55%;
  left: 20%;
  top: -160px;
  justify-content: center;
}
</style>
