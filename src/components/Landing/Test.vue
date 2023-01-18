<template>
  <section>
    <div class="container reveal fade-left">
      <Dashboard />
    </div>
  </section>
</template>

<script>
import Dashboard from "./Dashboard.vue";
export default {
  name: 'TestComponent',
  components: {
    Dashboard
  }
}

function reveal() {
  var reveals = document.querySelectorAll('.reveal')

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top
    var elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active')
    } else {
      reveals[i].classList.remove('active')
    }
  }
}

window.addEventListener('scroll', reveal)
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Asap&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Asap', sans-serif;
}
body {
  background: #42455a;
}
section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
section:nth-child(1) {
  color: #e0ffff;
}
section:nth-child(2) {
  color: #42455a;
  background: #e0ffff;
}
section:nth-child(3) {
  color: #e0ffff;
}
section:nth-child(4) {
  color: #42455a;
  background: #e0ffff;
}

@media (max-width: 900px) {
  section h1 {
    font-size: 2rem;
    text-align: center;
  }
  section .text-container {
    flex-direction: column;
  }
}

.reveal {
  position: relative;
  opacity: 0;
}

.reveal.active {
  opacity: 1;
}
.active.fade-bottom {
  animation: fade-bottom 1s ease-in;
}
.active.fade-left {
  animation: fade-left 1s ease-in;
}
.active.fade-right {
  animation: fade-right 1s ease-in;
}
@keyframes fade-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-left {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-right {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
