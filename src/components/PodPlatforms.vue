<template>
  <div class="d-flex flex-column pod-platform align-items-center gap-5">
    <div class="d-flex flex-column">
      <h6 class="integration-text">Integration</h6>
      <h1 class="pod-title">POD Platforms We Support</h1>
    </div>
    <div class="container-width">
      <div class="container">
        <div class="row d-flex gap-5">
          <PodBrand
            backgroundUrl="Brand/Amazon.png"
            brandImageUrl="Brand/Amazon.svg"
            brandTitle="Merch by Amazon"
            brandExplaination="Automated publishing to all of Merch by Amazon’s products and marketplaces along with automatic image resizing, language translation, and more."
          />
          <PodBrand
            backgroundUrl="Brand/RedBubble.png"
            brandImageUrl="Brand/RedBubble.svg"
            brandTitle="RedBubble"
            brandExplaination="Automated publishing to all of RedBubble’s products using RedBubble’s new template copy system giving you full control over design placement and positioning."
          />
          <PodBrand
            backgroundUrl="Brand/Printful.png"
            brandImageUrl="Brand/Printful.svg"
            brandTitle="Printful"
            brandExplaination="Automated design uploads to Printful and any integration that Printful supports such as Etsy, Amazon, Shopify, Wish, Woocommerce, eBay, and more."
          />
        </div>
        <div class="row d-flex gap-5">
          <PodBrand
            backgroundUrl="Brand/Spreadshirt.png"
            brandImageUrl="Brand/Spreadshirt.svg"
            brandTitle="Spreadshirt"
            brandExplaination="Automatically publish your designs on all supported Spreadshirt products on the three most popular marketplaces: The United States, Germany, and the United Kingdom."
          />
          <PodBrand
            backgroundUrl="Brand/TeePublic.png"
            brandImageUrl="Brand/TeePublic.svg"
            brandTitle="TeePublic"
            brandExplaination="Publish and resize your designs automatically on TeePublic with Merch Titans Automation using the traditional upload method or the new template copy option."
          />
          <PodBrand
            backgroundUrl="Brand/TeeSpring.png"
            brandImageUrl="Brand/TeeSpring.svg"
            brandTitle="TeeSpring"
            brandExplaination="Upload and automatically publish your designs on Teespring and all of Teespring’s supported products in a matter of minutes with Merch Titans Automation."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PodBrand from './PodPlatforms/PodBrand.vue'

export default {
  name: 'PodPlatforms',
  components: {
    PodBrand,
  },
}
</script>

<style>
.container-width {
  display: flex;
  width: 60%;
}

.pod-platform {
  background-image: url('../assets/PodBackground.png');
  background-repeat: repeat, no-repeat;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  margin-top: 150px;
}

.integration-text {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #6d7280;
}

.pod-title {
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 140%;
  text-align: center;
}
</style>
