<template>
  <div class="d-flex my-5 text-component">
    <div class="d-flex flex-column gap-1 align-items-start text-width">
      <h1 class="text-font text-font-gradient">Automate Your Design</h1>
      <h1 class="text-font-gradient text-font">
        Uploads
        <span class="text-font-white">to Several</span>
      </h1>
      <h1 class="text-font">Print on Demand</h1>
      <h5 class="h5-font">Marketplaces with Ease and Increase Sales...</h5>
      <button
        type="button"
        class="btn btn-warning my-5 fw-bold btn-size fs-3 py-3 px-5"
        aria-pressed="true"
      >
        TRY FREE >
      </button>
      <h5 class="start-text-gray">
        Without Having To Hire or Rely on A Team!
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextComponent',
}
</script>

<style>
.start-text-gray {
  font-style: italic;
  font-weight: 500;
  font-size: 22px;
  line-height: 120%;
  color: rgba(255, 255, 255, 0.6);
}

.text-component {
  padding-left: 20%;
  z-index: 2;
}

.text-font {
  font-weight: 800;
  font-size: 62px;
  line-height: 140%;
  letter-spacing: 0.04em;
}

.h5-font {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: 0.02em;
  backdrop-filter: blur(10px);
}

.text-width {
  width: 70%;
}

.text-font-white {
  -webkit-text-fill-color: white;
}

.try-free-button {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 1000;
  font-size: 50px;
  line-height: 18px;
  letter-spacing: 0.05em;
}

.text-font-gradient {
  background: linear-gradient(91.48deg, #f4b913 3.01%, #8df53a 96.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
