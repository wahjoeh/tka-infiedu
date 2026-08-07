<template>
  <div class="test-container smp-indo-test exam-math-theme">

    <header class="test-header">

      <div class="header-title">
        <img src="/logo.png" alt="InfiEdu" class="brand-logo" />
        <h2>TKA SMP InfiEdu</h2>
        <p>TKA SMP - Bahasa Indonesia (Paket {{ selectedPackage }})</p>
      </div>

      <div class="header-right">

        <div class="timer">
          Sisa Waktu: {{ formattedTime }}
        </div>

        <button
          class="question-list-btn"
          @click="toggleSidebar"
        >
          Daftar Soal
        </button>

      </div>

    </header>

    <div
      v-if="questions.length"
      class="test-card"
    >

      <h2>
        Soal Nomor {{ currentQuestion + 1 }} dari {{ questions.length }}
      </h2>

      <div
        class="question-box split-layout"
        :class="{ 'no-stimulus': !questions[currentQuestion]?.stimulus }"
      >

        <!-- ========================= -->
        <!-- STIMULUS -->
        <!-- ========================= -->

        <div
          v-if="questions[currentQuestion]?.stimulus"
          class="question-left"
        >

          <div
            v-if="questions[currentQuestion].stimulus.instruction"
            class="reading-title"
            v-html="formatFraction(questions[currentQuestion].stimulus.instruction)"
          >
          </div>

          <div
            v-if="questions[currentQuestion].stimulus.title"
            class="reading-subtitle"
            v-html="formatFraction(questions[currentQuestion].stimulus.title)"
          >
          </div>

          <img
            v-if="questions[currentQuestion].stimulus.image"
            :src="questions[currentQuestion].stimulus.image"
            class="question-image"
          />

          <div
            v-for="(paragraph,index) in questions[currentQuestion].stimulus.paragraphs || []"
            :key="index"
            class="reading-paragraph"
            v-html="formatFraction(paragraph)">
          </div>

          <div
            v-if="questions[currentQuestion].stimulus.source"
            class="question-source"
            v-html="formatFraction(questions[currentQuestion].stimulus.source)"
          >
          </div>

        </div>

        <!-- ========================= -->
        <!-- QUESTION -->
        <!-- ========================= -->

        <div class="question-right">

          <p class="question-text" v-html="formatFraction(questions[currentQuestion]?.question)">
          </p>

          <!-- ========================= -->
          <!-- SINGLE -->
          <!-- ========================= -->

          <div
            v-if="questions[currentQuestion]?.type === 'single'"
            class="options"
          >

            <label
              v-for="option in questions[currentQuestion].options"
              :key="option"
              class="option"
            >

              <input
                type="radio"
                :value="option"
                v-model="answers[currentQuestion]"
              />

              <span v-html="formatFraction(option)"></span>

            </label>

          </div>

          <!-- ========================= -->
          <!-- MULTIPLE -->
          <!-- ========================= -->

          <div
            v-else-if="questions[currentQuestion]?.type === 'multiple'"
            class="options"
          >

            <label
              v-for="option in questions[currentQuestion].options"
              :key="option"
              class="option"
            >

              <input
                type="checkbox"
                :value="option"
                v-model="answers[currentQuestion]"
              />

              <span v-html="formatFraction(option)"></span>

            </label>

          </div>

          <!-- ========================= -->
          <!-- TRUE / FALSE -->
          <!-- ========================= -->

          <div
            v-else-if="questions[currentQuestion]?.type === 'truefalse'"
            class="tf-table-container"
          >

            <table class="tf-table">

              <thead>
                <tr>
                  <th class="statement-col">
                    Pernyataan
                  </th>

                  <th class="choice-col">
                    Benar
                  </th>

                  <th class="choice-col">
                    Salah
                  </th>
                </tr>
              </thead>

              <tbody>

                <tr
                  v-for="(statement,index) in questions[currentQuestion].statements"
                  :key="index"
                >

                  <td class="statement-cell" v-html="formatFraction(statement)">
                  </td>

                  <td class="choice-cell">
                    <input
                      type="radio"
                      :name="`tf-${currentQuestion}-${index}`"
                      :value="true"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                  <td class="choice-cell">
                    <input
                      type="radio"
                      :name="`tf-${currentQuestion}-${index}`"
                      :value="false"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          <!-- ========================= -->
          <!-- SETUJU / TIDAK SETUJU -->
          <!-- ========================= -->

          <div
            v-else-if="questions[currentQuestion]?.type === 'agreement'"
            class="tf-table-container"
          >

            <table class="tf-table">

              <thead>
                <tr>

                  <th class="statement-col">
                    Pernyataan
                  </th>

                  <th class="choice-col">
                    Setuju
                  </th>

                  <th class="choice-col">
                    Tidak Setuju
                  </th>

                </tr>
              </thead>

              <tbody>

                <tr
                  v-for="(statement,index) in questions[currentQuestion].statements"
                  :key="index"
                >

                  <td class="statement-cell" v-html="formatFraction(statement)">
                  </td>

                  <td class="choice-cell">
                    <input
                      type="radio"
                      :name="`agreement-${currentQuestion}-${index}`"
                      :value="true"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                  <td class="choice-cell">
                    <input
                      type="radio"
                      :name="`agreement-${currentQuestion}-${index}`"
                      :value="false"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          <!-- ========================= -->
          <!-- BAIK / TIDAK BAIK -->
          <!-- ========================= -->

          <div
            v-else-if="questions[currentQuestion]?.type === 'goodbad'"
            class="tf-table-container"
          >

            <table class="tf-table">

              <thead>
                <tr>

                  <th class="statement-col">
                    Pernyataan
                  </th>

                  <th class="choice-col">
                    Baik
                  </th>

                  <th class="choice-col">
                    Tidak Baik
                  </th>

                </tr>
              </thead>

              <tbody>

                <tr
                  v-for="(statement,index) in questions[currentQuestion].statements"
                  :key="index"
                >

                  <td class="statement-cell" v-html="formatFraction(statement)">
                  </td>

                  <td class="choice-cell">
                    <input
                      type="radio"
                      :name="`goodbad-${currentQuestion}-${index}`"
                      :value="true"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                  <td class="choice-cell">
                    <input
                      type="radio"
                      :name="`goodbad-${currentQuestion}-${index}`"
                      :value="false"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          <!-- ========================= -->
          <!-- SESUAI / KURANG SESUAI -->
          <!-- ========================= -->

          <div
            v-else-if="questions[currentQuestion]?.type === 'suitable'"
            class="tf-table-container"
          >

            <table class="tf-table">

              <thead>
                <tr>

                  <th class="statement-col">
                    Pernyataan
                  </th>

                  <th class="choice-col">
                    Sesuai
                  </th>

                  <th class="choice-col">
                    Kurang Sesuai
                  </th>

                </tr>
              </thead>

              <tbody>

                <tr
                  v-for="(statement,index) in questions[currentQuestion].statements"
                  :key="index"
                >

                  <td class="statement-cell" v-html="formatFraction(statement)">
                  </td>

                  <td class="choice-cell">
                    <input
                      type="radio"
                      :name="`suitable-${currentQuestion}-${index}`"
                      :value="true"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                  <td class="choice-cell">
                    <input
                      type="radio"
                      :name="`suitable-${currentQuestion}-${index}`"
                      :value="false"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          <!-- ========================= -->
          <!-- SHORT ANSWER (JAWABAN PENDEK) -->
          <!-- ========================= -->

          <div
            v-else-if="questions[currentQuestion]?.type === 'short'"
            class="short-answer-container"
          >

            <div class="short-answer-wrapper">
              <label class="short-answer-label">
                Jawaban:
                <input
                  type="text"
                  class="short-answer-input"
                  v-model="answers[currentQuestion]"
                  placeholder="Tulis jawabanmu di sini..."
                />
              </label>
            </div>

          </div>

        </div>

      </div>

      <div class="navigation">

        <button
          class="nav-btn prev-btn"
          @click="prevQuestion"
        >
          <span class="btn-text">← Sebelumnya</span>
          <svg class="btn-icon" viewBox="0 0 24 24" width="20" height="20" fill="none">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <button
          class="nav-btn flag-btn"
          :class="{ active: flagged[currentQuestion] }"
          @click="toggleFlag"
        >
          <span class="btn-text">Ragu-ragu</span>
          <svg class="btn-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <rect x="4" y="4" width="16" height="16" rx="3"/>
          </svg>
        </button>

        <button
          class="nav-btn next-btn"
          @click="nextQuestion"
        >
          <span class="btn-text">Berikutnya →</span>
          <svg class="btn-icon" viewBox="0 0 24 24" width="20" height="20" fill="none">
            <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

      </div>

    </div>

    <div
      v-else
      class="test-card"
    >
      <h2>Data soal tidak ditemukan.</h2>
    </div>

    <!-- ========================= -->
    <!-- SIDEBAR -->
    <!-- ========================= -->

    <div
      class="sidebar"
      :class="{ open: showSidebar }"
    >

      <div class="sidebar-header">

        <h3>Daftar Soal</h3>

        <button @click="toggleSidebar">
          ✕
        </button>

      </div>

      <div class="question-grid">

        <div
          v-for="(q,index) in questions"
          :key="q.id"
          class="question-number"
          :class="{
            active: currentQuestion === index,
            answered: isAnswered(index),
            flagged: flagged[index]
          }"
          @click="goToQuestion(index)"
        >
          {{ q.displayId || q.id }}
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

      <button
        class="submit-btn"
        @click="submitTest"
      >
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
import {
  ref,
  computed,
  onMounted,
  onUnmounted
} from 'vue'

import {
  useRoute,
  useRouter
} from 'vue-router'

import '../../../styles/smp-indo-test.css'

import fulltestQuestions from '../../../data/smp/indo/fulltest'

const route = useRoute()
const router = useRouter()

const type = route.query.type

// =========================
// PAKET SOAL (RANDOM PACKAGE)
// =========================
// Total soal saat ini: 70 (id 1-70), dibagi jadi 4 paket @ 20 soal.
// Karena 70 tidak habis dibagi 20, paket ke-4 melengkapi 10 soal
// sisanya (id 61-70) dengan meminjam 10 soal dari paket 1 (id 1-10).
const QUESTION_PACKAGES = {
  1: Array.from({ length: 20 }, (_, i) => i + 1),   // id 1-20
  2: Array.from({ length: 20 }, (_, i) => i + 21),  // id 21-40
  3: Array.from({ length: 20 }, (_, i) => i + 41),  // id 41-60
  4: [
    ...Array.from({ length: 10 }, (_, i) => i + 61), // id 61-70
    ...Array.from({ length: 10 }, (_, i) => i + 1)   // pinjam id 1-10
  ]
}

const getRandomPackageNumber = () => {
  const packageNumbers = Object.keys(QUESTION_PACKAGES).map(Number)
  const randomIndex = Math.floor(Math.random() * packageNumbers.length)
  return packageNumbers[randomIndex]
}

// Paket bisa dipaksa lewat query (?package=2), misalnya untuk keperluan
// testing/preview. Kalau tidak ada atau tidak valid, siswa dapat paket acak.
const requestedPackage = Number(route.query.package)
const isTrial = route.query.mode === 'trial'

const selectedPackage = isTrial
  ? 'Trial'
  : QUESTION_PACKAGES[requestedPackage]
  ? requestedPackage
  : getRandomPackageNumber()

const packageIds = isTrial
  ? [...fulltestQuestions].sort(() => Math.random() - 0.5).slice(0, 10).map((question) => question.id)
  : QUESTION_PACKAGES[selectedPackage]

// Nomor soal ditampilkan berurutan 1..20 sesuai urutan di dalam paket,
// bukan berdasarkan id asli di bank soal.
let questions = packageIds
  .map((id) => fulltestQuestions.find((question) => question.id === id))
  .filter(Boolean)
  .map((q, index) => ({
    ...q,
    displayId: index + 1,
    originalId: q.id
  }))

const currentQuestion = ref(0)
const showSidebar = ref(false)

const answers = ref({})
const flagged = ref({})

// Inisialisasi answers untuk setiap soal
questions.forEach((q, index) => {

  if (
    q.type === 'multiple' ||
    q.type === 'truefalse' ||
    q.type === 'agreement' ||
    q.type === 'goodbad' ||
    q.type === 'suitable'
  ) {

    answers.value[index] = []

  } else if (q.type === 'short') {

    answers.value[index] = ''

  } else if (q.type === 'single') {

    answers.value[index] = null

  }

})

const timeLeft = ref(35 * 60)

let timerInterval = null

const formattedTime = computed(() => {

  const hours = String(
    Math.floor(timeLeft.value / 3600)
  ).padStart(2, '0')

  const minutes = String(
    Math.floor((timeLeft.value % 3600) / 60)
  ).padStart(2, '0')

  const seconds = String(
    timeLeft.value % 60
  ).padStart(2, '0')

  return `${hours}:${minutes}:${seconds}`

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

const isAnswered = (index) => {

  const q = questions[index]
  const ans = answers.value[index]

  if (q.type === 'single') {

    return ans !== null && ans !== undefined && ans !== ''

  }

  if (q.type === 'multiple') {

    return (
      Array.isArray(ans) &&
      ans.length > 0
    )

  }

  if (

    q.type === 'truefalse' ||

    q.type === 'agreement' ||

    q.type === 'goodbad' ||

    q.type === 'suitable'

  ) {

    return (

      Array.isArray(ans) &&

      ans.length === q.statements.length &&

      ans.every(item => item !== undefined && item !== null)

    )

  }

  if (q.type === 'short') {

    return ans && ans.trim().length > 0

  }

  return false

}

const formatParagraph = (text) => {
  if (!text) return ''
  return text.replace(/\n/g, '<br>')
}

// =========================
// FRACTION FORMATTER
// =========================

const formatFraction = (text) => {
  if (!text) return ''
  
  // Konversi pecahan seperti 1/2, 3/4, 12/25 menjadi format vertikal
  return text.replace(
    /(\d+)\s*\/\s*(\d+)/g,
    (_, top, bottom) => `<span class="fraction">
      <span class="top">${top}</span>
      <span class="bottom">${bottom}</span>
    </span>`
  )
}

const submitTest = () => {

  const resultData = questions.map((q, index) => {

    let correct = false

    if (q.type === 'single') {

      correct =
        answers.value[index] === q.answer

    }

    else if (q.type === 'multiple') {

      const user =
        [...(answers.value[index] || [])].sort()

      const key =
        [...q.answer].sort()

      correct =
        JSON.stringify(user) ===
        JSON.stringify(key)

    }

    else if (

      q.type === 'truefalse' ||

      q.type === 'agreement' ||

      q.type === 'goodbad' ||

      q.type === 'suitable'

    ) {

      correct =

        JSON.stringify(answers.value[index]) ===

        JSON.stringify(q.answer)

    }

    else if (q.type === 'short') {

      // Untuk jawaban pendek, kita bandingkan dengan case-insensitive
      // dan trim spasi
      correct = answers.value[index]?.trim().toLowerCase() === 
                q.answer?.trim().toLowerCase()

    }

    return {

      no: q.displayId || q.id,

      originalId: q.originalId || q.id,

      type: q.type,

      question: q.question,

      userAnswer: answers.value[index],

      correctAnswer: q.answer,

      correct

    }

  })

  sessionStorage.setItem(
    'indoResult',
    JSON.stringify(resultData)
  )

  router.push('/result')

}

onMounted(() => {

  timerInterval = setInterval(() => {

    if (timeLeft.value > 0) {

      timeLeft.value--

    }

    else {

      clearInterval(timerInterval)

      alert('Waktu habis!')

      submitTest()

    }

  }, 1000)

})

onUnmounted(() => {

  clearInterval(timerInterval)

})
</script>
