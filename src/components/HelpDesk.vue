<template>
  <div class="d-flex helpdesk-background justify-content-center">
    <div class="d-flex justify-content-between gap-5">
      <div class="d-flex flex-column gap-4 text-start px-5">
        <h4 class="faq-title">FREQUENTLY ASKED QUESTIONS</h4>
        <h1 class="question-emphersize">Want to learn more? View our</h1>
        <div class="p-3 rounded-2 helpdesk-button">
          <h2 class="helpdesk-button-text rounded-3">Help Desk</h2>
        </div>
      </div>
      <div class="d-flex flex-column w-75">
        <div v-for="(qa, index) in questionAndAnswer" :key="index">
          <div
            :class="
              index == 4
                ? 'd-flex flex-column py-4 gap-4'
                : 'd-flex flex-column py-4 gap-4 qa-border'
            "
          >
            <div
              role="button"
              class="row align-items-center"
            >
              <h3 class="col-11 question-text text-start" @click="handleClick(index)">
                {{ qa.question }}
              </h3>
              <img
                src="../assets/addicon.png"
                alt="Add"
                title="Add"
                :class="answerShow[index] ? closeImageClass : 'col-1'"
                @click="handleClose(index)"
              />
            </div>
            <h5 v-if="answerShow[index]" :class="answerClass">
              {{ qa.answer }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { questionAnswer } from './HelpDesk/QA'

export default {
  name: 'HelpDesk',
  data() {
    return {
      questionAndAnswer: questionAnswer,
      answerShow: [false, false, false, false, false],
      borderClass: 'd-flex flex-column py-4 gap-4 qa-border',
      answerClass: 'answer-text show text-start',
      closeImageClass: 'rotate col-1',
    }
  },
  methods: {
    async handleClick(index) {
      if (this.answerShow[index] == false) {
        for (let i = 0; i < 5; i++) {
          this.answerShow[i] = false
        }
        this.answerShow[index] = true
        this.answerClass = 'answer-text show text-start'
        this.closeImageClass = 'rotate col-1'
      }
    },
    async handleClose(index) {
      this.answerClass = this.answerShow[index]
        ? 'collapse'
        : 'answer-text show text-start'
      this.closeImageClass = this.answerShow[index]
        ? 'rotate-reverse col-1'
        : 'rotate col-1'
      if (this.answerShow[index] == false) {
        for (let i = 0; i < 5; i++) {
          this.answerShow[i] = false
        }
        this.answerShow[index] = !this.answerShow[index]
      } else {
        for (let i = 0; i < 5; i++) {
          this.answerShow[i] = false
        }
      }
    },
  },
}
</script>

<style>
@import url("../app.scss");
</style>
