<template>
  <div class="test-container exam-math-theme">

    <header class="test-header">

      <div>
        <h2>TKA SD InfiEdu</h2>
        <p>Simulasi Tes SD - {{ active.label }}</p>
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

      <div class="session-progress">
        <span
          class="session-dot"
          :class="{ active: session === 'indo', done: session === 'math' }"
        >
          1. Bahasa Indonesia
        </span>
        <span
          class="session-dot"
          :class="{ active: session === 'math' }"
        >
          2. Matematika
        </span>
      </div>

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

          <!-- SINGLE -->
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

          <!-- MULTIPLE -->
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

          <!-- TRUE / FALSE -->
          <div
            v-else-if="questions[currentQuestion]?.type === 'truefalse'"
            class="tf-table-container"
          >
            <table class="tf-table">
              <thead>
                <tr>
                  <th class="statement-col">Pernyataan</th>
                  <th class="choice-col">Benar</th>
                  <th class="choice-col">Salah</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(statement,index) in questions[currentQuestion].statements"
                  :key="index"
                >
                  <td class="statement-cell" v-html="formatFraction(statement)"></td>
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

          <!-- SETUJU / TIDAK SETUJU -->
          <div
            v-else-if="questions[currentQuestion]?.type === 'agreement'"
            class="tf-table-container"
          >
            <table class="tf-table">
              <thead>
                <tr>
                  <th class="statement-col">Pernyataan</th>
                  <th class="choice-col">Setuju</th>
                  <th class="choice-col">Tidak Setuju</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(statement,index) in questions[currentQuestion].statements"
                  :key="index"
                >
                  <td class="statement-cell" v-html="formatFraction(statement)"></td>
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

          <!-- BAIK / TIDAK BAIK -->
          <div
            v-else-if="questions[currentQuestion]?.type === 'goodbad'"
            class="tf-table-container"
          >
            <table class="tf-table">
              <thead>
                <tr>
                  <th class="statement-col">Pernyataan</th>
                  <th class="choice-col">Baik</th>
                  <th class="choice-col">Tidak Baik</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(statement,index) in questions[currentQuestion].statements"
                  :key="index"
                >
                  <td class="statement-cell" v-html="formatFraction(statement)"></td>
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

          <!-- SESUAI / KURANG SESUAI -->
          <div
            v-else-if="questions[currentQuestion]?.type === 'suitable'"
            class="tf-table-container"
          >
            <table class="tf-table">
              <thead>
                <tr>
                  <th class="statement-col">Pernyataan</th>
                  <th class="choice-col">Sesuai</th>
                  <th class="choice-col">Kurang Sesuai</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(statement,index) in questions[currentQuestion].statements"
                  :key="index"
                >
                  <td class="statement-cell" v-html="formatFraction(statement)"></td>
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

          <!-- SHORT ANSWER -->
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

    <!-- SIDEBAR -->
    <div
      class="sidebar"
      :class="{ open: showSidebar }"
    >
      <div class="sidebar-header">
        <h3>Daftar Soal</h3>
        <button @click="toggleSidebar">✕</button>
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
        class="submit-btn sidebar-submit-btn"
        @click="handlePrimaryAction"
      >
        {{ session === 'indo' ? 'Selesai Sesi Indonesia →' : 'Selesai & Lihat Hasil' }}
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
  reactive,
  computed,
  onMounted,
  onUnmounted
} from 'vue'

import { useRouter } from 'vue-router'

import '../../styles/sd-fulltest-test.css'

import indoBank from '../../data/sd/indo/fulltest'
import mathBank from '../../data/sd/math/fulltest'

const router = useRouter()

// =========================
// FUNGSI RANDOM - MENGAMBIL N SOAL
// =========================

function getRandomQuestions(allQuestions, count = 30) {
  const shuffled = [...allQuestions]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  const selected = shuffled.slice(0, count)

  return selected.map((q, index) => ({
    ...q,
    displayId: index + 1,
    originalId: q.id
  }))
}

function buildInitialAnswers(questions) {
  const initial = {}

  questions.forEach((q, index) => {
    if (
      q.type === 'multiple' ||
      q.type === 'truefalse' ||
      q.type === 'agreement' ||
      q.type === 'goodbad' ||
      q.type === 'suitable'
    ) {
      initial[index] = []
    } else if (q.type === 'short') {
      initial[index] = ''
    } else if (q.type === 'single') {
      initial[index] = null
    }
  })

  return initial
}

// 90 menit per sesi, sama seperti durasi tes per mapel yang sudah ada
const SESSION_DURATION = 90 * 60
const indoPackage = Math.random() < 0.5 ? 1 : 2
const mathPackage = Math.random() < 0.5 ? 1 : 2

function withDisplayIds(questions) {
  return questions.map((q, index) => ({
    ...q,
    displayId: index + 1,
    originalId: q.id
  }))
}

function getIndoPackage(packageNumber) {
  // Bank Bahasa Indonesia SD berisi 50 soal. Agar kedua paket memuat 30 soal,
  // Paket 1 memakai nomor 1–30 dan Paket 2 memakai nomor 21–50.
  const startId = packageNumber === 1 ? 1 : 21
  const endId = packageNumber === 1 ? 30 : 50

  return withDisplayIds(
    indoBank.filter((question) => question.id >= startId && question.id <= endId)
  )
}

function getMathPackage(packageNumber) {
  // Kedua paket memiliki komposisi tipe soal yang seimbang.
  const packageOneTypeTargets = {
    single: 14,
    short: 7,
    truefalse: 4,
    multiple: 5
  }
  const usedTargets = {}

  const packageOneQuestions = mathBank.filter((question) => {
    const target = packageOneTypeTargets[question.type] || 0
    const used = usedTargets[question.type] || 0

    if (used >= target) return false

    usedTargets[question.type] = used + 1
    return true
  })

  const selectedQuestions = packageNumber === 1
    ? packageOneQuestions
    : mathBank.filter((question) => !packageOneQuestions.includes(question))

  return withDisplayIds(selectedQuestions)
}

const indoQuestions = getIndoPackage(indoPackage)
const mathQuestions = getMathPackage(mathPackage)

const sessions = reactive({
  indo: {
    label: `Bahasa Indonesia — Paket ${indoPackage}`,
    questions: indoQuestions,
    answers: buildInitialAnswers(indoQuestions),
    flagged: {},
    timeLeft: SESSION_DURATION
  },
  math: {
    label: `Matematika — Paket ${mathPackage}`,
    questions: mathQuestions,
    answers: buildInitialAnswers(mathQuestions),
    flagged: {},
    timeLeft: SESSION_DURATION
  }
})

const session = ref('indo') // 'indo' | 'math'
const currentQuestion = ref(0)
const showSidebar = ref(false)

const active = computed(() => sessions[session.value])
const questions = computed(() => active.value.questions)
const answers = computed(() => active.value.answers)
const flagged = computed(() => active.value.flagged)

const formattedTime = computed(() => {
  const t = active.value.timeLeft

  const hours = String(Math.floor(t / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((t % 3600) / 60)).padStart(2, '0')
  const seconds = String(t % 60).padStart(2, '0')

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
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++
  }
}

const prevQuestion = () => {
  if (currentQuestion.value > 0) {
    currentQuestion.value--
  }
}

const toggleFlag = () => {
  flagged.value[currentQuestion.value] = !flagged.value[currentQuestion.value]
}

const isAnswered = (index) => {
  const q = questions.value[index]
  const ans = answers.value[index]

  if (q.type === 'single') {
    return ans !== null && ans !== undefined && ans !== ''
  }

  if (q.type === 'multiple') {
    return Array.isArray(ans) && ans.length > 0
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

const formatFraction = (text) => {
  if (!text) return ''

  return text.replace(
    /(\d+)\s*\/\s*(\d+)/g,
    (_, top, bottom) => `<span class="fraction">
      <span class="top">${top}</span>
      <span class="bottom">${bottom}</span>
    </span>`
  )
}

// =========================
// LABEL UNTUK JAWABAN BENAR/SALAH BERTIPE PERNYATAAN
// =========================

const BOOL_LABELS = {
  truefalse: ['Benar', 'Salah'],
  agreement: ['Setuju', 'Tidak Setuju'],
  goodbad: ['Baik', 'Tidak Baik'],
  suitable: ['Sesuai', 'Kurang Sesuai']
}

function formatBoolArray(type, arr) {
  const labels = BOOL_LABELS[type] || ['Benar', 'Salah']

  return (arr || [])
    .map(v => (v === true ? labels[0] : v === false ? labels[1] : '-'))
    .join(', ')
}

function isEmptyAnswer(q, val) {
  if (q.type === 'single') {
    return val === null || val === undefined || val === ''
  }

  if (q.type === 'short') {
    return !val || !val.trim().length
  }

  if (Array.isArray(val)) {
    return val.length === 0 || val.every(v => v === undefined || v === null)
  }

  return true
}

// =========================
// PENILAIAN SATU SESI
// =========================

function scoreSession(sessionKey) {
  const target = sessions[sessionKey]
  const qs = target.questions
  const ans = target.answers

  const statementTypes = ['truefalse', 'agreement', 'goodbad', 'suitable']

  const results = qs.map((q, index) => {
    let correct = false
    const userAnswer = ans[index]

    if (q.type === 'single') {
      correct = userAnswer === q.answer
    } else if (q.type === 'multiple') {
      const user = [...(userAnswer || [])].sort()
      const key = [...q.answer].sort()
      correct = JSON.stringify(user) === JSON.stringify(key)
    } else if (statementTypes.includes(q.type)) {
      correct = JSON.stringify(userAnswer) === JSON.stringify(q.answer)
    } else if (q.type === 'short') {
      correct = userAnswer?.trim().toLowerCase() === q.answer?.trim().toLowerCase()
    }

    let userAnswerDisplay
    let correctAnswerDisplay

    if (statementTypes.includes(q.type)) {
      correctAnswerDisplay = formatBoolArray(q.type, q.answer)
      userAnswerDisplay = isEmptyAnswer(q, userAnswer)
        ? 'Tidak dijawab'
        : formatBoolArray(q.type, userAnswer)
    } else if (Array.isArray(q.answer)) {
      correctAnswerDisplay = q.answer.join(', ')
      userAnswerDisplay = isEmptyAnswer(q, userAnswer)
        ? 'Tidak dijawab'
        : [...(userAnswer || [])].join(', ')
    } else {
      correctAnswerDisplay = q.answer
      userAnswerDisplay = isEmptyAnswer(q, userAnswer)
        ? 'Tidak dijawab'
        : userAnswer
    }

    return {
      no: q.displayId || q.id,
      originalId: q.originalId || q.id,
      type: q.type,
      question: q.question,
      userAnswer: userAnswerDisplay,
      correctAnswer: correctAnswerDisplay,
      correct
    }
  })

  const correctCount = results.filter(r => r.correct).length

  return {
    label: target.label,
    results,
    correctCount,
    total: qs.length
  }
}

// =========================
// TIMER & PERPINDAHAN SESI
// =========================

let timerInterval = null

function startTimer() {
  clearInterval(timerInterval)

  timerInterval = setInterval(() => {
    const s = active.value

    if (s.timeLeft > 0) {
      s.timeLeft--
    } else {
      clearInterval(timerInterval)

      if (session.value === 'indo') {
        alert('Waktu sesi Bahasa Indonesia habis! Lanjut ke sesi Matematika.')
        goToMathSession()
      } else {
        alert('Waktu habis!')
        finishFullTest()
      }
    }
  }, 1000)
}

function goToMathSession() {
  session.value = 'math'
  currentQuestion.value = 0
  showSidebar.value = false
  startTimer()
}

function finishFullTest() {
  clearInterval(timerInterval)

  const indoResult = scoreSession('indo')
  const mathResult = scoreSession('math')

  const payload = {
    indo: indoResult,
    math: mathResult,
    totalCorrect: indoResult.correctCount + mathResult.correctCount,
    totalQuestions: indoResult.total + mathResult.total
  }

  sessionStorage.setItem('sdFullTestResult', JSON.stringify(payload))

  router.push('/sd/test/result')
}

const handlePrimaryAction = () => {
  if (session.value === 'indo') {
    const confirmed = window.confirm(
      'Yakin ingin menyelesaikan sesi Bahasa Indonesia dan lanjut ke sesi Matematika? Kamu tidak bisa kembali ke sesi ini lagi.'
    )

    if (!confirmed) return

    goToMathSession()
  } else {
    const confirmed = window.confirm(
      'Yakin ingin menyelesaikan Tes Simulasi SD dan melihat hasil akhir?'
    )

    if (!confirmed) return

    finishFullTest()
  }
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  clearInterval(timerInterval)
})
</script>
