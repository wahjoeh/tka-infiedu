<template>
  <div class="test-container">
    <header class="test-header">
      <div>
        <h2>TKA InfiEdu</h2>
        <p>TKA SMP - Bahasa Indonesia</p>
      </div>

      <div class="header-right">
        <div class="timer">
          Sisa Waktu: {{ formattedTime }}
        </div>

        <button class="question-list-btn" @click="toggleSidebar">
          Daftar Soal
        </button>
      </div>
    </header>

    <div v-if="questions.length" class="test-card">
      <h2>Soal nomor {{ currentQuestion + 1 }}</h2>

      <div class="question-box split-layout">
        <!-- Left -->
        <div class="question-left">
          <h3>Bacaan</h3>
          <div class="passage-content">
            {{ questions[currentQuestion]?.passage }}
          </div>
        </div>

        <!-- Right -->
        <div class="question-right">
          <p class="question-text">
            {{ questions[currentQuestion]?.question }}
          </p>

          <div class="options">
            <label
              v-for="option in questions[currentQuestion]?.options || []"
              :key="option"
              class="option"
            >
              <input
                type="radio"
                :value="option"
                v-model="answers[currentQuestion]"
              />
              {{ option }}
            </label>
          </div>
        </div>
      </div>

      <div class="navigation">
        <button @click="prevQuestion">← Sebelumnya</button>

        <button class="flag-btn" @click="toggleFlag">
          Ragu-ragu
        </button>

        <button @click="nextQuestion">Berikutnya →</button>
      </div>
    </div>

    <div v-else class="test-card">
      <h2>Data soal tidak ditemukan</h2>
    </div>

    <!-- Sidebar -->
    <div class="sidebar" :class="{ open: showSidebar }">
      <div class="sidebar-header">
        <h3>Daftar Soal</h3>
        <button @click="toggleSidebar">✕</button>
      </div>

      <div class="question-grid">
        <div
          v-for="(q, index) in questions"
          :key="q.id"
          class="question-number"
          :class="{
            active: currentQuestion === index,
            answered: answers[index],
            flagged: flagged[index]
          }"
          @click="goToQuestion(index)"
        >
          {{ q.id }}
        </div>
      </div>

      <div class="legend-box">
        <div class="legend-item">
          <span class="legend-color active-box"></span>
          Soal Aktif
        </div>

        <div class="legend-item">
          <span class="legend-color answered-box"></span>
          Terisi
        </div>

        <div class="legend-item">
          <span class="legend-color empty-box"></span>
          Belum Terisi
        </div>
      </div>

      <button class="submit-btn" @click="submitTest">
        Submit Test
      </button>
    </div>

    <div
      v-if="showSidebar"
      class="overlay"
      @click="toggleSidebar"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import '../../../styles/smp-indo-test.css'

import idepokokQuestions from '../../../data/smp/indo/idepokok'
import evaluasiQuestions from '../../../data/smp/indo/evaluasi'
import kebahasaanQuestions from '../../../data/smp/indo/kebahasaan'
import sastraQuestions from '../../../data/smp/indo/sastra'
import fulltestQuestions from '../../../data/smp/indo/fulltest'

const route = useRoute()
const router = useRouter()

const type = route.query.type

let questions = []

if (type === 'idepokok') {
  questions = idepokokQuestions
} else if (type === 'evaluasi') {
  questions = evaluasiQuestions
} else if (type === 'kebahasaan') {
  questions = kebahasaanQuestions
} else if (type === 'sastra') {
  questions = sastraQuestions
} else {
  questions = fulltestQuestions
}

const currentQuestion = ref(0)
const showSidebar = ref(false)
const answers = ref({})
const flagged = ref({})

const timeLeft = ref(90 * 60)
let timerInterval = null

const formattedTime = computed(() => {
  const hours = String(Math.floor(timeLeft.value / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((timeLeft.value % 3600) / 60)).padStart(2, '0')
  const seconds = String(timeLeft.value % 60).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
})

const submitTest = () => {
  const resultData = questions.map((q, index) => ({
    no: q.id,
    question: q.question,
    userAnswer: answers.value[index] || 'Tidak dijawab',
    correctAnswer: q.answer,
    correct: answers.value[index] === q.answer
  }))

  sessionStorage.setItem('indoResult', JSON.stringify(resultData))
  router.push('/result')
}

onMounted(() => {
  timerInterval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      clearInterval(timerInterval)
      alert('Waktu habis!')
      submitTest()
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timerInterval)
})

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}

const goToQuestion = (index) => {
  currentQuestion.value = index
  showSidebar.value = false
}

const nextQuestion = () => {
  if (currentQuestion.value < questions.length - 1) {
    currentQuestion.value++
  }
}

const prevQuestion = () => {
  if (currentQuestion.value > 0) {
    currentQuestion.value--
  }
}

const toggleFlag = () => {
  flagged.value[currentQuestion.value] =
    !flagged.value[currentQuestion.value]
}
</script>