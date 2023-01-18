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
    <section>
      <div class="container reveal fade-right">
        <div class="d-flex flex-column px-5 justify-content-center">
          <div class="d-flex flex-column p-3 gap-2 cold-tag-table rounded-2">
            <div class="d-flex gap-1">
              <div class="d-flex cold-tag justify-content-center">
                <img
                  src="../../assets/sun.svg"
                  alt="Colg-Tag"
                  title="Cold-Tag"
                />
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
              <tr class="row pb-1 table-header-font table-element-border mb-2">
                <th class="col-7 tag-right-border">Tag</th>
                <th class="col-5">Occurrences</th>
              </tr>
              <div class="table-overflow">
                <tr
                  v-for="item in tagitems"
                  :key="item.id"
                  class="row table-element-border tag-name pb-1 mb-2"
                >
                  <th class="col-7 tag-right-border">{{ item.tag }}</th>
                  <th class="col-5">{{ item.occurrences }} times</th>
                </tr>
              </div>
            </table>
          </div>
          <img
            src="../../assets/Dashboard-small.png"
            alt="Dashboard"
            title="Dashboard"
            class="dashboard-small"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Coldtag } from '../Landing/ColdTagData'

export default {
  name: 'KeywordResearch',
  data() {
    return {
      tagitems: Coldtag,
    }
  },
}
</script>

<style>
@import url('./Landing.scss');
</style>
