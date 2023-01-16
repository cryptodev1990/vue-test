<template>
  <div
    class="d-flex helpdesk-background justify-content-center align-items-center"
  >
    <div class="d-flex justify-content-between gap-5">
      <div class="d-flex flex-column gap-4 text-start">
        <h4 class="faq-title">FREQUENTLY ASKED QUESTIONS</h4>
        <h1 class="question-emphersize">Want to learn more? View our</h1>
        <div class="p-3 rounded-2 helpdesk-button">
          <h2 class="helpdesk-button-text rounded-3">Help Desk</h2>
        </div>
      </div>
      <div class="d-flex flex-column w-50">
        <div v-for="(qa, index) in questionAndAnswer" :key="index">
          <div class="d-flex flex-column py-4">
            <div class="d-flex justify-content-between align-items-center" @click="handleClick">
              <h3 class="question-text text-start">{{ qa.question }}</h3>
              <img
                src="../assets/addicon.png"
                alt="Add"
                title="Add"
                :class="questionClass"
              />
            </div>
            <h5 :class="answerClass">{{ qa.answer }}</h5>
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
      clicked: false,
      questionClass: "",
      answerClass: "hidden"
    }
  },
  methods: {
    async handleClick () {
      this.clicked = !this.clicked
      this.answerClass = this.clicked ? "answer-text text-start" : "hidden"
      this.questionClass = this.clicked ? "rotate" : ""
    }
  }
}
</script>

<style>
.question-text {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #111827;
}

.rotate {
  transition: transform 0.5s;
  transform: rotate(45deg);
}

.answer-text {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #6d7280;
}

.helpdesk-background {
  width: 70%;
  padding-top: 100px;
  padding-bottom: 100px;
}

.faq-title {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.2px;
  color: #6d7280;
}

.question-emphersize {
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 120%;
  color: #111827;
}

.helpdesk-button {
  background: #111827;
  backdrop-filter: blur(10px);
  width: max-content;
}

.helpdesk-button-text {
  font-style: normal;
  font-weight: 800;
  font-size: 60px;
  line-height: 120%;
  letter-spacing: 0.02em;
  background: linear-gradient(91.48deg, #f4b913 3.01%, #8df53a 96.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  backdrop-filter: blur(10px);
  background-clip: text;
}
</style>
