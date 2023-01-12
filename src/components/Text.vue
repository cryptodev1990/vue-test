<template>
  <div class="d-flex my-5 text-component">
    <div class="d-flex flex-column gap-1 align-items-start text-width">
      <h1 class="text-font text-font-gradient">Automate Your Design</h1>
      <h1 class="text-font-gradient text-font">
        Uploads
        <span class="text-font-white">to Several</span>
      </h1>
      <h1 class="text-font">Print on Demand</h1>
      <h5>Marketplaces with Ease and Increase Sales...</h5>
      <button type="button" class="btn btn-warning btn-lg my-4" aria-pressed="true">
        TRY FREE >
      </button>
      <h5 class="font-italic text-secondary">Without Having To Hire or Rely on A Team!</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextComponent',
}
</script>

<style>

.text-font {
  font-weight: 800;
  font-size: 62px;
  line-height: 130%;
  letter-spacing: 0.04em;
}

.text-width {
  width: 70%;
}

.text-component {
  position: absolute;
  top: 120px;
  left: 20%;
  z-index: 1;
  width: 100%;
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
