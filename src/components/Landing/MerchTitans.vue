<template>
  <section>
    <div class="container reveal fade-left">
      <img
        src="../../assets/Merchtitans.png"
        alt="MerchTitans"
        title="MerchTitans"
        class="merch-titans"
      />
      <div class="p-3 statistics d-flex flex-column align-items-start">
        <h3 class="statistics-text">Statistics</h3>
        <div class="container d-flex flex-column gap-3">
          <div class="row gap-3">
            <StatisticsDetail
              title="Results"
              value="36"
              color="#04CB00"
              :small="false"
            />
            <StatisticsDetail
              title="Total Results"
              value="10000+"
              color="#B43AFF"
              :small="false"
            />
            <StatisticsDetail
              title="Average BSR"
              value="1,724,675"
              color="#FF3AD4"
              :small="false"
            />
            <StatisticsDetail
              title="Top E.M.S"
              value="73"
              color="#FF3A52"
              :small="false"
            />
          </div>
          <div class="row gap-3">
            <div class="col d-flex flex-column align-items-center cell p-3">
              <h5 class="statistics-category">Category</h5>
              <h5 class="statistics-t-shirt">Merch by Amazon T-shirt</h5>
            </div>
            <StatisticsDetail
              title="Minimum Price"
              value="$13.07"
              color="#04CBD8"
              :small="false"
            />
            <StatisticsDetail
              title="Maximum Price"
              value="$28.29"
              color="#FF3A52"
              :small="false"
            />
            <StatisticsDetail
              title="Average Price"
              value="$19.02"
              color="#3A6CFF"
              :small="false"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StatisticsDetail from './StatisticsDetail.vue'
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
export default {
  name: 'MerchTitans',
  components: {
    StatisticsDetail,
  },
}
</script>

<style>
@import url('./Landing.scss');
</style>
