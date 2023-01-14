<template>
  <div
    class="d-flex justify-content-between align-items-center keyword-research gap-5"
  >
    <div class="d-flex flex-column gap-3 text-start">
      <div>
        <h1 class="keyword-research-text">Keyword Research,</h1>
        <h1 class="suggestion-text">Suggestions and</h1>
        <h1 class="autocomplete-text">Autocomplete</h1>
      </div>
      <p class="plain-text">
        With this module you can search for any keyword you desire. Our tool
        will then check Amazon to see what other 'suggestions"
        and"autocomplete"' keywords there are that are actually being searched
        for by consumers that are related to your primary keyword.
      </p>
      <p class="plain-text">
        We then take these keywords and pull the 'search volume" from Google and
        3rd party partners so that you can quickly get very accurate and 3rd
        party partners so that you can quickly get very accurate insights into
        how many searches per month your primary keyword and all other related
        keywords are receiving along with competition score, CPC, total products
        on Amazon per keyword, and more.
      </p>
    </div>
    <div class="px-5">
      <img
        src="../../assets/Dashboard-small.png"
        alt="Dashboard"
        title="Dashboard"
      />
      <div class="d-flex flex-column p-2 gap-2">
        <div class="d-flex gap-1">
          <div class="d-flex cold-tag justify-content-center">
            <img src="../../assets/sun.svg" alt="Colg-Tag" title="Cold-Tag" />
            <h6 class="cold-tag-text">Cold Tag</h6>
          </div>
          <div
            class="d-flex table-order align-items-center justify-centent-center"
          >
            <img
              src="../../assets/arrow.svg"
              alt="Up-Down"
              title="Up-Down"
              class="px-1"
            />
          </div>
        </div>
        <table>

        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeywordResearch',
}
</script>

<style>
.keyword-research-text {
  font-weight: 700;
  font-size: 38px;
  line-height: 120%;
  letter-spacing: 0.02em;
  background: linear-gradient(91.65deg, #f4b913 3.02%, #8df53a 69.31%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  backdrop-filter: blur(10px);
}

.keyword-research {
  margin-top: 155px;
  margin-left: 6%;
}

.cold-tag {
  width: 147.23px;
  height: 22.97px;
  padding: 5.22099px 8.35359px;
  gap: 5.22px;
  background: rgba(58, 108, 255, 0.1);
  border-radius: 4.1768px 1.0442px 1.0442px 4.1768px;
}

.cold-tag-text {
  font-style: normal;
  font-weight: 600;
  font-size: 7.30939px;
  line-height: 10px;
  text-align: center;
  text-transform: capitalize;
  color: #3a6cff;
}

.table-order {
  background: rgba(58, 108, 255, 0.1);
  border-radius: 1.14862px 4.59448px 4.59448px 1.14862px;
}

.autocomplete-text {
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 120%;
  backdrop-filter: blur(10px);
}

.plain-text {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #c3bed7;
}

.suggestion-text {
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 120%;
  letter-spacing: 0.02em;
  backdrop-filter: blur(10px);
}
</style>
