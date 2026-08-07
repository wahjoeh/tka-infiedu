<template>
  <div class="test-container exam-math-theme">

    <header class="test-header">

      <div>
        <h2>TKA SMA InfiEdu</h2>
        <p>Simulasi Tes SMA - {{ active.label }}</p>
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
          :class="{ active: session === 'math', done: session === 'indo' || session === 'english' }"
        >
          1. Matematika
        </span>
        <span
          class="session-dot"
          :class="{ active: session === 'indo', done: session === 'english' }"
        >
          2. Bahasa Indonesia
        </span>
        <span
          class="session-dot"
          :class="{ active: session === 'english' }"
        >
          3. Bahasa Inggris
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

          <!-- KATEGORI (KLASIFIKASI) -->
          <div
            v-else-if="questions[currentQuestion]?.type === 'category'"
            class="tf-table-container"
          >
            <table class="tf-table category-table">
              <thead>
                <tr>
                  <th class="statement-col">Pernyataan</th>
                  <th
                    v-for="cat in questions[currentQuestion].categories"
                    :key="cat"
                    class="choice-col category-col"
                  >
                    {{ cat }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(statement,index) in questions[currentQuestion].statements"
                  :key="index"
                >
                  <td class="statement-cell" v-html="formatFraction(statement)"></td>
                  <td
                    v-for="cat in questions[currentQuestion].categories"
                    :key="cat"
                    class="choice-cell"
                  >
                    <input
                      type="radio"
                      :name="`category-${currentQuestion}-${index}`"
                      :value="cat"
                      v-model="answers[currentQuestion][index]"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- URUTAN (ORDERING) -->
          <div
            v-else-if="questions[currentQuestion]?.type === 'order'"
            class="tf-table-container"
          >
            <table class="tf-table order-table">
              <thead>
                <tr>
                  <th class="statement-col">Langkah</th>
                  <th class="choice-col order-col">Urutan</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(statement,index) in questions[currentQuestion].statements"
                  :key="index"
                >
                  <td class="statement-cell" v-html="formatFraction(statement)"></td>
                  <td class="choice-cell">
                    <select
                      class="order-select"
                      v-model.number="answers[currentQuestion][index]"
                    >
                      <option :value="null">-</option>
                      <option
                        v-for="n in questions[currentQuestion].statements.length"
                        :key="n"
                        :value="n"
                      >
                        {{ n }}
                      </option>
                    </select>
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
        {{
          session === 'math'
            ? 'Selesai Sesi Matematika →'
            : session === 'indo'
              ? 'Selesai Sesi Indonesia →'
              : 'Selesai & Lihat Hasil'
        }}
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

import { useRouter, useRoute } from 'vue-router'

import '../../styles/smp-fulltest-test.css'

import indoBank from '../../data/sma/indo/fulltest'
import mathBank from '../../data/sma/math/fulltest'
import englishBank from '../../data/sma/english/fulltest'

const router = useRouter()
const route = useRoute()

// =========================
// PAKET SOAL - BAHASA INDONESIA (4 paket @ 20 soal)
// =========================
// Bank Bahasa Indonesia SMA berisi 70 soal, 2 set x 3 topik: Pemahaman
// Tekstual (18), Pemahaman Inferensial (28), Evaluasi & Apresiasi (24).
// Dibagi jadi 4 paket @ 20 soal dengan komposisi topik yang SAMA di
// tiap paket: 5 Tekstual + 8 Inferensial + 7 Evaluasi & Apresiasi.
// Sama seperti di SMAIndoTestView.vue.
const INDO_TOPIC_POOLS = {
  tekstual: [
    ...Array.from({ length: 9 }, (_, i) => i + 1),
    ...Array.from({ length: 9 }, (_, i) => i + 36)
  ],
  inferensial: [
    ...Array.from({ length: 14 }, (_, i) => i + 10),
    ...Array.from({ length: 14 }, (_, i) => i + 45)
  ],
  evaluasi: [
    ...Array.from({ length: 12 }, (_, i) => i + 24),
    ...Array.from({ length: 12 }, (_, i) => i + 59)
  ]
}
const INDO_TOPIC_TARGET = { tekstual: 5, inferensial: 8, evaluasi: 7 } // 20/paket

// =========================
// PAKET SOAL - MATEMATIKA (4 paket @ 15 soal)
// =========================
// Bank Matematika SMA berisi 54 soal, 5 topik: Bilangan (7), Aljabar
// (16), Geometri (15), Trigonometri (7), Peluang (9). Dibagi jadi 4
// paket @ 15 soal dengan komposisi topik yang SAMA di tiap paket:
// 2 Bilangan + 4 Aljabar + 4 Geometri + 2 Trigonometri + 3 Peluang.
// Sama seperti di SMAMathTestView.vue.
const MATH_TOPIC_POOLS = {
  bilangan: Array.from({ length: 7 }, (_, i) => `bilangan-${i + 1}`),
  aljabar: Array.from({ length: 16 }, (_, i) => `aljabar-${i + 1}`),
  geometri: Array.from({ length: 15 }, (_, i) => `geometri-${i + 1}`),
  trigonometri: Array.from({ length: 7 }, (_, i) => `trigonometri-${i + 1}`),
  peluang: Array.from({ length: 9 }, (_, i) => `peluang-${i + 1}`)
}
const MATH_TOPIC_TARGET = {
  bilangan: 2,
  aljabar: 4,
  geometri: 4,
  trigonometri: 2,
  peluang: 3
} // 15/paket

// =========================
// PAKET SOAL - BAHASA INGGRIS (3 paket @ 20 soal)
// =========================
// Bank Bahasa Inggris SMA berisi 50 soal dari 6 teks bacaan (id 1-50).
// Dibagi jadi 3 paket @ 20 soal, dengan jatah tiap teks proporsional
// terhadap jumlah soalnya (Borobudur 4, Japan 3, Batik 3, Rice Fields
// 3, Social Media 3, Text A&B 4 -> total 20/paket). Sama seperti di
// SMAEnglishTestView.vue.
const ENGLISH_TOPIC_POOLS = {
  borobudur: Array.from({ length: 8 }, (_, i) => i + 1),        // id 1-8
  japan: Array.from({ length: 8 }, (_, i) => i + 9),            // id 9-16
  batik: Array.from({ length: 8 }, (_, i) => i + 17),           // id 17-24
  ricefields: Array.from({ length: 8 }, (_, i) => i + 25),      // id 25-32
  socialmedia: Array.from({ length: 8 }, (_, i) => i + 33),     // id 33-40
  textab: Array.from({ length: 10 }, (_, i) => i + 41)          // id 41-50
}
const ENGLISH_TOPIC_TARGET = {
  borobudur: 4,
  japan: 3,
  batik: 3,
  ricefields: 3,
  socialmedia: 3,
  textab: 4
} // 20/paket

// Fungsi umum: bagi satu bank soal jadi N paket berdasarkan pool topik
// dan target per topik per paket. Kalau target x jumlah paket melebihi
// jumlah soal di topik tsb, sisanya diambil ulang lewat indeks
// berputar (modulo) supaya soal yang dipakai ulang tersebar merata.
function buildTopicPackages(topicPools, topicTarget, packageCount) {
  const packages = Array.from({ length: packageCount }, () => [])

  Object.entries(topicPools).forEach(([topic, pool]) => {
    const perPackage = topicTarget[topic]

    for (let pkg = 0; pkg < packageCount; pkg++) {
      for (let i = 0; i < perPackage; i++) {
        const poolIndex = (pkg * perPackage + i) % pool.length
        packages[pkg].push(pool[poolIndex])
      }
    }
  })

  return packages
}

const INDO_PACKAGES = buildTopicPackages(INDO_TOPIC_POOLS, INDO_TOPIC_TARGET, 4)
const MATH_PACKAGES = buildTopicPackages(MATH_TOPIC_POOLS, MATH_TOPIC_TARGET, 4)

// Untuk Bahasa Inggris, paket disusun per blok teks bacaan (bukan
// daftar id yang rata) supaya urutan tampil teks bisa diacak tanpa
// memecah soal-soal dari teks yang sama.
function buildTopicPackageBlocks(topicPools, topicTarget, packageCount) {
  const packages = Array.from({ length: packageCount }, () => [])

  Object.entries(topicPools).forEach(([topic, pool]) => {
    const perPackage = topicTarget[topic]

    for (let pkg = 0; pkg < packageCount; pkg++) {
      const ids = []

      for (let i = 0; i < perPackage; i++) {
        const poolIndex = (pkg * perPackage + i) % pool.length
        ids.push(pool[poolIndex])
      }

      packages[pkg].push({ topic, ids })
    }
  })

  return packages
}

const ENGLISH_PACKAGE_BLOCKS = buildTopicPackageBlocks(ENGLISH_TOPIC_POOLS, ENGLISH_TOPIC_TARGET, 3)

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

function buildInitialAnswers(questions) {
  const initial = {}

  questions.forEach((q, index) => {
    if (
      q.type === 'multiple' ||
      q.type === 'truefalse' ||
      q.type === 'agreement' ||
      q.type === 'goodbad' ||
      q.type === 'suitable' ||
      q.type === 'category' ||
      q.type === 'order'
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

// 25 menit per sesi
const SESSION_DURATION = 25 * 60

// Tiap kali laman dibuka, tiap mapel dapat nomor paket acak yang
// independen satu sama lain (mis. Matematika paket 1, Indo paket 2,
// Inggris paket 3, atau kombinasi lainnya).
const indoPackageIndex = Math.floor(Math.random() * INDO_PACKAGES.length)
const mathPackageIndex = Math.floor(Math.random() * MATH_PACKAGES.length)
const englishPackageIndex = Math.floor(Math.random() * ENGLISH_PACKAGE_BLOCKS.length)

const indoPackageNumber = indoPackageIndex + 1
const mathPackageNumber = mathPackageIndex + 1
const englishPackageNumber = englishPackageIndex + 1

// Mode trial (?mode=trial): tiap mapel dapat 10 soal acak lepas dari
// bank soal, bukan dari sistem paket tetap. Sama seperti di
// SMAIndoTestView.vue, SMAMathTestView.vue, dan SMAEnglishTestView.vue.
const isTrial = route.query.mode === 'trial'

function pickTrialQuestions(bank, count = 10) {
  return [...bank]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
    .map((question) => question.id)
}

const indoPackageIds = isTrial
  ? pickTrialQuestions(indoBank)
  : INDO_PACKAGES[indoPackageIndex]

const mathPackageIds = isTrial
  ? pickTrialQuestions(mathBank)
  : MATH_PACKAGES[mathPackageIndex]

// Urutan blok teks bacaan TETAP (tidak diacak), supaya posisi soal di
// dalam satu paket selalu sama setiap kali dibuka.
const englishPackageIds = isTrial
  ? pickTrialQuestions(englishBank)
  : ENGLISH_PACKAGE_BLOCKS[englishPackageIndex].flatMap((block) => block.ids)

const indoQuestions = pickQuestionsById(indoBank, indoPackageIds)
const mathQuestions = pickQuestionsById(mathBank, mathPackageIds)
const englishQuestions = pickQuestionsById(englishBank, englishPackageIds)

const indoLabel = isTrial ? 'Bahasa Indonesia (Trial)' : `Bahasa Indonesia (Paket ${indoPackageNumber})`
const mathLabel = isTrial ? 'Matematika (Trial)' : `Matematika (Paket ${mathPackageNumber})`
const englishLabel = isTrial ? 'Bahasa Inggris (Trial)' : `Bahasa Inggris (Paket ${englishPackageNumber})`

const sessions = reactive({
  indo: {
    label: indoLabel,
    questions: indoQuestions,
    answers: buildInitialAnswers(indoQuestions),
    flagged: {},
    timeLeft: SESSION_DURATION
  },
  math: {
    label: mathLabel,
    questions: mathQuestions,
    answers: buildInitialAnswers(mathQuestions),
    flagged: {},
    timeLeft: SESSION_DURATION
  },
  english: {
    label: englishLabel,
    questions: englishQuestions,
    answers: buildInitialAnswers(englishQuestions),
    flagged: {},
    timeLeft: SESSION_DURATION
  }
})

const session = ref('math') // 'math' | 'indo' | 'english'
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
    q.type === 'suitable' ||
    q.type === 'category' ||
    q.type === 'order'
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

  // Konversi pangkat, misalnya x^2 dan 2^{-3}, menjadi superscript.
  const withExponents = text
    .replace(/([a-zA-Z0-9)\]])\^\{([^{}]+)\}/g, '$1<span class="math-sup">$2</span>')
    .replace(/([a-zA-Z0-9)\]])\^(-?\d+|[a-zA-Z])/g, '$1<span class="math-sup">$2</span>')

  return withExponents.replace(
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
    } else if (q.type === 'category' || q.type === 'order') {
      // Kategori & urutan dibandingkan persis per posisi (index harus
      // sama persis dengan kunci jawaban), sama seperti di
      // SMAEnglishTestView.vue.
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

      if (session.value === 'math') {
        alert('Waktu sesi Matematika habis! Lanjut ke sesi Bahasa Indonesia.')
        goToSession('indo')
      } else if (session.value === 'indo') {
        alert('Waktu sesi Bahasa Indonesia habis! Lanjut ke sesi Bahasa Inggris.')
        goToSession('english')
      } else {
        alert('Waktu habis!')
        finishFullTest()
      }
    }
  }, 1000)
}

function goToSession(nextSession) {
  session.value = nextSession
  currentQuestion.value = 0
  showSidebar.value = false
  startTimer()
}

function finishFullTest() {
  clearInterval(timerInterval)

  const indoResult = scoreSession('indo')
  const mathResult = scoreSession('math')
  const englishResult = scoreSession('english')

  const payload = {
    indo: indoResult,
    math: mathResult,
    english: englishResult,
    totalCorrect: indoResult.correctCount + mathResult.correctCount + englishResult.correctCount,
    totalQuestions: indoResult.total + mathResult.total + englishResult.total
  }

  sessionStorage.setItem('smaFullTestResult', JSON.stringify(payload))

  router.push('/sma/test/result')
}

const handlePrimaryAction = () => {
  if (session.value === 'math') {
    const confirmed = window.confirm(
      'Yakin ingin menyelesaikan sesi Matematika dan lanjut ke sesi Bahasa Indonesia? Kamu tidak bisa kembali ke sesi ini lagi.'
    )

    if (!confirmed) return

    goToSession('indo')
  } else if (session.value === 'indo') {
    const confirmed = window.confirm(
      'Yakin ingin menyelesaikan sesi Bahasa Indonesia dan lanjut ke sesi Bahasa Inggris? Kamu tidak bisa kembali ke sesi ini lagi.'
    )

    if (!confirmed) return

    goToSession('english')
  } else {
    const confirmed = window.confirm(
      'Yakin ingin menyelesaikan Tes Simulasi SMA dan melihat hasil akhir?'
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