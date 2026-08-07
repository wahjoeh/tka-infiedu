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
// PAKET SOAL - BAHASA INDONESIA (3 paket @ 20 soal)
// =========================
// Bank Bahasa Indonesia SD berisi 50 soal (id 1-50). Karena 50 tidak
// habis dibagi 20, paket 3 melengkapi 10 soal sisa (id 41-50) dengan
// meminjam 10 soal dari paket 1 (id 1-10). Sama seperti di
// SDIndoTestView.vue.
const INDO_PACKAGES = {
  1: Array.from({ length: 20 }, (_, i) => i + 1),   // id 1-20
  2: Array.from({ length: 20 }, (_, i) => i + 21),  // id 21-40
  3: [
    ...Array.from({ length: 10 }, (_, i) => i + 41), // id 41-50
    ...Array.from({ length: 10 }, (_, i) => i + 1)   // pinjam id 1-10
  ]
}

function pickQuestionsById(bank, ids) {
  return ids
    .map((id) => bank.find((question) => question.id === id))
    .filter(Boolean)
    .map((q, index) => ({
      ...q,
      displayId: index + 1,
      originalId: q.id
    }))
}

// =========================
// PAKET SOAL - MATEMATIKA (4 paket @ 15 soal)
// =========================
// Bank Matematika SD berisi 60 soal, tersusun dalam 3 blok topik @ 20
// soal: Bilangan (id 1-20), Geometri dan Pengukuran (id 21-40), dan
// Pengolahan Data (id 41-60). Tiap topik dibagi rata jadi 4 kelompok
// @ 5 soal, lalu tiap paket mengambil 1 kelompok dari tiap topik
// (5+5+5=15 soal/paket). Sama seperti di SDMathTestView.vue.
const MATH_TOPIC_RANGES = {
  bilangan: { start: 1 },
  geometri: { start: 21 },
  data: { start: 41 }
}
const MATH_PACKAGE_COUNT = 4
const MATH_QUESTIONS_PER_TOPIC_PER_PACKAGE = 5 // 20 soal/topik ÷ 4 paket

function buildMathPackages() {
  const packages = Array.from({ length: MATH_PACKAGE_COUNT }, () => [])

  Object.values(MATH_TOPIC_RANGES).forEach(({ start }) => {
    for (let pkg = 0; pkg < MATH_PACKAGE_COUNT; pkg++) {
      for (let i = 0; i < MATH_QUESTIONS_PER_TOPIC_PER_PACKAGE; i++) {
        const id = start + pkg * MATH_QUESTIONS_PER_TOPIC_PER_PACKAGE + i
        packages[pkg].push(id)
      }
    }
  })

  return packages
}

const MATH_PACKAGES = buildMathPackages() // index 0-3 => paket 1-4

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

// 35 menit per sesi
const SESSION_DURATION = 35 * 60

// Tiap kali laman dibuka, siswa dapat kombinasi paket Indo & Matematika
// yang dipilih acak dan independen satu sama lain (mis. Indo dapat
// paket 1 sementara Matematika dapat paket 2, atau kombinasi lainnya).
const indoPackageNumber = Math.floor(Math.random() * 3) + 1 // 1-3
const mathPackageIndex = Math.floor(Math.random() * MATH_PACKAGES.length) // 0-3
const mathPackageNumber = mathPackageIndex + 1

const indoQuestions = pickQuestionsById(indoBank, INDO_PACKAGES[indoPackageNumber])
const mathQuestions = pickQuestionsById(mathBank, MATH_PACKAGES[mathPackageIndex])

const sessions = reactive({
  indo: {
    label: `Bahasa Indonesia — Paket ${indoPackageNumber}`,
    questions: indoQuestions,
    answers: buildInitialAnswers(indoQuestions),
    flagged: {},
    timeLeft: SESSION_DURATION
  },
  math: {
    label: `Matematika — Paket ${mathPackageNumber}`,
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
// PENCOCOKAN JAWABAN ISIAN PENDEK (LEBIH FLEKSIBEL)
// =========================
// Sama seperti di SDMathTestView.vue: siswa sering menulis jawaban
// dengan variasi kecil yang seharusnya tetap dianggap benar (beda
// spasi, kapitalisasi, superscript, atau format ribuan/desimal).
// q.answer boleh berupa satu string, atau array berisi beberapa
// varian jawaban yang diterima.
function normalizeShortAnswer(value) {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/²/g, '2')
    .replace(/³/g, '3')
    .replace(/\s+/g, ' ')
}

function shortAnswersMatch(userAnswer, correctAnswer) {
  if (userAnswer === null || userAnswer === undefined) return false

  const normalizedUser = normalizeShortAnswer(userAnswer)
  if (normalizedUser.length === 0) return false

  const acceptedAnswers = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer]

  return acceptedAnswers.some((candidate) => {
    if (candidate === null || candidate === undefined) return false

    const normalizedCandidate = normalizeShortAnswer(candidate)

    // Level 1: sama persis setelah rapikan spasi & kapitalisasi
    if (normalizedUser === normalizedCandidate) return true

    // Level 2: sama setelah semua spasi dihapus (mis. "3kg" vs "3 kg")
    const noSpaceUser = normalizedUser.replace(/\s+/g, '')
    const noSpaceCandidate = normalizedCandidate.replace(/\s+/g, '')

    if (noSpaceUser === noSpaceCandidate) return true

    // Level 3: sama setelah tanda baca umum (titik, koma) ikut dihapus,
    // supaya beda format ribuan/desimal ("Rp8.000,00" vs "Rp8000")
    // tetap bisa cocok
    const bareUser = noSpaceUser.replace(/[.,]/g, '')
    const bareCandidate = noSpaceCandidate.replace(/[.,]/g, '')

    return bareUser === bareCandidate
  })
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
      correct = shortAnswersMatch(userAnswer, q.answer)
    }

    let userAnswerDisplay
    let correctAnswerDisplay

    if (statementTypes.includes(q.type)) {
      correctAnswerDisplay = formatBoolArray(q.type, q.answer)
      userAnswerDisplay = isEmptyAnswer(q, userAnswer)
        ? 'Tidak dijawab'
        : formatBoolArray(q.type, userAnswer)
    } else if (q.type === 'short') {
      correctAnswerDisplay = Array.isArray(q.answer) ? q.answer[0] : q.answer
      userAnswerDisplay = isEmptyAnswer(q, userAnswer)
        ? 'Tidak dijawab'
        : userAnswer
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