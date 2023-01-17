<template>
  <div class="d-flex helpdesk-background justify-content-center">
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
          <div
            :class="
              index == 4
                ? 'd-flex flex-column py-4 gap-4'
                : 'd-flex flex-column py-4 gap-4 qa-border'
            "
          >
            <div
              role="button"
              class="d-flex justify-content-between align-items-center"
            >
              <h3 class="question-text text-start" @click="handleClick(index)">
                {{ qa.question }}
              </h3>
              <img
                src="../assets/addicon.png"
                alt="Add"
                title="Add"
                :class="answerShow[index] ? closeImageClass : ''"
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
      closeImageClass: 'rotate',
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
        this.closeImageClass = 'rotate'
      }
    },
    async handleClose(index) {
      this.answerClass = this.answerShow[index]
        ? 'collapse'
        : 'answer-text show text-start'
      this.closeImageClass = this.answerShow[index]
        ? 'rotate-reverse'
        : 'rotate'
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

.rotate-reverse {
  transition: transform 0.5s;
  transform: rotate(0deg);
}

.show {
  -webkit-animation: display 0.5s linear forwards;
  animation: display 0.5s linear forwards;
}

.qa-border {
  border-bottom: 1px solid rgba(126, 117, 165, 0.25);
  margin-bottom: 20px;
}

.answer-text {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #6d7280;
}

@-webkit-keyframes display {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

@keyframes display {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
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
